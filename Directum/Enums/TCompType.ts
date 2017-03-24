/**
 * Тип компоненты
 */
export enum TCompType{
        /**
         * Справочник
         */
    //noinspection JSUnusedGlobalSymbols
    ctReference = 1,
        /**
         * сценарий
         */
    ctScript = 2,
        /**
         * Неизвестный тип компоненты
         */
    ctUnknown = 3,
        /**
         * Отчет
         */
    ctReport = 4,
        /**
         * Диалог
         */
    ctDialog = 5,
        /**
         * Функция
         */
    ctFunction = 6,
        /**
         * Папка
         */
    ctFolder = 7,
        /**
         * Документ
         */
    ctEDocument = 8,
        /**
         * Задача
         */
    ctTask = 9,
        /**
         * Задание
         */
    ctJob = 10,
        /**
         * Уведомление;
         */
    ctNotice = 11,
        /**
         * Задание-контроль.
         */
    ctControlJob = 12
}