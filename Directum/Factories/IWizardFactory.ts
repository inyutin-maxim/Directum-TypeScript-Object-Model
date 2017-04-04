import {IWizard} from "../Wizards/IWizard";
/**
 * Объект IWizardFactory предназначен для доступа к мастерам действий.
 */
export interface IWizardFactory{
    /**
     * Метод возвращает мастер действий по его коду в справочнике Мастера действий.
     *
     * @param code код мастера действий. В качестве значения параметра следует передавать значение поля *Код в справочнике Мастера действий.
     */
    GetObjectByCode(code: string): IWizard;
    /**
     * Метод возвращает мастер действий по его ИД в справочнике Мастера действий.
     *
     * @param id ИД мастера действий. В качестве значения параметра следует передавать значение поля ИД в справочнике Мастера действий.
     */
    GetObjectByID(id: number): IWizard;
    /**
     * Метод возвращает мастер действий по его наименованию в справочнике Мастера действий.
     *
     * @param name наименование мастера действий.
     * В качестве значения параметра следует передавать значение поля *Наименование из справочника Мастера действий.
     */
    GetObjectByName(name: string): IWizard;
}