import {TCriterionContentType} from "../Enums/TCriterionContentType";
import {IRequisiteDescription} from "./IRequisiteDescription";
/**
 * Объект ISearchCriterion предназначен для работы с критерием поиска.
 */
export interface ISearchCriterion {
    /**
     * Свойство возвращает значение критерия поиска в виде строки.
     */
    readonly AsString: string;
    /**
     * Свойство возвращает тип значений критерия поиска.
     */
    readonly ContentType: TCriterionContentType;
    /**
     * Свойство предоставляет доступ к признаку необходимости запрашивать значение критериев поиска при выполнении поиска:
     * True, если значение будет запрошено, иначе False.
     */
    QueryValue: boolean;
    /**
     * Свойство предоставляет доступ к имени реквизита поиска, с которым связан критерий.
     */
    RequisiteName: string;
    /**
     * Свойство возвращает описание реквизита, с которым связан критерий поиска.
     * Значение свойства становится доступным после означивания свойства RequisiteName.
     */
    readonly RequisiteDescription: IRequisiteDescription;
}