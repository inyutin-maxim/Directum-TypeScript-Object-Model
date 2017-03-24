import {IObjectInfo} from "./IObjectInfo";
import {IDeaObjectInfo} from "../BaseObjects/IDeaObjectInfo";
/**
 * Объект IFolderInfo предназначен для получения информации о папке.
 */
export interface IFolderInfo extends IObjectInfo, IDeaObjectInfo{
    ContentKind;
    Folder;
    FolderType;
    HasChildren;
    ShowCoverOnly;
    ShowUnread;
    URL;

    AllContents();
    ContentsByKind();
    Refresh();
}