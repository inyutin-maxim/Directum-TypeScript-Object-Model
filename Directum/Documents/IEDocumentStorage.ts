import {TEDocumentStorageFunction} from "../Enums/TEDocumentStorageFunction";
import {TEDocumentStorageType} from "../Enums/TEDocumentStorageType";
/**
 * Объект IEDocumentStorage предназначен для работы с хранилищами текстов документов.
 */
export interface IEDocumentStorage {
    /**
     * Свойство возвращает имя компьютера, на котором расположено хранилище документов.
     */
    readonly ComputerName: string;
    /**
     * Свойство возвращает имя базы данных для хранилищ, имеющих тип edstSQLServer.
     */
    readonly DatabaseName: string;
    /**
     * Свойство возвращает признак контроля прав доступа:
     * True, если права доступа к файлам хранилища назначаются службой файловых хранилищ автоматически,
     * False, если права доступа к файлу выдает администратор.
     */
    readonly IsCheckingAccessRights: boolean;
    /**
     * Свойство возвращает признак редактирования документов в хранилище:
     * True, если документ редактируется прямо в хранилище,
     * False, если работа с документом производится на локальной машине.
     */
    readonly IsEditingAllowed: boolean;
    /**
     * Свойство возвращает путь к корневой папке хранилища документов на компьютере ComputerName.
     */
    readonly LocalPath: string;
    /**
     * Свойство возвращает код хранилища в справочнике Хранилища текстов документов.
     */
    readonly Name: string;
    /**
     * Свойство возвращает тип хранилища. Свойство соответствует реквизиту Тип справочника Хранилища текстов документов.
     */
    readonly StorageType: TEDocumentStorageType;
    /**
     * Свойство возвращает назначение хранилища.
     */
    readonly StorageFunction: TEDocumentStorageFunction;
    /**
     * Свойство возвращает сетевое имя общего ресурса, связанного с корневой папкой хранилища документов.
     */
    readonly SharedSourceName: string;
    /**
     * Свойство возвращает наименование хранилища из справочника Хранилища текстов документов.
     */
    readonly Title: string;
}