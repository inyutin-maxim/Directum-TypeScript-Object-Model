/**
 * тип компоненты разработчика, поддерживающей блокировки элементов разработки
 */
export enum TLockableDevelopmentComponentType{
    /**
     * типовой маршрут;
     */
    ldctStandardRoute = 0,
        /**
         * мастер действий;
         */
    ldctWizard = 1,
        /**
         * сценарий;
         */
    ldctScript = 2,
        /**
         * функция;
         */
    ldctFunction = 3,
        /**
         * блок типовых маршрутов;
         */
    ldctRouteBlock = 4,
        /**
         * интегрированный отчет;
         */
    ldctIntegratedReport = 5,
        /**
         * аналитический отчет;
         */
    ldctAnalyticReport = 6,
        /**
         * тип справочника;
         */
    ldctReferenceType = 7,
        /**
         * тип карточки документа;
         */
    ldctEDocumentType = 8,
        /**
         * диалог.
         */
    ldctDialog = 9,
}