import {IApplication} from "../IApplication";
import {TContentKind} from "../Enums/TContentKind";
import {IDialog} from "./IDialog";
/**
 * Объект IDialogFactory предназначен для создания диалогов.
 */
export interface IDialogFactory {
    /**
     * Свойство возвращает объект-приложение, которому принадлежит фабрика.
     */
    readonly Application: IApplication;
    /**
     * Свойство возвращает тип объектов, к которым предоставляет доступ фабрика.
     */
    readonly Kind: TContentKind;
    /**
     * Метод создает новый диалог.
     *
     * @param callID ИД вызова. Параметр позволяет настроить отдельно сохранение настроек и сохранение последних значений реквизитов для диалогов одного типа.
     */
    CreateNew(callID?: string): IDialog;
}