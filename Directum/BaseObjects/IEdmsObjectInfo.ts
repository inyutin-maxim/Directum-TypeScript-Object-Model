import {IObjectInfo} from "./IObjectInfo";
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

    /**
     * Метод возвращает содержимое объекта.
     *
     * @param useCache - признак использования локального кэша папок.
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_allcontents_vse_soderzhimoe.htm
     */
    AllContents(useCache: boolean);
    /**
     * Для папки метод возвращает содержимое папки типа Kind
     *
     * @param kind – тип содержимого объекта;
     * @param useCache – признак использования локального кэша папок.
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_contentsbykind_coderzhimoe_po_tipu.htm
     */
    ContentsByKind(kind: TContentKind, useCache: boolean);
    /**
     * Метод обновляет информацию об объекте.
     */
    Refresh();
}