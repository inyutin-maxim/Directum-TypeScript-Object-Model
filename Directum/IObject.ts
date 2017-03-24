import {IRequisite} from "./Data/IRequisite";
import {IDataSet} from "./Data/IDataSet";
import {IQuery} from "./Data/IQuery";
import {IComponent} from "./References/IComponent";
import {TFieldDataType} from "./Enums/TFieldDataType";
import {TJoinType} from "./Enums/TJoinType";
import {TAddPosition} from "./Enums/TAddPosition";
import {IView} from "./VisualView/IView";
import {TDataSetState} from "./Enums/TDataSetState";
import {IList} from "./AuxiliaryObjects/IList";
import {IRuleList} from "./References/IRuleList";
import {IObjectInfo} from "./BaseObjects/IObjectInfo";
import {THyperlinkType} from "./Enums/THyperlinkType";
import {ILock} from "./AuxiliaryObjects/ILock";
import {IForm} from "./IForm";
import {IFactory} from "./BaseObjects/IFactory";
import {IEventList} from "./References/IEventList";
import {IConnection} from "./Data/IConnection";
import {TCompType} from "./Enums/TCompType";
import {IArchiveInfo} from "./BaseObjects/IArchiveInfo";
import {IApp} from "./IApp";
import {IDataSetAccessInfo} from "./Data/IDataSetAccessInfo";
export interface IObject {
    /**
     * Свойство возвращает информацию о правах доступа текущего пользователя к набору данных.
     */
    AccessInfo: IDataSetAccessInfo;
    /**
     * Свойство возвращает признак открытости набора данных: True, если набор данных открыт, иначе False.
     */
    Active: boolean;
    /**
     * Свойство возвращает активную форму представления.
     * Активной формой является та, на которой в данный момент находится фокус ввода.
     */
    ActiveForm: IForm;
    /**
     * Свойство возвращает приложение, в контексте которого создан объект.
     */
    Application: IApp;
    /**
     * Свойство возвращает информацию об архивном объекте.
     */
    ArchiveInfo: IArchiveInfo;
    /**
     * Свойство возвращает текст SQL-запроса набора данных.
     */
    CommandText: string;
    /**
     * Свойство возвращает ИД компоненты, к которой относится объект.
     */
    ComponentID: number;
    /**
     * Свойство возвращает тип объекта.
     */
    ComponentType: TCompType;
    /**
     * Свойство возвращает соединение, через которое объект работает с SQL‑сервером.
     */
    Connection: IConnection;
    /**
     * Свойство возвращает признак скопированной записи:
     * True, если текущая запись набора данных является скопированной, иначе False.
     */
    Copied: boolean;
    /**
     * Свойство возвращает список переменных окружения объекта.
     */
    Environment: IList;
    /**
     * Свойство возвращает список событий набора данных.
     */
    Events: IEventList;
    /**
     * Свойство возвращает фабрику объекта.
     */
    Factory: IFactory;
    /**
     * Свойство возвращает форму-карточку текущего представления объекта.
     */
    Form: IForm;
    /**
     * Свойство возвращает объект-блокировку типа ILock.
     */
    GlobalLock: ILock;
    /**
     * Свойство возвращает гиперссылку на объект в формате HyperlinkType.
     *
     * @param hyperlinkType – тип гиперссылки. По умолчанию возвращается гиперссылка в текстовом формате.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_svoistvo_hyperlink_giperssylka_na_obekt.htm
     */
    Hyperlink(hyperlinkType?: THyperlinkType): string;
    /**
     * Свойство возвращает ИД объекта. Свойство не поддерживается для объектов IScript и IReport.
     */
    ID: number;
    /**
     * Свойство возвращает информацию об объекте. Свойство не поддерживается для объектов IScript, IReport.
     */
    Info: IObjectInfo;
    /**
     * Свойство возвращает признак вставленной записи:
     * True, если текущая запись набора данных является вновь вставленной, иначе False.
     */
    Inserted: boolean;
    /**
     * Свойство возвращает признак наличия несохраненных изменений в наборе данных:
     * True, если изменения есть, иначе False.
     * Свойство возвращает True после внесения изменений, до того момента, когда изменения будут сохранены или отменены.
     */
    Modified: boolean;
    /**
     * Свойство возвращает имя объекта.
     */
    Name: string;
    /**
     * Свойство возвращает список параметров объекта, используемых в текстах вычислений.
     */
    Params: IList;
    /**
     * Свойство предоставляет доступ к признаку необходимости сохранения предыдущих значений реквизитов:
     * True, если необходимо сохранять предыдущие значения реквизитов, иначе False.
     * Значение по умолчанию True.
     */
    PreviousValuesStored: boolean;
    /**
     * Свойство возвращает список интегрированных отчетов объекта.
     */
    Reports: IList;
    /**
     * Свойство возвращает количество реквизитов набора данных.
     */
    RequisiteCount: number;
    /**
     * Свойство возвращает реквизит по его имени.
     */
    Requisites(name: string): IRequisite;
    /**
     * Свойство возвращает список значений реквизитов.
     */
    RequisiteValues: IList;
    /**
     * Свойство возвращает список правил объекта. Элементы списка имеют тип IRule.
     */
    Rules: IRuleList;
    /**
     * Свойство возвращает параметры запроса. Параметры можно добавить в текст запроса с помощью метода AddWhere.
     */
    SQLParams: IList;
    /**
     * Свойство возвращает имя таблицы в базе данных, с которой связан набор данных объекта.
     */
    SQLTableName: string;
    /**
     * Свойство возвращает состояние набора данных: редактирование, вставка, просмотр, закрыт.
     */
    State: TDataSetState;
    /**
     * Свойство возвращает алиас, используемый в SQL-запросе, для таблицы, с которой связан набор данных объекта.
     */
    TableName: string;
    /**
     * Свойство возвращает заголовок объекта.
     */
    Title: string;
    /**
     * Свойство возвращает представление компоненты с именем, заданным в свойстве ViewName.
     * Свойство не поддерживается для объектов IScript, IReport.
     */
    View: IView;
    /**
     * Свойство предоставляет доступ к имени текущего представления.
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