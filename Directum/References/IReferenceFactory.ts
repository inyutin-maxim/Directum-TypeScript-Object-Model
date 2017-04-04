import {IReference} from "./IReference";
import {IObjectInfo} from "../BaseObjects/IObjectInfo";
import {IStringList} from "../AuxiliaryObjects/IStringList";
import {IComponent} from "./IComponent";
import {IFactory} from "../BaseObjects/IFactory";
/**
 * Объект IReferenceFactory предназначен для работы с записями справочника.
 */
export interface IReferenceFactory extends IFactory {
    /**
     * ИД типа справочника.
     */
    readonly ID: string;
    /**
     * Свойство возвращает имя справочника, для работы с которым предназначена фабрика.
     */
    readonly Name: string;
    /**
     * Свойство возвращает список имен справочников, связанных со справочником фабрики.
     */
    readonly LinkedReferenceNames: IStringList;
    /**
     * Свойство возвращает заголовок справочника на текущем языке системы.
     */
    readonly Title: string;

    /**
     * Свойство возвращает историю работы с записью компоненты администратора.
     *
     * @param id ИД записи справочника.
     */
    AdministrationHistory(id: number): IComponent;
    /**
     * Свойство возвращает компоненту История работы с записью для записи справочника.
     *
     * @param id ИД записи справочника.
     */
    History(id: number): IComponent;
    /**
     * Свойство возвращает информацию о записи справочника с кодом Code.
     *
     * @param code код записи справочника.
     */
    ObjectInfoByCode(code: string): IObjectInfo;
    /**
     * Метод создает новую запись в справочнике.
     */
    CreateNew(): IReference;
    /**
     * Метод удаляет запись с указанным кодом в справочнике, для работы с которым предназначена фабрика.
     *
     * @param code код записи справочника.
     */
    DeleteByCode(code: string): void;
    /**
     * Метод удаляет запись с указанным ИД в справочнике, для работы с которым предназначена фабрика.
     *
     * @param id ИД записи справочника.
     */
    DeleteByID(id: number): void;
    /**
     * Метод возвращает объект IReference с набором данных, содержащим все записи справочника.
     */
    GetComponent(): IReference;
    /**
     * Метод возвращает объект IReference, набор данных которого содержит одну запись справочника с кодом Code и находится в режиме просмотра.
     * @param code код записи справочника.
     */
    GetObjectByCode(code: string): IReference;
}