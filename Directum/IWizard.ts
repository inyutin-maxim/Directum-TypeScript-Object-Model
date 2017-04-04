import {IList} from "./AuxiliaryObjects/IList";
import {IWizardStep} from "./Wizards/IWizardStep";
import {IObject} from "./BaseObjects/IObject";
/**
 * Объект IWizard предназначен для работы с мастерами действий.
 */
export interface IWizard{
    /**
     * Свойство предоставляет доступ к текущему этапу мастера.
     */
    CurrentStep: IWizardStep;
    /**
     * Свойство возвращает имя мастера действий.
     */
    readonly Name: string;
    /**
     * Свойство предоставляет доступ к следующему этапу мастера. Указав значение свойства, можно выполнить переход на заданный этап.
     */
    NextStep: IWizardStep;
    /**
     * Свойство возвращает список параметров мастера. Элементами списка являются объекты IWizardParam.
     */
    readonly Params: IList;
    /**
     * Свойство возвращает родительский объект, из которого запущен мастер.
     */
    readonly Parent: IObject;
    /**
     * Свойство возвращает предыдущий этап мастера действий.
     */
    readonly PreviousStep: IWizardStep;
    /**
     * Свойство возвращает список этапов мастера. Элементами списка являются объекты IWizardStep.
     */
    readonly Steps: IList;

    /**
     * Метод запускает мастер действий на выполнение и завершается, не дожидаясь окончания работы мастера.
     */
    Execute(): void;
    /**
     * Метод выполняет событие «Завершение» мастера действий.
     */
    ExecuteBeforeSelection(): void;
    /**
     * Метод выполняет событие «Завершение» мастера действий.
     */
    ExecuteFinish(): void;
    /**
     * Метод выполняет событие «Начало» мастера действий.
     */
    ExecuteStart(): void;
    /**
     * Метод сохраняет мастер действий.
     */
    Save(): void;
}