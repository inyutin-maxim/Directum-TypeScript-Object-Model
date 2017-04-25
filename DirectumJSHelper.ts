import {IApplication} from "./Directum/IApplication";
//noinspection JSUnusedGlobalSymbols
export class DirectumJSHelper {
    /**
     * Проверка исполнения в WEB доступе.
     */
    public IsWebAccess: boolean;
    /**
     * Главный класс DIRECTUM.
     */
    public App: IApplication;

    //noinspection JSUnusedGlobalSymbols
    constructor() {
        this.IsWebAccess = Object.keys(window.external).filter(item => item == 'Folder').length === 0;
        if (this.IsWebAccess) {
            this.App = window.external['Folder']['Application'];
        }
    }

    /**
     * @summary Выполнить сценарий DIRECTUM.
     *
     * @param {string} name Наименование сценария.
     * @param {Object} params Параметры сценария.
     *
     * @returns {string} результат выполнения сценария.
     */
    public ScriptExecute(name: string, params: Object) {
        try {
            if (this.IsWebAccess) {
                // Получить IScript по имени
                let script = this.App.ScriptFactory.GetObjectByName(name);

                // Получить параметры сценария
                let scriptParams = script.Params;
                // Добавить параметры сценария
                for (let param in params) {
                    scriptParams.Add(param, params[param] || '');
                }

                // Запустить сценарий
                return script.Execute()
            }
        } catch (ex) {
            this.ShowError(ex);
        }
    }

    //noinspection JSUnusedGlobalSymbols
    /**
     * @summary Выполнить компонент DIRECTUM в новом окне.
     *
     * @param type {string} Тип запускаемой компоненты, значение по умолчанию "Script";
     * @param name {string} Наименование запускаемой компоненты
     * @param params {string} Дополнительные параметры запуска
     * @param unit {string} Наименование модуля для запуска всех отчетов одного модуля
     *
     * @returns {string} результат исполнения компоненты.
     */
    public ComponentExecuteInNewProcess(type: string, name: string, params: string, unit: string) {
        if (this.IsWebAccess) {
            // Выполнить компонент DIRECTUM в новом окне.
            return this.ScriptExecute('ComponentExecuteInNewProcess', {
                'ComponentType': type,
                'ComponentName': name,
                'Params': params,
                'Unit': unit
            });
        }
    }

    //noinspection JSUnusedGlobalSymbols
    /**
     * @summary Открыть справочник
     *
     * @param {string} name Наименование справочника
     * @param {string} viewName Наименование представления
     */
    public ReferenceOpen(name: string, viewName?: string) {
        try {
            if (this.IsWebAccess) {
                // Получить IReference
                let ref = this.App.ReferencesFactory.ReferenceFactory(name).GetComponent();
                ref.ViewName = viewName || 'Главное';
                // Показать форму-список справочника
                ref.ComponentForm.ShowNoModal();
            }
        } catch (ex) {
            this.ShowError(ex);
        }
    }

    //noinspection JSUnusedGlobalSymbols
    /**
     * @summary Запустить мастер действий
     *
     * @param {string} code Код мастера действий
     */
    public WizardExecute(code: string) {
        try {
            if (this.IsWebAccess) {
                // Получить IWizard по коду
                let wizard = this.App.WizardFactory.GetObjectByCode(code);
                // Если мастер действий не найден, то сообщить пользователю
                if (wizard != null) {
                    wizard.Execute();
                } else {
                    //noinspection ExceptionCaughtLocallyJS
                    throw 'Мастер действий с кодом "' + code + '"  не найден или у Вас нет на него прав.';
                }
            }
        } catch (ex) {
            this.ShowError(ex);
        }
    }

    //noinspection JSUnusedGlobalSymbols
    /**
     * @summary Открыть карточку записи справочника
     *
     * @param {string} referenceName Код справочника
     * @param {int} id Идентификатор записи справочника
     */
    public OpenCard(referenceName: string, id: number) {
        try {
            if (this.IsWebAccess) {
                let ref = this.App.ReferencesFactory.ReferenceFactory(referenceName).GetObjectByID(id);
                ref.Form.Show();
            }
        } catch (err) {
            this.ShowError(err);
        }
    }

    //noinspection JSMethodCanBeStatic
    /**
     * @summary Вывести ошибку.
     *
     * @param  {Error} error Ошибка.
     */
    private ShowError(error) {
        // Если при открытии была ошибка, то вывести ее
        let str = error.message;
        if (str.indexOf('4AFB2AB8-BDFD-4094-B27E-D105C8A89EFB') == -1) {
            alert(str.replace('^', ''));
        }
    }
}