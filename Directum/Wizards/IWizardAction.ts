import {TWizardActionType} from "../Enums/TWizardActionType";
/**
 * Объект IWizardAction предназначен для работы с действиями этапов мастеров.
 */
export interface IWizardAction {
    /**
     * Свойство возвращает тип действия.
     */
    readonly ActionType: TWizardActionType;
    /**
     * Свойство возвращает и устанавливает признак доступности действия:
     * True, если действие можно выполнить, иначе False.
     */
    Enabled: string;
    /**
     * Свойство возвращает имя действия.
     */
    readonly Name: string;
    /**
     * Свойство возвращает заголовок действия.
     */
    readonly Title: string;
    /**
     * Метод выполняет обработчик действия мастера на ISBL.
     */
    Execute()
}