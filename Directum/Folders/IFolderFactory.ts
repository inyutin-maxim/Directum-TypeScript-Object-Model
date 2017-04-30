import {IContents} from "../AuxiliaryObjects/IContents";
import {IEdmsObjectFactory} from "../BaseObjects/IEdmsObjectFactory";
import {IFactory} from "../BaseObjects/IFactory";
import {IFolder} from "./IFolder";
import {TContentKind} from "../Enums/TContentKind";
import {IFolderInfo} from "./IFolderInfo";
import {IEdmsObjectInfo} from "../BaseObjects/IEdmsObjectInfo";
import {IReferenceInfo} from "../References/IReferenceInfo";
/**
 * Объект IFolderFactory предназначен для работы с папками.
 */
export interface IFolderFactory extends IEdmsObjectFactory, IFactory {
    /**
     * Свойство возвращает список предопределенных папок: «Входящие», «Исходящие», «Избранное», «Общая папка», «Компоненты» и «Быстрый запуск».
     * Элементами списка являются объекты IFolderInfo.
     */
    readonly RootFolders: IContents;

    /**
     * Метод очищает локальный кэш папок. При последующем обращении к локальному кэшу данные будут получены с сервера.
     */
    ClearCache(): void;
    /**
     * Метод создает копию папки SourceFolder без содержимого.
     *
     * @param sourceFolder копируемая папка.
     */
    Copy(sourceFolder: IFolder): IFolder;
    /**
     * Метод создает новую папку с типом содержимого ContentKind.
     * Новую папку следует сохранить с помощью метода Save.
     *
     * @param contentKind тип содержимого папки.
     */
    CreateNew(contentKind: TContentKind): IFolder;
    /**
     * Метод вырезает ссылки на объекты из папки, информация о которой указана в параметре FolderInfo.
     *
     * @param folderInfo информация о папке, из которой будет вырезана ссылка
     * @param contents содержимое, которое будет вырезано из данной папки.
     */
    CutFromFolder(folderInfo: IFolderInfo, contents:
        IEdmsObjectInfo
        | IContents
        | Array<IEdmsObjectInfo>
        | IReferenceInfo
        | Array<IReferenceInfo>): number;
    /**
     * Метод вставляет ссылки на объекты в папку, информация о которой указана в параметре FolderInfo.
     *
     * @param folderInfo информация о папке, в которую будет вставлена ссылка
     * @param contents содержимое, которое будет вставлено в данную папку.
     */
    PasteToFolder(folderInfo: IFolderInfo, contents:
        IEdmsObjectInfo
        | IContents
        | Array<IEdmsObjectInfo>
        | IReferenceInfo
        | Array<IReferenceInfo>): number;
    /**
     * Метод вставляет ссылки в папку объектов из буфера обмена.
     *
     * @param folderInfo информация о папке
     */
    PasteToFolderFromClipboard(folderInfo: IFolderInfo): number;
}