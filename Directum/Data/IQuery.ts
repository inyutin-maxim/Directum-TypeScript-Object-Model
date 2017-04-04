import {IField} from "./IField";
import {TFieldDataType} from "../Enums/TFieldDataType";
import {TAddPosition} from "../Enums/TAddPosition";
import {TJoinType} from "../Enums/TJoinType";
import {IList} from "../AuxiliaryObjects/IList";
/**
 * Объект IQuery содержит методы и свойства для работы с SQL-запросами.
 */
export interface IQuery{
    /**
     * Свойство возвращает признак открытости запроса:
     * True, если запрос открыт, False, если запрос закрыт.
     */
    readonly Active: boolean;
    /**
     * Свойство возвращает признак начала данных.
     */
    readonly BOF: boolean;
    /**
     * Свойство предоставляет доступ к тексту SQL-запроса.
     */
    CommandText: string;
    /**
     * Свойство возвращает признак конца данных.
     */
    readonly EOF: boolean;
    /**
     * Свойство возвращает количество полей в наборе данных запроса.
     */
    readonly FieldCount: number;
    /**
     * Свойство возвращает поле по его наименованию.
     *
     * @param name имя поля
     */
    Fields(name: string): IField;
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
     * Свойство возвращает параметры запроса. Параметры можно добавить в текст запроса с помощью метода AddWhere.
     */
    readonly SQLParams: IList;

    /**
     * Метод добавляет таблицы в раздел from SQL-запроса набора данных.
     *
     * @param tableName имена таблиц
     * @constructor
     */
    AddFrom(tableName: string): number;
    /**
     * Метод добавляет к итоговому запросу соединение.
     *
     * @param tableName имя таблицы, для которой добавляется соединение
     * @param joinType тип соединения
     * @param condition условие соединения
     * @param position позиция, в которую добавляется соединение
     */
    AddJoin(tableName: string, joinType: TJoinType, condition: string, position: TAddPosition): number;
    /**
     * Метод добавляет условие в раздел order by SQL-запроса.
     *
     * @param condition условие сортировки набора данных в формате {[<Псевдоним таблицы>.]<Имя поля>[ desc]}[,...n]
     */
    AddOrderBy(condition: string): void;
    /**
     * Метод добавляет поле в раздел select SQL-запроса.
     *
     * @param field имя поля
     * @param fieldType тип данных поля
     * @param size длина строкового поля (указывается только в том случае, когда FieldType равно fdtString).
     */
    AddSelect(field: string, fieldType: TFieldDataType, size: number): number;
    /**
     * Метод добавляет условие в раздел where SQL-запроса.
     *
     * @param condition условие ограничения выборки. Условие следует задавать в формате where-условия SQL-запроса
     */
    AddWhere(condition: string): number;
    /**
     * Метод закрывает набор данных и устанавливает значение свойства Active в False.
     */
    Close(): void;
    /**
     * Метод удаляет таблицу из раздела from SQL-запроса.
     *
     * @param addID идентификатор таблицы в запросе, полученный при вызове метода AddFrom.
     */
    DelFrom(addID: number): void;
    /**
     * Метод удаляет соединение из запроса.
     *
     * @param id идентификатор соединения.
     */
    DelJoin(id: number): void;
    /**
     * Метод удаляет условие из раздела order by SQL-запроса.
     *
     * @param addID идентификатор условия сортировки в запросе, полученный при вызове метода AddOrderBy.
     */
    DelOrderBy(addID: number): void;
    /**
     * Метод удаляет поле из раздела select SQL-запроса.
     *
     * @param addID идентификатор поля в запросе, полученный при вызове метода AddSelect.
     */
    DelSelect(addID: number): void;
    /**
     * Метод удаляет условие из раздела where SQL-запроса.
     *
     * @param addID идентификатор условия в запросе, полученный при вызове метода AddWhere.
     */
    DelWhere(addID: number): void;
    /**
     * Метод выполняет запрос.
     */
    Execute(): void;
    /**
     * Метод возвращает поле по его индексу.
     *
     * @param index индекс поля в списке полей набора данных
     */
    FieldByIndex(index: number): IField;
    /**
     * Метод делает текущей первую запись набора данных.
     */
    First(): void;
    /**
     * Метод делает текущей последнюю запись набора данных.
     */
    Last(): void;
    /**
     * Результат поиска: True, если запись была найдена, иначе False.
     *
     * @param KeyNames массив имен реквизитов или имя одного реквизита
     * @param KeyValues массив значений реквизитов или значение одного реквизита, имена которых указаны в параметре KeyNames
     */
    Locate(KeyNames: any, KeyValues: any): boolean;
    /**
     * Результат поиска: True, если запись была найдена, иначе False.
     *
     * @param KeyNames имя одного реквизита
     * @param KeyValues массив значений реквизитов или значение одного реквизита, имена которых указаны в параметре KeyNames
     */
    Locate(KeyNames: string, KeyValues: any): boolean;
    /**
     * Метод делает текущей следующую запись набора данных.
     */
    Next(): void;
    /**
     * Метод открывает набор данных запроса и устанавливает значение свойства Active в True.
     */
    Open(): void;
    /**
     * Метод делает текущей предыдущую запись набора данных.
     */
    Prior(): void;
}