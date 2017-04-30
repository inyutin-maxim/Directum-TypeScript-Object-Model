import {IScriptFactory} from "./Scripts/IScriptFactory";
import {IWizardFactory} from "./Wizards/IWizardFactory";
import {IReferencesFactory} from "./References/IReferencesFactory";
import {ILicenseInfo} from "./AuxiliaryObjects/ILicenseInfo";
import {IConnection} from "./Data/IConnection";
import {ILocalization} from "./AuxiliaryObjects/ILocalization";
import {IDICSFactory} from "./DICS/IDICSFactory";
import {IDialogsFactory} from "./Dialogs/IDialogsFactory";
import {IComponentTokenFactory} from "./ComponentToken/IComponentTokenFactory";
import {IEDocumentFactory} from "./Documents/IEDocumentFactory";
import {IFolderFactory} from "./Folders/IFolderFactory";
import {IJobFactory} from "./Tasks/IJobFactory";
import {IMessagingFactory} from "./InstantMessaging/IMessagingFactory";
/**
 * Объект IApplication предназначен для доступа к объектам системы DIRECTUM.
 */
export interface IApplication {
    /**
     * Свойство предоставляет доступ к фабрике вариантов запуска компонент.
     */
    readonly ComponentTokenFactory: IComponentTokenFactory;
    /**
     * Свойство возвращает объект-соединение, посредством которого приложение связано с SQL-сервером.
     */
    readonly Connection: IConnection;
    /**
     * Свойство предоставляет доступ к контексту модуля.
     */
    DepartmentContext: string;
    /**
     * Свойство предоставляет доступ к фабрике диалогов.
     */
    readonly DialogsFactory: IDialogsFactory;
    /**
     * Свойство предоставляет доступ к фабрике DICS.
     */
    readonly DICSFactory: IDICSFactory;
    /**
     * Свойство предоставляет доступ к фабрике документов.
     */
    readonly EDocumentFactory: IEDocumentFactory;
    /**
     * Свойство предоставляет доступ к фабрике папок.
     */
    readonly FolderFactory: IFolderFactory;
    /**
     * Свойство предоставляет доступ к фабрике заданий.
     */
    readonly JobFactory: IJobFactory;
    /**
     * Свойство предоставляет интерфейс с информацией о лицензиях.
     */
    readonly LicenseInfo: ILicenseInfo;
    /**
     * Свойство предоставляет доступ к объекту-локализации, который содержит настройки локализации текущего сеанса работы.
     */
    readonly Localization: ILocalization;
    /**
     * Свойство предоставляет доступ к фабрике мгновенных сообщений при наличии лицензии Microsoft Lync Server.
     */
    readonly MessagingFactory: IMessagingFactory;
    /**
     * Свойство устанавливает контекст организации.
     */
    OurFirmContext: string;
    /**
     * Свойство предоставляет доступ к фабрике типов справочников.
     */
    ReferencesFactory: IReferencesFactory;
    ReportFactory
    /**
     * Свойство предоставляет доступ к ИД процесса COM-сервера.
     */
    PID: number;
    /**
     * Свойство предоставляет доступ к фабрике сценариев.
     */
    ScriptFactory: IScriptFactory;
    SearchFactory
    ServiceFactory
    SystemDialogsFactory
    TaskFactory
    /**
     * Свойство предоставляет доступ к фабрике мастеров действий.
     */
    WizardFactory: IWizardFactory;
}
