import {IObject} from "../BaseObjects/IObject";
/**
 * Объект IScript содержит методы и свойства для работы с компонентами типа «Сценарий».
 */
export interface IScript extends IObject {
    /**
     * Метод выполняет сценарий.
     */
    Execute(): any;
}