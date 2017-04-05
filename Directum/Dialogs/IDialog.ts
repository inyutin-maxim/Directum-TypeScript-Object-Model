import {IComponent} from "../References/IComponent";
import {IObject} from "../BaseObjects/IObject";
import {IActionList} from "../VisualView/IActionList";
import {IControlList} from "../VisualView/IControlList";
/**
 * Содержит методы и свойства для работы с компонентами типа «Диалог».
 */
export interface IDialog extends IComponent, IObject {
    /**
     * Свойство возвращает список действий диалога. Элементами списка являются объекты IAction.
     */
    readonly Actions: IActionList;
    /**
     * Свойство возвращает список управляющих элементов диалога. Элементами списка являются объекты IControl или его наследники.
     */
    readonly Controls: IControlList;
    /**
     * Свойство предоставляет доступ к результату работы диалога.
     */
    Result: any;
    /**
     * Метод проверяет заполнение обязательных реквизитов диалога. Если обязательный реквизит не заполнен, то будет сгенерировано исключение.
     */
    CheckRequiredRequisitesFullness(): void;
    /**
     * Метод показывает форму диалога и возвращает результат выполнения диалога.
     */
    Show(): any;
}