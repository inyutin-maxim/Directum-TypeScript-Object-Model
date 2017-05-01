/**
 * тип ограничения результатов поиска
 */
export enum TMaxRecordCountRestrictionType{
    /**
     * ограничение результатов поиска отключено
     */
    mrcrtNone = 0,
        /**
         * действует ограничение, заданное в установке SearchResultMaxRecordCount
         */
    mrcrtUser = 1,
        /**
         * отображается не более 100000 объектов в результатах поиска
         */
    mrcrtMaximal = 2,
        /**
         * действует огранчиение, заданное программно
         */
    mrcrtCustom = 3,
}