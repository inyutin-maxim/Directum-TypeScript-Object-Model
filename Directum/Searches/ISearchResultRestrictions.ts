import {TMaxRecordCountRestrictionType} from "../Enums/TMaxRecordCountRestrictionType";
/**
 * Объект ISearchResultRestrictions предназначен для ограничения результатов поиска программно.
 */
export interface ISearchResultRestrictions {
    /**
     * Свойство возвращает максимальное количество результатов поиска.
     */
    MaxRecordCount: number;
    /**
     * Свойство возвращает тип ограничения результатов поиска.
     */
    MaxRecordCountRestrictionType: TMaxRecordCountRestrictionType;
    /**
     * Свойство возвращает признак генерации исключения, если количество результатов поиска превышает ограничение,
     * заданное в свойстве MaxRecordCount:
     * True, если будет сгенерировано исключение, иначе False.
     */
    NeedGenerateExceptionOnResultExceedsMaxRecordCount: boolean;
    /**
     * Свойство возвращает признак превышения ограничения результатов поиска:
     * True, если количество результатов поиска превышает ограничение, заданное в свойстве MaxRecordCount, иначе False.
     */
    readonly IsResultExceedsMaxRecordCount: number;
}