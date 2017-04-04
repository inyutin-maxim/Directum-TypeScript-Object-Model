import {IList} from "../AuxiliaryObjects/IList";
import {IForEach} from "../AuxiliaryObjects/IForEach";
/**
 * Объект ICheckPointedList предназначен для восстановления состояний элементов списка.
 */
export interface ICheckPointedList extends IList, IForEach {
    /**
     * Метод устанавливает контрольную точку, запоминая текущие значения свойств Enabled всех элементов списка.
     */
    AddCheckPoint(): void;
    /**
     * Метод убирает последнюю контрольную точку.
     */
    ReleaseCheckPoint(): void;
}