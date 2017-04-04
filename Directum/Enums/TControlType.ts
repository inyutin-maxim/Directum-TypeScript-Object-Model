/**
 * тип элемента управления
 */
export enum TControlType {
    /**
     * редактор ISBL-текстов;
     */
    ctISBLEditor = 0,
        /**
         * разделительная полоса;
         */
    ctBevel,
        /**
         * кнопка;
         */
    ctButton,
        /**
         * список с возможностью отметки элементов;
         */
    ctCheckListBox,
        /**
         * выпадающий список;
         */
    ctComboBox,
        /**
         * предок элемента управления с кнопками;
         */
    ctComboEdit,
        /**
         * таблица;
         */
    ctGrid,
        /**
         * флажок, связанный с реквизитом;
         */
    ctDBCheckBox,
        /**
         * выпадающий список, связанный с реквизитом;
         */
    ctDBComboBox,
        /**
         * поле ввода, связанное с реквизитом;
         */
    ctDBEdit,
        /**
         * поле с кнопкой, связанное с реквизитом;
         */
    ctDBEllipsis,
        /**
         * многострочное поле ввода, связанное с реквизитом;
         */
    ctDBMemo,
        /**
         * навигатор для перемещения между записями, связанный с набором данных;
         */
    ctDBNavigator,
        /**
         * переключатель, связанный с реквизитом;
         */
    ctDBRadioGroup,
        /**
         * строка состояния, связанная с набором данных;
         */
    ctDBStatusLabel,
        /**
         * поле ввода;
         */
    ctEdit,
        /**
         * группа;
         */
    ctGroupBox,
        /**
         * встроенная подсказка;
         */
    ctInplaceHint,
        /**
         * многострочное поле ввода;
         */
    ctMemo,
        /**
         * панель;
         */
    ctPanel,
        /**
         * предок списка с возможностью отметки элементов;
         */
    ctListBox,
        /**
         * переключатель;
         */
    ctRadioButton,
        /**
         * текстовый редактор;
         */
    ctRichEdit,
        /**
         * закладка;
         */
    ctTabSheet,
        /**
         * web-браузер;
         */
    ctWebBrowser,
        /**
         * изображение;
         */
    ctImage,
        /**
         * гиперссылка;
         */
    ctHyperLink,
        /**
         * метка;
         */
    ctLabel,
        /**
         * поле выбора записей справочников;
         */
    ctDBMultiEllipsis,
        /**
         * лента;
         */
    ctRibbon,
        /**
         * многострочный текст с поддержкой гиперссылок;
         */
    ctRichView,
        /**
         * внутренняя панель группы панелей;
         */
    ctInnerPanel,
        /**
         * группа панелей
         */
    ctPanelGroup
}