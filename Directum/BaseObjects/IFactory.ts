import {IObject} from "../IObject";
import {IApplication} from "../IApplication";
import {TContentKind} from "../Enums/TContentKind";
import {IObjectInfo} from "./IObjectInfo";
/**
 * Фабрики предназначены для получения объектов системы.
 */
export interface IFactory {
    /**
     * Свойство возвращает объект-приложение, которому принадлежит фабрика.
     */
    readonly Application: IApplication;
    /**
     * Свойство возвращает тип объектов, к которым предоставляет доступ фабрика.
     */
    readonly Kind: TContentKind;
    /**
     * Свойство предоставляет информацию об объекте по его ИД.
     *
     * @param id ИД объекта.
     */
    ObjectInfo(id: number): IObjectInfo;

    /**
     * Метод возвращает объект по его ИД.
     *
     * @param id ИД объекта.
     */
    GetObjectByID(id: number): IObject;
}