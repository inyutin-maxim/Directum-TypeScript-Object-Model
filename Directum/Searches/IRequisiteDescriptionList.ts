import {IForEach} from "../AuxiliaryObjects/IForEach";
import {IRequisiteDescription} from "./IRequisiteDescription";
/**
 * Объект IRequisiteDescriptionList предназначен для доступа к описаниям реквизитов поиска.
 */
export interface IRequisiteDescriptionList extends IForEach {
    /**
     * Свойство возвращает описание реквизита с индексом Index.
     *
     * @param index индекс описания реквизита.
     */
    Items(index: number): IRequisiteDescription;
    /**
     * Свойство возвращает описание реквизита с именем Name.
     *
     * @param name имя реквизита.
     */
    RequisiteDescriptions(name: string): IRequisiteDescription;
}