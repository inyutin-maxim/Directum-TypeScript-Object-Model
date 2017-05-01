/**
 * Тип значений критерия поиска
 */
export enum TCriterionContentType{
    /**
     * значения типа «Дата»
     */
    cctDate = 0,
        /**
         * значения типа «Целое число»
         */
    cctInteger = 1,
        /**
         * значения типа «Дробное число»
         */
    cctNumeric = 2,
        /**
         * значения типа «Признак»
         */
    cctPick = 3,
        /**
         * значения типа «Справочник»
         */
    cctReference = 4,
        /**
         * значения типа «Строка»
         */
    cctString = 5,
        /**
         * значения типа «Текст»
         */
    cctText = 6
}