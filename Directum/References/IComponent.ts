import {IForm} from "../VisualView/IForm";
/**
 * Компонента наследуется от IObject.
 *
 * todo Описать интерфейс
 */
export interface IComponent {
    /**
     * Свойство возвращает количество записей в наборе данных.
     */
    readonly ActualRecordCount: number;
    /**
     * Свойство возвращает признак начала данных.
     */
    readonly BOF: boolean;
    /**
     * Свойство предоставляет доступ к закладке.
     */
    Bookmark: any;
    /**
     * Свойство возвращает форму-список текущего представления.
     */
    readonly ComponentForm: IForm;
    /**
     * Свойство возвращает признак конца данных.
     */
    readonly EOF: boolean;
    /**
     * Локальный фильтр позволяет упростить поиск и выборку записей.
     */
    Filter: string;
    /**
     * Условия фильтрации задаются в свойстве Filter.
     * Чтобы применить фильтр к записям, установите свойство Filtered в True.
     */
    Filtered: boolean;
    /**
     * Свойство предоставляет доступ к порядку сортировки реквизитов.
     */
    Index: any;
    /**
     * Свойство задает активность индекса сортировки.
     */
    Indexed: boolean;
    /**
     * Свойство возвращает количество записей в наборе данных.
     */
    readonly RecordCount: number;
    /**
     * Свойство возвращает признак открытости записи набора данных.
     */
    readonly RecordOpened: boolean;
    /**
     * Метод добавляет новую запись в конец набора данных компоненты и открывает ее.
     */
    Append(): void;
    /**
     * Метод закрывает набор данных и устанавливает значение свойства Active в False.
     */
    Close(): void;
    /**
     * Метод закрывает запись, открытую вызовом OpenRecord.
     */
    CloseRecord(): void;
    /**
     * Метод удаляет текущую запись набора данных.
     */
    Delete(): void;
    /**
     * Метод делает текущей первую запись набора данных.
     */
    First(): void;
    /**
     * Метод вставляет новую запись в текущую позицию набора данных компоненты и открывает ее.
     */
    Insert(): void;
    /**
     * Метод делает текущей последнюю запись набора данных.
     */
    Last(): void;
    /**
     * Метод ищет запись в наборе данных.
     *
     * @param KeyNames массив имен реквизитов или имя одного реквизита
     * @param KeyValues массив значений реквизитов или значение одного реквизита, имена которых указаны в параметре KeyNames
     */
    Locate(KeyNames: any, KeyValues: any): boolean;
    /**
     * Метод делает текущей следующую запись набора данных.
     */
    Next(): void;
    /**
     * Метод открывает набор данных компоненты и устанавливает значение свойства Active в True.
     */
    Open(): void;
    /**
     * Метод открывает запись набора данных.
     */
    OpenRecord(): void;
    /**
     * Метод делает текущей предыдущую запись набора данных.
     */
    Prior(): void;
}