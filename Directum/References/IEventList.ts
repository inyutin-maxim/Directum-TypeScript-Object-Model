import {IEvent} from "./IEvent";
import {IList} from "../AuxiliaryObjects/IList";
import {IForEach} from "../AuxiliaryObjects/IForEach";
import {ICheckPointedList} from "./ICheckPointedList";
/**
 * Объект IEventList предназначен для хранения набора событий.
 */
export interface IEventList extends IList, IForEach, ICheckPointedList {
    /**
     * Свойство возвращает событие по его ИД.
     *
     * @param id целочисленный идентификатор события
     */
    Events(id: number): IEvent;
    /**
     * Метод устанавливает свойство Enabled в False для всех событий, которые содержатся в списке.
     */
    DisableAll();
    /**
     * Метод устанавливает значение свойства Enabled в True для всех событий, которые содержатся в списке.
     */
    EnableAll();
}