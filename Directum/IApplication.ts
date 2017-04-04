import {IScriptFactory} from "./Scripts/IScriptFactory";
import {IWizardFactory} from "./Wizards/IWizardFactory";
import {IReferencesFactory} from "./References/IReferencesFactory";
import {ILicenseInfo} from "./AuxiliaryObjects/ILicenseInfo";
import {IConnection} from "./Data/IConnection";
import {ILocalization} from "./AuxiliaryObjects/ILocalization";
import {IDICSFactory} from "./DICS/IDICSFactory";
/**
 * Объект IApplication предназначен для доступа к объектам системы DIRECTUM.
 */
export interface IApplication {
    ComponentTokenFactory
    /**
     * Свойство возвращает объект-соединение, посредством которого приложение связано с SQL-сервером.
     */
    Connection: IConnection;
    /**
     * Свойство предоставляет доступ к контексту модуля.
     */
    DepartmentContext: string;
    DialogsFactory
    /**
     * Свойство предоставляет доступ к фабрике DICS.
     */
    DICSFactory: IDICSFactory;
    EDocumentFactory
    FolderFactory
    JobFactory
    /**
     * Свойство предоставляет интерфейс с информацией о лицензиях.
     */
    LicenseInfo: ILicenseInfo;
    Localization: ILocalization;
    MessagingFactory
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
