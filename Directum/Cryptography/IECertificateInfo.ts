import {TCertificateType} from "../Enums/TCertificateType";
import {IECertificate} from "./IECertificate";
/**
 * Объект IECertificateInfo предназначен для получения информации о сертификате.
 */
export interface IECertificateInfo {
    /**
     * Свойство возвращает тип электронного сертификата.
     */
    readonly CertificateType: TCertificateType;
    /**
     * Свойство возвращает объект для работы с электронным сертификатом.
     */
    readonly ECertificate: IECertificate;
    /**
     * Свойство возвращает признак использования данного электронного сертификата в качестве сертификата по умолчанию для текущего пользователя:
     * True, если сертификат используется по умолчанию, иначе False.
     */
    readonly IsDefault: boolean;
    /**
     * Свойство возвращает наименование электронного сертификата.
     */
    readonly Name: string
}