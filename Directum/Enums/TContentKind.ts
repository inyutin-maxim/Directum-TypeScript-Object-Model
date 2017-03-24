/**
 * Тип содержимого
 */
export enum TContentKind {
        /**
         * Папка
         */
    //noinspection JSUnusedGlobalSymbols
    ckFolder = 0,
        /**
         * Документ
         */
    ckEDocument = 1,
        /**
         * Задача
         */
    ckTask = 2,
        /**
         * Задание
         */
    ckJob = 3,
        /**
         * Вариант запуска компоненты
         */
    ckComponentToken = 4,
        /**
         * Произвольный объект
         */
    ckAny = 5,
        /**
         * Справочник
         */
    ckReference = 6,
        /**
         * Сценарий
         */
    ckScript = 7,
        /**
         * Отчет
         */
    ckReport = 8,
        /**
         * Диалог
         */
    ckDialog = 9
}