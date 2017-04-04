import {IList} from "./IList";
/**
 * Объект ILocalization предназначен для доступа к настройкам локализации.
 */
export interface ILocalization {
    /**
     * Свойство предоставляет доступ к коду текущего языка системы.
     */
    CurrentLanguage: string;
    /**
     * Свойство возвращает признак поддержки системой более одного языка локализации:
     * True, если система поддерживает 2 языка и более, иначе False.
     */
    readonly IsMultiLanguageSystem: boolean;
    /**
     * Позволяет установить GUI-культуру в обход региональных установок пользователя.
     */
    Locale: number;
    /**
     * Свойство возвращает код основного языка системы.
     */
    readonly PrimaryLanguage: string;
    /**
     * Возвращает список кодов языков из компоненты Языки локализации.
     */
    readonly SupportedLanguages: IList;

    /**
     * Метод возвращает значение локализованной строки на текущем языке системы.
     *
     * @param code код локализованной строки
     * @param groupCode код группы локализованной строки
     */
    GetString(code: string, groupCode: string): string;
}