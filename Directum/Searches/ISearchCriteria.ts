import {IForEach} from "../AuxiliaryObjects/IForEach";
import {ISearchCriterion} from "./ISearchCriterion";
import {TJoinType} from "../Enums/TJoinType";
/**
 * Объект ISearchCriteria предназначен для работы со списком критериев поиска.
 */
export interface ISearchCriteria extends IForEach {
    /**
     * Свойство предоставляет доступ к дополнительным таблицам в критерии поиска.
     */
    AddFrom: string;
    /**
     * Свойство предоставляет доступ к дополнительным ограничениям в критерии поиска.
     */
    AddWhere: string;
    /**
     * Свойство возвращает признак наличия запрашиваемых критериев:
     * True, если список критериев содержит критерии, значения которых необходимо запросить перед выполнением поиска,
     * то есть хотя бы у одного критерия поиска свойство ISearchCriterion.QueryValue имеет значение True.
     */
    readonly HasQueriedCriterion: boolean;
    /**
     * Свойство возвращает критерий поиска с индексом Index.
     *
     * @param index индекс критерия.
     */
    Items(index: number): ISearchCriterion;

    /**
     * Метод добавляет новый критерий поиска для реквизита с именем RequisiteName из списка ISearchDescription.
     * RequisiteDescriptionList к списку критериев и возвращает его в качестве результата.
     *
     * @param requisiteName имя реквизита
     */
    Add(requisiteName: string): ISearchCriterion;

    /**
     * Метод добавляет к итоговому запросу соединение.
     *
     * @param tableName имя таблицы, для которой добавляется соединение
     * @param joinType тип соединения
     * @param condition условие соединения
     */
    AddJoin(tableName: string, joinType: TJoinType, condition: string): void;
    /**
     * Метод очищает список критериев поиска.
     */
    Clear(): void;
    /**
     * Метод удаляет критерий поиска с индексом Index.
     *
     * @param index индекс записи
     */
    Delete(index: number): void;

    /**
     * Метод возвращает индекс критерия Criterion в списке.
     * Если критерия Criterion в списке нет, то метод возвращает –1.
     *
     * @param criterion критерий поиска
     */
    IndexOf(criterion: ISearchCriterion): number;
}