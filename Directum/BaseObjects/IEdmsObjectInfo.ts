import {IObjectInfo} from "../Info/IObjectInfo";
import {TUserObjectStatus} from "../Enums/TUserObjectStatus";
import {TContentKind} from "../Enums/TContentKind";
import {IUser} from "../AuxiliaryObjects/IUser";

/**
 * Объект IEdmsObjectInfo предназначен для получения информации об объектах ЭДО: документах, папках, задачах, заданиях, вариантах запуска компонент.
 */
export interface IEdmsObjectInfo extends IObjectInfo{
    /**
     * Свойство возвращает автора объекта.
     */
    Author: IUser;
    /**
     * Свойство возвращает дату и время создания объекта.
     */
    Created: Date;
    /**
     * Свойство возвращает тип объекта.
     */
    Kind: TContentKind;
    /**
     * Свойство возвращает дату и время последней модификации объекта.
     */
    Modified: Date;
    /**
     * Свойство возвращает информацию о родительском объекте. Свойство является устаревшим, использовать его не рекомендуется.
     */
    Parent: IEdmsObjectInfo;
    /**
     * Свойство возвращает пользовательский статус объекта.
     */
    UserStatus: TUserObjectStatus;

    AllContents();
    ContentsByKind();
    Refresh();
}