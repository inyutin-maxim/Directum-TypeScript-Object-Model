import {IObjectInfo} from "../BaseObjects/IObjectInfo";
import {IDeaObjectInfo} from "../BaseObjects/IDeaObjectInfo";
import {TFolderType} from "../Enums/TFolderType";
import {IFolder} from "../IFolder";
import {TContentKind} from "../Enums/TContentKind";
//noinspection JSUnusedGlobalSymbols
/**
 * Объект IFolderInfo предназначен для получения информации о папке.
 */
export interface IFolderInfo extends IObjectInfo, IDeaObjectInfo{
    /**
     * Свойство возвращает тип содержимого папки: задачи, задания, документы, варианты запуска компонент, папки.
     */
    readonly ContentKind: TContentKind;
    /**
     * Свойство возвращает папку.
     */
    readonly Folder: IFolder;
    /**
     * Свойство возвращает тип папки.
     */
    readonly FolderType: TFolderType;
    /**
     * Свойство возвращает признак наличия вложенных папок: True, если папка содержит другие папки, иначе False.
     */
    readonly HasChildren: boolean;
    /**
     * Свойство возвращает признак отображения только обложки папки.
     */
    readonly ShowCoverOnly: boolean;
    /**
     * Свойство возвращает признак отображения количества непрочитанных заданий в папке:
     * True, если для папки настроено отображение количества непрочитанных заданий, иначе False.
     */
    readonly ShowUnread: boolean;
    /**
     * Свойство возвращает обложку папки.
     */
    readonly URL: string;
}