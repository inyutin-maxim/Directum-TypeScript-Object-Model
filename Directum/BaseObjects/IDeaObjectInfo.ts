import {IEdmsObjectInfo} from "./IEdmsObjectInfo";
import {IObjectInfo} from "./IObjectInfo";
/**
 * Объект IDeaObjectInfo предназначен для получения общей информации о папках и документах.
 */
export interface IDeaObjectInfo extends IEdmsObjectInfo, IObjectInfo{
    /**
     * Свойство возвращает признак наличия полных прав на папку или документ у текущего пользователя: True, если есть полные права на объект, иначе False.
     */
    UserCanManage: boolean;
    /**
     * Свойство возвращает признак наличия прав на изменение папки или документа: True, если у текущего пользователя есть права на изменение объекта, иначе False.
     */
    UserCanModify: boolean;
}