/**
 * тип этапа мастера
 */
export enum TWizardStepType {
    /**
     * этап формы;
     */
    wstForm = 0,
        /**
         * этап документа;
         */
    wstEDocument = 1,
        /**
         * этап задачи;
         */
    wstTaskCard = 2,
        /**
         * этап карточки записи справочника;
         */
    wstReferenceRecordCard = 3,
        /**
         * заключительный этап мастера
         */
    wstFinal = 4
}