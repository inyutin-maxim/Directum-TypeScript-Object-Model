import {IObjectInfo} from "../BaseObjects/IObjectInfo";
/**
 * Объект ICompRecordInfo предназначен для получения информации о записи компоненты.
 */
export interface ICompRecordInfo extends IObjectInfo {
    /**
     * Свойство возвращает код записи компоненты.
     */
    readonly Code: string;
    /**
     * Свойство возвращает имя текущего представления компоненты.
     */
    readonly ViewCode: string;
}