import {IObjectImporter} from "./IObjectImporter";
import {IMetadataRepository} from "./IMetadataRepository";
import {IApplication} from "../IApplication";
import {IAccountRepository} from "./IAccountRepository";
/**
 * Фабрика IDICSFactory предназначена для обработки запросов от агента DICS.
 */
export interface IDICSFactory {
    /**
     * Свойство возвращает хранилище адресной информации.
     */
    readonly AccountRepository: IAccountRepository;
    /**
     * Свойство возвращает объект-приложение, которому принадлежит фабрика.
     */
    readonly Application: IApplication;
    /**
     * Свойство возвращает хранилище метаданных.
     */
    readonly MetadataRepository: IMetadataRepository;
    /**
     * Свойство возвращает средство для импорта объектов IObjectImporter.
     */
    readonly ObjectImporter: IObjectImporter;
}