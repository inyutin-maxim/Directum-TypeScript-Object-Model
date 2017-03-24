import {IRequisite} from "./Data/IRequisite";
import {IDataSet} from "./Data/IDataSet";
import {IQuery} from "./Data/IQuery";
import {IComponent} from "./References/IComponent";
import {TFieldDataType} from "./Enums/TFieldDataType";
import {TJoinType} from "./Enums/TJoinType";
import {TAddPosition} from "./Enums/TAddPosition";
export interface IObject {
    /**
     *
     */
    AccessInfo: string;
    /**
     *
     */
    Active: string;
    /**
     *
     */
    ActiveForm: string;
    /**
     *
     */
    Application: string;
    /**
     *
     */
    CommandText: string;
    /**
     *
     */
    ComponentID: string;
    /**
     *
     */
    ComponentType: string;
    /**
     *
     */
    Connection: string;
    /**
     *
     */
    Copied: string;
    /**
     *
     */
    Environment: string;
    /**
     *
     */
    Events: string;
    /**
     *
     */
    Factory: string;
    /**
     *
     */
    Form: string;
    /**
     *
     */
    GlobalLock: string;
    /**
     *
     */
    Hyperlink: string;
    /**
     *
     */
    ID: string;
    /**
     *
     */
    Info: string;
    /**
     *
     */
    Inserted: string;
    /**
     *
     */
    Modified: string;
    /**
     *
     */
    Name: string;
    /**
     *
     */
    Params: string;
    /**
     *
     */
    PreviousValuesStored: string;
    /**
     *
     */
    Reports: string;
    /**
     *
     */
    RequisiteCount: string;
    /**
     *
     */
    Requisites: string;
    /**
     *
     */
    RequisiteValues: string;
    /**
     *
     */
    Rules: string;
    /**
     *
     */
    SQLParams: string;
    /**
     *
     */
    SQLTableName: string;
    /**
     *
     */
    State: string;
    /**
     *
     */
    TableName: string;
    /**
     *
     */
    Title: string;
    /**
     *
     */
    View: string;
    /**
     *
     */
    ViewName: string;

    /**
     * Метод добавляет таблицы в раздел from SQL-запроса набора данных.
     *
     * @param tableName – имена таблиц.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_addfrom_iobject_dobavit_tablicu_v_nabor.htm
     */
    AddFrom(tableName: string): number;
    /**
     * Метод добавляет к итоговому запросу соединение.
     *
     * @param tableName – имя таблицы, для которой добавляется соединение
     * @param joinType – тип соединения
     * @param condition – условие соединения
     * @param position – позиция, в которую добавляется соединение
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_addjoin_iobject_dobavlenie_soedinenia_s_tabl.htm
     */
    AddJoin(tableName: string, joinType: TJoinType, condition: string, position: TAddPosition): number;
    /**
     * Можно задавать сортировку по любому полю, указанному в разделе select.
     *
     * @param condition – условие сортировки набора данных в формате
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_addorderby_iobject_dobavit_uslovie_sort.htm
     */
    AddOrderBy(condition: string): number;
    /**
     * Метод добавляет поле в раздел select SQL-запроса набора данных.
     *
     * @param fieldName – имя поля в следующем формате: [<Псевдоним таблицы>].<Имя поля> [as [<Псевдоним поля>]]
     * @param fieldType – тип данных поля
     * @param size – длина строкового поля. Указывается только в том случае, когда параметр FieldType имеет значение fdtString.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_addselect_iobject_dobavit_pole_v_nabor_dannuh.htm
     */
    AddSelect(fieldName: string, fieldType: TFieldDataType, size?: number): number;
    /**
     * Добавить условие ограничения в запрос набора данных
     *
     * @param condition – условие ограничения выборки
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_addwhere_iobject_dobavit_uslovie_ogranichenia_v_zapros_nabora_dannuh.htm
     */
    AddWhere(condition: string): number;
    /**
     * Метод возвращает объект как компоненту.
     */
    AsComponent(): IComponent;
    /**
     * Метод возвращает объект как запрос.
     */
    AsQuery(): IQuery;
    /**
     * Метод копирует в текущий объект данные из указанного объекта.
     *
     * @param SourceObject – объект-источник
     * @param DetailIndexes – номера детальных разделов, которые нужно означить
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_assignobject_oznachit_obekt.htm
     */
    AssignObject(SourceObject: IObject, DetailIndexes: Array<number>);
    /**
     * Метод отменяет изменения набора данных.
     */
    Cancel();
    /**
     * Метод копирует гиперссылки на объект в буфер обмена.
     */
    CopyToClipboard();
    /**
     * Метод удаляет таблицу из раздела from SQL-запроса набора данных.
     *
     * @param id - идентификатор таблицы в запросе, полученный при вызове метода AddFrom.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_delfrom_iobject_udalit_tablicu_iz_nabora.htm
     */
    DelFrom(id: number);
    /**
     * Метод удаляет соединение из запроса.
     *
     * @param id – идентификатор соединения.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_deljoin_iobject_udalenie_soedinenia_s_tabl.htm
     */
    DelJoin(id: number);
    /**
     * Метод удаляет условие из раздела order by SQL-запроса набора данных.
     *
     * @param id – идентификатор поля в запросе, полученный при вызове метода AddOrderBy.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_delorderby_iobject_udalit_uslovie_sortirovki_iz_zaprosa_nabora_dannyh.htm
     */
    DelOrderBy(id: number);
    /**
     * Метод удаляет поле из раздела select SQL-запроса набора данных.
     *
     * @param id – идентификатор поля в запросе, полученный при вызове метода AddSelect.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_delselect_iobject_udalit_pole_iz_nabora.htm
     */
    DelSelect(id: number);
    /**
     * Метод удаляет условие из раздела where SQL-запроса набора данных.
     *
     * @param id – идентификатор условия в запросе, полученный при вызове метода AddWhere.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_delwhere_iobject_udalit_uslovie_ogranichenia_nabora_dannyh.htm
     */
    DelWhere(id: number);
    /**
     * Набор данных, являющийся детальным разделом с указанным индексом.
     *
     * @param index – индекс детального раздела набора данных.
     *
     * @desc
     */
    DetailDataSet(index: number): IDataSet;
    /**
     * Признак существования детального раздела набора данных: True, если детальный раздел набора данных с указанным индексом существует, иначе False.
     *
     * @param index – индекс детального раздела набора данных.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_detailexists_proverit_iobject_suschestv.htm
     */
    DetailExists(index: number): boolean;
    /**
     * Метод отключает обновление содержимого элементов управления.
     */
    DisableControls();
    /**
     * Метод включает обновление содержимого элементов управления.
     */
    EnableControls();
    /**
     * Метод разрывает соединение с SQL-сервером.
     */
    Finalize();
    /**
     * Метод возвращает реквизит по его имени.
     */
    FindRequisite(name: string): IRequisite;
    /**
     * Метод считывает данные из базы данных и обновляет набор данных.
     */
    Refresh();
    /**
     * Метод возвращает реквизит по его индексу.
     *
     * @param index – индекс реквизита.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_requisitebyindex_rekvizit_po_indeksu_iobject.htm
     */
    RequisiteByIndex(index: number): IRequisite;
    /**
     * Метод сохраняет изменения набора данных: записывает все добавления, изменения и удаления записей набора данных в базу данных.
     */
    Save();
}