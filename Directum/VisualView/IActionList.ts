import {IAction} from "./IAction";
import {IList} from "../AuxiliaryObjects/IList";
import {IForEach} from "../AuxiliaryObjects/IForEach";
/**
 * Объект IActionList предназначен для хранения списка действий. Элементами списка являются объекты IAction.
 */
export interface IActionList extends IList, IForEach {
    /**
     * Метод возвращает действие из списка с именем Name. Если действия с именем Name нет в списке, то метод возвращает nil.
     */
    FindAction(name: string): IAction;
}