import {ICheckPointedList} from "./ICheckPointedList";
import {IList} from "../AuxiliaryObjects/IList";
import {IForEach} from "../AuxiliaryObjects/IForEach";
import {IRule} from "./IRule";
/**
 * Объект IRuleList предназначен для хранения набора правил.
 */
export interface IRuleList extends ICheckPointedList, IList, IForEach {
    /**
     * Свойство возвращает правило по его ИД.
     *
     * @param id целочисленный идентификатор правила
     */
    Rules(id: number): IRule;
    /**
     * Метод устанавливает значение свойства Enabled в False у всех правил, которые содержатся в списке.
     */
    DisableAll(): void;
    /**
     * Метод устанавливает значение свойства Enabled в True у всех правил, которые содержатся в списке.
     */
    EnableAll(): void;
}