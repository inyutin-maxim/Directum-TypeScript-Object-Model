import {IApp} from "./Directum/IApp";
export class DirectumJSHelper {
    /**
     * Проверка исполнения в WEB доступе.
     */
    public IsWebAccess: boolean;
    /**
     * Главный класс DIRECTUM.
     */
    public App: IApp;

    constructor() {
        this.IsWebAccess = window.external['Folder'] == null;
        this.App = window.external['Folder']['Application'];
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
        } catch (ex) {
            this.ShowError(ex);
        }
    }

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
    ComponentExecuteInNewProcess(type: string, name: string, params: string, unit: string) {
        // Выполнить компонент DIRECTUM в новом окне.
        return this.ScriptExecute('ComponentExecuteInNewProcess', {
            'ComponentType': type,
            'ComponentName': name,
            'Params': params,
            'Unit': unit
        });
    }

    /**
     * @summary Открыть справочник
     *
     * @param {string} name Наименование справочника
     * @param {string} viewName Наименование представления
     */
    ReferenceOpen(name: string, viewName: string) {
        try {
            // Получить IReference
            let ref = this.App.ReferencesFactory.ReferenceFactory(name).GetComponent();
            viewName = viewName || 'Главное';
            // Задать нужно представление
            let view = ref.CreateView(viewName);
            // Показать форму-список справочника
            view.MainForm.ShowNoModal();
        } catch (ex) {
            this.ShowError(ex);
        }
    }

    /**
     * @summary Запустить мастер действий
     *
     * @param {string} code Код мастера действий
     */
    WizardExecute(code: string) {
        try {
            // Получить IWizard по коду
            let wizard = this.App.WizardFactory.GetObjectByCode(code);
            // Если мастер действий не найден, то сообщить пользователю
            if (wizard != null) {
                wizard.Execute();
            } else {
                throw 'Мастер действий с кодом "' + code + '"  не найден или у Вас нет на него прав.';
            }
        } catch (ex) {
            this.ShowError(ex);
        }
    }

    /**
     * @summary Открыть карточку записи справочника
     *
     * @param {string} referenceName Код справочника
     * @param {int} id Идентификатор записи справочника
     */
    OpenCard(referenceName: string, id: number) {
        try {
            let ref = this.App.ReferencesFactory.ReferenceFactory(referenceName).GetObjectByID(id);
            ref.Form.Show();
        } catch (err) {
            this.ShowError(err);
        }
    }

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