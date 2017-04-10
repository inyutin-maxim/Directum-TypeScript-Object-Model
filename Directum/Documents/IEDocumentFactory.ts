import {IFactory} from "../BaseObjects/IFactory";
import {IEdmsObjectFactory} from "../BaseObjects/IEdmsObjectFactory";
import {IEDocument} from "./IEDocument";
import {IObjectInfo} from "../BaseObjects/IObjectInfo";
import {IContents} from "../AuxiliaryObjects/IContents";
import {IEDocumentInfo} from "./IEDocumentInfo";
import {TAreaShowMode} from "../Enums/TAreaShowMode";
import {IEDocumentStorage} from "./IEDocumentStorage";
import {IEDocumentVersion} from "./IEDocumentVersion";
/**
 * Объект IEDocumentFactory предназначен для работы с документами.
 */
export interface IEDocumentFactory extends IFactory, IEdmsObjectFactory {
    /**
     * Свойство возвращает путь к папке, в которую сохраняются документы при открытии.
     * После окончания работы с документом, он удаляется из папки.
     */
    readonly StoredEDocumentPath: string;
    /**
     * Свойство возвращает первый шаблон документа из справочника Шаблоны документов.
     */
    readonly Templates: IEDocument;
    /**
     * Метод связывает документы-приемники, информация о которых передана в параметре Dest,
     * с объектом-источником, информация о котором передана в параметре Source.
     *
     * @param source информация об объекте-источнике, с которым производится связывание.
     * Связывание можно производить с объектами типа документ и запись справочника;
     * @param destination информация о документах-приемниках, связываемых с объектом-источником.
     * В качестве значения параметра следует передавать список IContents, содержащий информацию о документах.
     */
    BindTo(source: IObjectInfo, destination: IContents): void;
    /**
     * Метод связывает документ и объект, гиперссылка на который находится в буфере обмена.
     *
     * @param source информация о документе
     */
    BindToClipboard(source: IObjectInfo): void;
    /**
     * Метод разрывает связь документов-приемников, информация о которых передана в параметре Dest,
     * с объектом-источником, информация о которой передана в параметре Source.
     *
     * @param source информация об объекте-источнике, с которым производится разрыв связи.
     * В качестве значения параметра можно передавать информацию о документе или о записи справочника;
     * @param destination информация о документах-приемниках, с которыми нужно разорвать связь.
     * В качестве значения параметра следует передавать список IContents, содержащий информацию о документах.
     */
    Branch(source: IObjectInfo, destination: IContents): void;
    /**
     * Метод отображает форму «Действия над документом».
     *
     * @param eDocumentInfo информация о документе, который будет открыт в просмотрщике
     * @param signaturesShowMode режим показа области подписей версии документа
     * @param jobsShowMode режим показа области входящих незавершенных заданий, в которые вложен документ
     */
    Browse(eDocumentInfo: IEDocumentInfo, signaturesShowMode: TAreaShowMode, jobsShowMode: TAreaShowMode): void;
    /**
     * Метод изменяет тип карточки и вид документа.
     *
     * @param eDocumentID ИД документа
     * @param eDocumentNewTypeCode имя нового типа карточки документа.
     * В качестве значения параметра следует передавать имя записи из справочника Типы карточек документов
     * @param eDocumentNewKindCode код нового вида документа.
     * В качестве значения параметра следует передавать код записи из справочника Виды документов
     * @param needMoveToDefaultStorage признак переноса документа в хранилище по умолчанию для вида EDocumentNewKindCode:
     * True, документ переносится в хранилище по умолчанию для вида EDocumentNewKindCode,
     * False, документ остается в прежнем хранилище
     * @param lifeCycleStageCode имя новой стадии жизненного цикла документа.
     * В качестве значения параметра следует передавать имя одной из стадий жизненного цикла,
     * используемого для вида документов с кодом EDocumentNewKindCode
     */
    ChangeTypeAndKind(eDocumentID: number, eDocumentNewTypeCode: string, eDocumentNewKindCode: string, needMoveToDefaultStorage: boolean, lifeCycleStageCode: string): IEDocument;
    /**
     * Метод проверяет целостность хранилища документов.
     *
     * @param storage проверяемое хранилище
     * @param reportFileName полное имя файла для отчета о результатах проверки.
     */
    CheckStorageIntegrity(storage: IEDocumentStorage, reportFileName: string): void;
    /**
     * Метод копирует версию, переданную в параметре AEDocumentVersion, в новый документ.
     *
     * @param aEDocumentVersion копируемая версия документа
     * @param eDocumentTypeCode имя типа карточки документа.
     * В качестве значения параметра следует передавать имя записи из справочника Типы карточек документов.
     * По умолчанию используется тип карточки копируемого документа
     * @param eDocumentKindCode код вида документа.
     * В качестве значения параметра следует передавать код записи из справочника Виды документов.
     * По умолчанию используется вид копируемого документа
     */
    Copy(aEDocumentVersion: IEDocumentVersion, eDocumentTypeCode?: string, eDocumentKindCode?: string): IEDocument;
    CreateNewFromFile(): void;
    CreateNewFromScannedFile(): void;
    CreateNewFromTemplate(): void;
    CreateNewFromTemplateComponent(): void;
    ExistsDocumentInStorage(): void;
    OpenByID(): void;
    GetStorageByID(): void;
    GetStorageByName(): void;
}