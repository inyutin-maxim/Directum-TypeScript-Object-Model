import {IQuery} from "./IQuery";
import {IDataSetAccessInfo} from "./IDataSetAccessInfo";
import {IComponent} from "../References/IComponent";
import {IEventList} from "../References/IEventList";
import {IRequisiteFactory} from "./IRequisiteFactory";
import {IRequisite} from "./IRequisite";
import {TDataSetState} from "../Enums/TDataSetState";
/**
 * Объект IDataSet предоставляет методы и свойства для работы с набором данных.
 */
export interface IDataSet extends IQuery{
    /**
     * Свойство возвращает информацию о правах доступа текущего пользователя к набору данных.
     */
    readonly AccessInfo: IDataSetAccessInfo;
    /**
     * Свойство возвращает количество записей в наборе данных.
     */
    readonly ActualRecordCount: number;
    /**
     * Свойство возвращает набор данных как запрос.
     */
    readonly AsQuery: IQuery;
    /**
     * Свойство предоставляет доступ к закладке.
     */
    Bookmark: any;
    /**
     * Свойство возвращает компоненту, к которой относится набор данных.
     */
    readonly Component: IComponent;
    /**
     * Возвращает значение True, если текущая запись скопирована и False в противном случае.
     */
    readonly Copied: boolean;
    /**
     * Свойство возвращает список событий набора данных.
     */
    readonly Events: IEventList;
    /**
     * Свойство возвращает признак вставленной записи:
     * True, если текущая запись набора данных является вновь вставленной, иначе False.
     */
    readonly Inserted: boolean;
    /**
     * Свойство возвращает набор данных, содержащий запись, для которой данный набор данных является детальным разделом.
     * Если данный набор данных не является детальным разделом, то свойство возвращает nil.
     */
    readonly MainDataSet: IDataSet;
    /**
     * Свойство возвращает признак наличия несохраненных изменений в наборе данных:
     * True, если изменения есть, иначе False.
     */
    readonly Modified: boolean;
    /**
     * Свойство предоставляет доступ к признаку необходимости сохранения предыдущих значений реквизитов:
     * True, если необходимо сохранять предыдущие значения реквизитов, иначе – False.
     */
    PreviousValuesStored: boolean;
    /**
     * Свойство возвращает признак открытости записи набора данных.
     */
    readonly RecordOpened: boolean;
    /**
     * Свойство возвращает количество реквизитов набора данных.
     */
    readonly RequisiteCount: number;
    /**
     * Свойство возвращает фабрику реквизитов.
     */
    readonly RequisiteFactory: IRequisiteFactory;
    /**
     * Свойство возвращает имя таблицы в базе данных, с которой связан набор данных.
     */
    readonly SQLTableName: string;
    /**
     * Свойство возвращает состояние набора данных: редактирование, вставка, просмотр, закрыт.
     */
    readonly State: TDataSetState;
    /**
     * Свойство возвращает алиас, используемый в SQL-запросе, для таблицы, с которой связан набор данных.
     */
    readonly TableName: string;

    /**
     * Свойство возвращает реквизит по его имени.
     * Если реквизита с данным именем не существует, то будет сгенерировано исключение.
     *
     * @param name имя реквизита.
     */
    Requisites(name: string): IRequisite;
    /**
     * Метод добавляет новую запись в конец набора данных и открывает ее.
     */
    Append(): void;
    /**
     * Метод сохраняет изменения набора данных: записывает все добавления, изменения и удаления записей набора данных в базу данных.
     */
    ApplyUpdates(): void;
    /**
     * Метод выполняет копирование текущей записи набора данных SourceDataSet в текущую запись набора данных, вызвавшего метод.
     *
     * @param sourceDataSet набор данных, который является источником копирования
     * @param detailIndexes массив индексов копируемых детальных разделов
     */
    AssignRecord(sourceDataSet: IDataSet, detailIndexes: Array<number>): void;
    /**
     * Метод отменяет изменения набора данных.
     */
    CancelUpdates(): void;
    /**
     * Метод закрывает запись, открытую вызовом OpenRecord.
     */
    CloseRecord(): void;
    /**
     * Метод удаляет текущую запись набора данных.
     */
    Delete(): void;
    /**
     * Метод возвращает детальный раздел по его индексу.
     *
     * @param index индекс детального раздела набора данных.
     */
    DetailDataSet(index: number): IDataSet;
    /**
     * Признак существования детального раздела набора данных:
     * True, если детальный раздел с указанным индексом существует, False в противном случае.
     *
     * @param index индекс детального раздела набора данных.
     */
    DetailExists(index: number): boolean;
    /**
     * Метод отключает обновление содержимого элементов управления.
     */
    DisableControls(): void;
    /**
     * Метод включает обновление содержимого элементов управления.
     */
    EnableControls(): void;
    /**
     * Метод возвращает реквизит по его имени.
     *
     * @param name имя реквизита.
     */
    FindRequisite(name: string): IRequisite;
    /**
     * Метод вставляет новую запись в текущую позицию набора данных и открывает ее.
     */
    Insert(): void;
    /**
     * Метод открывает запись набора данных.
     */
    OpenRecord(): void;
    /**
     * Метод считывает данные из базы данных и обновляет набор данных.
     */
    Refresh(): void;
    /**
     * Метод возвращает реквизит по его индексу.
     *
     * @param index индекс реквизита.
     */
    RequisiteByIndex(index: number): IRequisite;
}