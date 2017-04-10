import {IActionList} from "../VisualView/IActionList";
import {IList} from "../AuxiliaryObjects/IList";
import {ILifeCycleStage} from "./ILifeCycleStage";
import {IEdmsObject} from "../BaseObjects/IEdmsObject";
import {IObject} from "../BaseObjects/IObject";
import {TExportedSignaturesType} from "../Enums/TExportedSignaturesType";
import {IEDocumentStorage} from "./IEDocumentStorage";
import {TImageType} from "../Enums/TImageType";
/**
 * Объект IEDocument предназначен для работы с документом.
 */
export interface IEDocument extends IEdmsObject, IObject {
    /**
     * Свойство возвращает список действий документа.
     */
    readonly Actions: IActionList;
    /**
     * Свойство возвращает стадию жизненного цикла документа.
     */
    readonly LifeCycleStage: ILifeCycleStage;
    /**
     * Свойство возвращает код сервера, для которого закреплен документ.
     */
    readonly LockedForServer: string;
    /**
     * Свойство возвращает список версий документа. Каждый элемент списка является объектом IEDocumentVersion.
     */
    readonly Versions: IList;

    /**
     * Метод удаляет все теневые копии версии документа с номером VersionNumber.
     *
     * @param versionNumber номер версии документа. Нумерация версий начинается с 1
     */
    DeleteShadowCopies(versionNumber: number): void;
    /**
     * Метод экспортирует версию документа с номером VersionNumber в файл с именем FileName и блокирует документ
     * от изменений другими пользователями в зависимости от значения параметра NeedLock.
     *
     * @param versionNumber номер версии документа. Нумерация версий начинается с 1
     * @param fileName имя файла, в который будет экспортирован документ
     * @param needLock признак экспорта с блокировкой: True, если нужно экспортировать с блокировкой, иначе False
     * @param needCompress признак сжатия документа при экспорте:
     * True, если нужно сжимать документ, иначе False. По умолчанию параметр принимает значение False
     * @param inExtendedFormat признак экспорта в структурированный документ:
     * True, если нужно экспортировать в структурированный документ, иначе False.
     * По умолчанию параметр принимает значение False
     * @param signaturesType тип экспортируемых подписей. По умолчанию параметр принимает значение estAll
     */
    Export(versionNumber: number, fileName: string, needLock?: boolean, needCompress?: boolean, inExtendedFormat?: boolean, signaturesType?: TExportedSignaturesType): void;
    /**
     * Метод экспортирует документ из хранилища указанного сервера.
     *
     * @param versionNumber номер версии документа. Нумерация версий начинается с 1
     * @param fileName имя файла, в который экспортируется документ
     * @param serverCode код сервера, с которого экспортируется версия
     * @param needCompress признак сжатия документа при экспорте: True, если нужно сжимать документ, иначе False. По умолчанию параметр принимает значение False
     * @param inExtendedFormat признак экспорта в структурированный документ:
     * True, если нужно экспортировать в структурированный документ, иначе False.
     * По умолчанию параметр принимает значение False
     * @param signaturesType тип экспортируемых подписей. По умолчанию параметр принимает значение estAll
     */
    ExportFromAnotherServer(versionNumber: number, fileName: string, serverCode: string, needCompress?: boolean, inExtendedFormat?: boolean, signaturesType?: TExportedSignaturesType): void;
    /**
     * Метод возвращает список допустимых стадий жизненного цикла.
     */
    GetAccessibleLifeCycleStages(): IList;
    /**
     * Метод импортирует текст версии из документа SourceEDocument в текст версии документа с номером VersionNumber.
     *
     * @param versionNumber номер версии документа, в которую будет производиться импорт. Нумерация версий начинается с 1
     * @param versionNote примечание к версии
     * @param sourceEDocument документ системы DIRECTUM, из которого будет импортироваться текст версии
     * @param sourceEDocumentVersionNumber номер версии документа, из которого осуществляется импорт
     * @param needLock признак разблокирования документа после импорта: True, если нужно разблокировать, иначе False
     */
    ImportFromEDocument(versionNumber: number, versionNote: string, sourceEDocument: any, sourceEDocumentVersionNumber: number, needLock?: boolean): void;
    /**
     * Метод импортирует файл с именем FileName в версию документа с номером VersionNumber.
     *
     * @param versionNumber номер версии документа, в которую будет производиться импорт. Нумерация версий начинается с 1
     * @param versionNote примечание к версии
     * @param fileName имя файла для импорта документа
     * @param needLock признак разблокирования документа после импорта: True, если нужно разблокировать, иначе False
     * @param editorCode код приложения-редактора.
     * В качестве значения параметра следует передавать код приложения-редактора из справочника Приложения-редакторы
     * @param inExtendedFormat признак импорта из структурированного документа:
     * True, если нужно импортировать из структурированного документа, иначе False.
     * По умолчанию параметр принимает значение False.
     */
    ImportFromFile(versionNumber: number, versionNote: string, fileName: string, needLock?: boolean, editorCode?: string, inExtendedFormat?: boolean): void;
    /**
     * Метод импортирует документ из указанного файла FileName, созданного путем сканирования, в версию документа с номером VersionNumber.
     *
     * @param versionNumber номер версии документа, в которую будет производиться импорт. Нумерация версий начинается с 1
     * @param versionNote примечание к версии
     * @param fileName имя файла для импорта документа
     * @param needLock признак разблокирования документа после импорта: True, если нужно разблокировать, иначе False
     * @param editorCode код приложения-редактора.
     * В качестве значения параметра следует передавать код приложения-редактора из справочника Приложения-редакторы
     */
    ImportFromScannedFile(versionNumber: number, versionNote: string, fileName: string, needLock?: boolean, editorCode?: string): void;
    /**
     * Метод импортирует документ из указанного шаблона в версию документа с номером VersionNumber.
     *
     * @param versionNumber номер версии документа, в которую будет производиться импорт. Нумерация версий начинается с 1
     * @param versionNote примечание к версии
     * @param eDocumentTemplateCode код шаблона документа. В качестве значения параметра следует передавать код записи справочника Шаблоны документов
     * @param needLock признак разблокирования документа после импорта: True, если нужно разблокировать, иначе False
     */
    ImportFromTemplate(versionNumber: number, versionNote: string, eDocumentTemplateCode: string, needLock?: boolean): void;
    /**
     * Метод импортирует подписи из указанного ESD-файла для версии документа VersionNumber.
     *
     * @param versionNumber номер версии документа, для которой импортируются подписи
     * @param fileName путь к ESD-файлу
     * @param checkSigns необходимость проверки достоверности подписей при импорте
     */
    ImportSignsFromExtendedFormat(versionNumber: number, fileName: string, checkSigns: boolean): boolean;
    /**
     * Метод блокирует документ от изменений.
     */
    Lock(): void;
    /**
     * Метод закрепляет документ для сервера с кодом ServerCode.
     */
    LockForServer(): void;
    /**
     * Метод перемещает документ в хранилище, переданное в параметре Storage.
     *
     * @param storage хранилище документов
     */
    MoveToStorage(storage: IEDocumentStorage): void;
    /**
     * Метод открывает версию документа с номером VersionNumber.
     *
     * @param openForWrite признак открытия для редактирования
     * @param versionNumber номер версии
     */
    Open(openForWrite: boolean, versionNumber: number): void;
    /**
     * Метод сохраняет изображение типа ImageType схемы жизненного цикла документа в файл с именем FileName.
     *
     * @param fileName полное имя файла
     * @param imageType тип изображения
     */
    SaveLifeCycleAsImage(fileName: string, imageType: TImageType): void;
    /**
     * Метод сохраняет теневую копию из записи истории с ИД, переданным в параметре HistoryRecordID, в файл FileName.
     *
     * @param historyRecordID ИД записи компоненты История
     * @param fileName полное имя файла
     */
    SaveShadowCopyToFile(historyRecordID: number, fileName: string): void;
    /**
     * Метод устанавливает стадию жизненного цикла документа.
     *
     * @param value имя стадии жизненного цикла документа.
     * В качестве значения параметра следует передавать имя стадии жизненного цикла документа из справочника
     * Виды жизненных циклов
     * @param needLock признак блокировки документа перед изменением его стадии жизненного цикла. Значение по умолчанию True
     */
    SetLifeCycleStageByName(value: string, needLock?: boolean): void;
    /**
     * Метод разблокирует документ.
     */
    UnLock(): void;
    /**
     * Метод снимает закрепление документа для сервера.
     */
    UnlockFromServer(): void;
}