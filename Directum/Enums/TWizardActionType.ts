/**
 * тип действия мастера
 */
export enum TWizardActionType {
    /**
     * переход на предыдущий этап;
     */
    wfatPrevious = 0,
        /**
         * переход на следующий этап;
         */
    wfatNext = 1,
        /**
         * отмена выполнения;
         */
    wfatCancel = 2,
        /**
         * переход на завершающий этап.
         */
    wfatFinish = 3
}