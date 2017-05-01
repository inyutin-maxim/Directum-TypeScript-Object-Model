import {IApplication} from "../IApplication";
import {IForEach} from "../AuxiliaryObjects/IForEach";
import {IUser} from "../AuxiliaryObjects/IUser";
import {TLockableDevelopmentComponentType} from "../Enums/TLockableDevelopmentComponentType";
import {IDevelopmentComponentLock} from "../AuxiliaryObjects/IDevelopmentComponentLock";
/**
 * Объект IServiceFactory предназначен для работы со служебными объектами.
 */
export interface IServiceFactory {
    /**
     * Свойство возвращает приложение, в контексте которого получена фабрика.
     */
    readonly Application: IApplication;
    /**
     * Свойство возвращает список действующих сертификатов текущего пользователя, зарегистрированных в справочнике Пользователи.
     * Элементами списка являются объекты IECertificateInfo.
     */
    readonly ECertificateList: IForEach;

    /**
     * Метод возвращает пользователя или группу пользователей по ИД пользователя или группы.
     *
     * @param id ИД пользователя или группы пользователей в справочнике Пользователи.
     */
    GetAccountByID(id: number): IUser;
    /**
     * Метод возвращает объект настроек модуля шифрования.
     *
     * @param pluginName имя модуля шифрования
     */
    GetCryptoPluginSettings(pluginName: string): any;
    GetDevelopmentComponentLock(componentType: TLockableDevelopmentComponentType, objectName: string): IDevelopmentComponentLock;
    GetEditorByCode(): void;
    GetEditorByExtension(): void;
    GetEditorByID(): void;
    GetExplorer(): void;
    GetGroupByCode(): void;
    GetGroupByID(): void;
    GetGroupByName(): void;
    GetGroupMembers(): void;
    GetIntegerList(): void;
    GetList(): void;
    GetPrivileges(): void;
    GetReferenceInfo(): void;
    GetRelativeDate(): void;
    GetRoleByCode(): void;
    GetRoleByName(): void;
    GetRoleMembers(): void;
    GetStringList(): void;
    GetUserByCode(): void;
    GetUserByID(): void;
    GetUserByName(): void;
    GetUserECertificateList(): void;
    GetUserList(): void;
    PlayVideo(): void;
    SaveCryptoPluginSettings(): void;
    ScanToFile(): void;
}