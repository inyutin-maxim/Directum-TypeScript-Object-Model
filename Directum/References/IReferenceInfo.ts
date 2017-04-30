import {IUser} from "../AuxiliaryObjects/IUser";
import {IReference} from "./IReference";
import {ICompRecordInfo} from "./ICompRecordInfo";
import {IObjectInfo} from "../BaseObjects/IObjectInfo";
/**
 * Объект IReferenceInfo предназначен для получения информации о записи справочника.
 */
export interface IReferenceInfo extends ICompRecordInfo, IObjectInfo {
    /**
     * Свойство возвращает имя пользователя, который является автором записи справочника.
     */
    readonly Author: IUser;
    /**
     * Свойство возвращает дату и время создания записи справочника.
     */
    readonly Created: Date;
    /**
     * Свойство возвращает дату и время последнего изменения записи справочника.
     */
    readonly Modified: Date;
    /**
     * Свойство возвращает справочник, к которому относится запись
     */
    readonly Reference: IReference;
}