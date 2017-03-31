import {TLicensingType} from "../Enums/TLicensingType";
/**
 * Объект ILicenseInfo предназначен для получения информации о лицензиях.
 */
export interface ILicenseInfo {
    /**
     * Свойство предоставляет информацию о количестве подключенных системных пользователей.
     */
    readonly ConnectedSystemUsersCount: number;
    /**
     * Свойство предоставляет информацию о количестве подключенных пользователей.
     */
    readonly ConnectedUsersCount: number;
    /**
     * Свойство предоставляет информацию о доступном количестве лицензий с учетом подключившихся пользователей.
     */
    readonly LicensesAvailable: number;
    /**
     * Свойство предоставляет информацию о максимально доступном количестве лицензий.
     */
    readonly LicensesTotal: number;
    /**
     * Свойство предоставляет информацию о типе учета лицензий.
     */
    readonly LicensingType: TLicensingType;
    /**
     * Свойство предоставляет информацию о количестве резервированных лицензий.
     */
    readonly ReservedLicensesCount: number;
    /**
     * Свойство предоставляет информацию о количестве пользователей, использующих резервированные лицензии.
     */
    readonly ReservedLicensesInUseCount: number;
}