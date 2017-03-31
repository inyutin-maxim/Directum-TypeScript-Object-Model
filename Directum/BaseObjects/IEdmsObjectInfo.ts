import {IObjectInfo} from "./IObjectInfo";
import {TUserObjectStatus} from "../Enums/TUserObjectStatus";
import {TContentKind} from "../Enums/TContentKind";
import {IUser} from "../AuxiliaryObjects/IUser";
import {IContents} from "../AuxiliaryObjects/IContents";

/**
 * Объект IEdmsObjectInfo предназначен для получения информации об объектах ЭДО: документах, папках, задачах, заданиях, вариантах запуска компонент.
 */
export interface IEdmsObjectInfo extends IObjectInfo{
    /**
     * Свойство возвращает автора объекта.
     */
    readonly Author: IUser;
    /**
     * Свойство возвращает дату и время создания объекта.
     */
    readonly Created: Date;
    /**
     * Свойство возвращает тип объекта.
     */
    readonly Kind: TContentKind;
    /**
     * Свойство возвращает дату и время последней модификации объекта.
     */
    readonly Modified: Date;
    /**
     * Свойство возвращает информацию о родительском объекте. Свойство является устаревшим, использовать его не рекомендуется.
     */
    readonly Parent: IEdmsObjectInfo;
    /**
     * Свойство возвращает пользовательский статус объекта.
     */
    readonly UserStatus: TUserObjectStatus;

    /**
     * Метод возвращает содержимое объекта.
     *
     * @param useCache - признак использования локального кэша папок.
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_allcontents_vse_soderzhimoe.htm
     */
    AllContents(useCache: boolean): IContents;
    /**
     * Для папки метод возвращает содержимое папки типа Kind
     *
     * @param kind – тип содержимого объекта;
     * @param useCache – признак использования локального кэша папок.
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_contentsbykind_coderzhimoe_po_tipu.htm
     */
    ContentsByKind(kind: TContentKind, useCache: boolean): IContents;
    /**
     * Метод обновляет информацию об объекте.
     */
    Refresh(): void;
}