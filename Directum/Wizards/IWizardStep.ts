/**
 * Объект IWizardStep предназначен для работы с этапами мастера действий.
 */
import {TWizardStepType} from "../Enums/TWizardStepType";
import {IWizardAction} from "./IWizardAction";
import {TWizardStepResult} from "../Enums/TWizardStepResult";
import {IList} from "../AuxiliaryObjects/IList";

/**
 * Объект IWizardStep предназначен для работы с этапами мастера действий.
 */
export interface IWizardStep {
    /**
     * Свойство возвращает список действий этапа мастера. Элементами списка являются объекты IWizardAction.
     */
    readonly Actions: IList;
    /**
     * Свойство возвращает описание этапа мастера.
     */
    readonly Description: string;
    /**
     * Свойство предоставляет доступ к результату выполнения этапа мастера.
     */
    ExecutionResult: TWizardStepResult;
    /***
     * Свойство возвращает индекс этапа мастера в списке этапов.
     */
    readonly Index: number;
    /**
     * Свойство предоставляет доступ к последнему выполненному действию этапа мастера.
     */
    LastExecutedAction: IWizardAction;
    /**
     * Свойство возвращает имя этапа мастера.
     */
    readonly Name: string;
    /**
     * Свойство возвращает заголовок этапа мастера.
     */
    readonly StepType: TWizardStepType;
    /**
     * Свойство возвращает заголовок этапа мастера.
     */
    readonly Title: string;

    /**
     * Метод выполняет событие «Завершение» этапа мастера.
     * Метод следует использовать для выполнения мастера вне системы DIRECTUM, например, в веб-доступе.
     */
    ExecuteFinish(): void;
    /**
     * Метод выполняет событие «Начало» этапа мастера.
     * Метод следует использовать для выполнения мастера вне системы DIRECTUM, например, в веб-доступе.
     */
    ExecuteStart(): void;
}