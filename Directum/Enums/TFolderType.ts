/**
 * Тип папки
 */

export enum TFolderType {
        /**
         * Папка «Входящие»
         */
    //noinspection JSUnusedGlobalSymbols
    ftInbox = 0,
        /**
         * Папка «Исходящие»;
         */
    ftOutbox = 1,
        /**
         * Папка «Избранное»;
         */
    ftFavorites = 2,
        /**
         * Папка «Общая папка»;
         */
    ftCommonFolder = 3,
        /**
         * Пользовательская папка;
         */
    ftUserFolder = 4,
        /**
         * Папка «Компоненты»;
         */
    ftComponents = 5,
        /**
         * Папка быстрого запуска;
         */
    ftQuickLaunch = 6,
        /**
         * Папка «Ярлыки»;
         */
    ftShortcuts = 7,
        /**
         * Папка поиска.
         */
    ftSearch = 8
}