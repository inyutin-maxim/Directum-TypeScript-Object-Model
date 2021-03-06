/**
 * Объект IAction предназначен для работы с действиями формы.
 */
export interface IAction {
    /**
     * Свойство возвращает категорию действия.
     */
    readonly Category: string;
    /**
     * Свойство предоставляет доступ к отмеченности элементов управления, связанных с действием.
     */
    Checked: boolean;
    /**
     * Свойство предоставляет доступ к тексту всплывающей подсказки недоступных элементов управления, связанных с действием.
     */
    DisabledHint: string;
    /**
     * Свойство предоставляет доступ к доступности элементов управления, связанных с действием,
     * и собственно доступность действия, включая возможность выполнения действия с помощью горячих клавиш.
     */
    Enabled: boolean;
    /**
     * Свойство предоставляет доступ к тексту всплывающей подсказки элементов управления, связанных с действием.
     */
    Hint: string;
    /**
     * Свойство возвращает имя действия.
     * Имя действия задается на этапе разработки формы и однозначно определяет действие в рамках формы.
     */
    readonly Name: string;
    /**
     * Свойство возвращает заголовок действия.
     */
    readonly Title: string;
    /**
     * Свойство предоставляет доступ к видимости элементов управления, связанных с действием.
     */
    Visible: boolean;
    /**
     * Метод выполняет действие и возвращает признак его выполнения: True, если действие было выполнено, иначе False.
     */
    Execute(): boolean;
}