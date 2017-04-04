import {IFactory} from "../BaseObjects/IFactory";
import {IReferenceFactory} from "./IReferenceFactory";
/**
 * Объект IReferencesFactory предназначен для получения фабрики справочника с помощью свойства ReferenceFactory.
 */
export interface IReferencesFactory extends IFactory {
    /**
     * Свойство возвращает фабрику справочника с именем Name.
     *
     * @param name имя справочника
     */
    ReferenceFactory(name: string): IReferenceFactory;
}