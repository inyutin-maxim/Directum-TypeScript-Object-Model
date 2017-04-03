import {IQuery} from "./IQuery";
/**
 * Объект IDataSet предоставляет методы и свойства для работы с набором данных.
 *
 * todo Описать интерфейс
 */
export interface IDataSet extends IQuery{
    readonly AccessInfo: string;
    readonly ActualRecordCount: string;
    readonly AsQuery: string;
    readonly Bookmark: string;
    readonly Component: string;
    readonly Copied: string;
    readonly Events: string;
    readonly Inserted: string;
    readonly MainDataSet: string;
    readonly Modified: string;
    readonly PreviousValuesStored: string;
    readonly RecordOpened: string;
    readonly RequisiteCount: string;
    readonly RequisiteFactory: string;
    readonly Requisites: string;
    readonly SQLTableName: string;
    readonly State: string;
    readonly TableName: string;

    Append(): void;
    ApplyUpdates(): void;
    AssignRecord(): void;
    CancelUpdates(): void;
    CloseRecord(): void;
    Delete(): void;
    DetailDataSet(): void;
    DetailExists(): void;
    DisableControls(): void;
    EnableControls(): void;
    FindRequisite(): void;
    Insert(): void;
    OpenRecord(): void;
    Refresh(): void;
    RequisiteByIndex(): void;
}