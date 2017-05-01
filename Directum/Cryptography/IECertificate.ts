import {TCertificateInvalidationReason} from "../Enums/TCertificateInvalidationReason";
/**
 * Объект IECertificate предназначен для работы с электронным сертификатом.
 */
export interface IECertificate {
    /**
     * Свойство предоставляет доступ к указателю на интерфейс библиотеки CAPICOM для работы с сертификатом.
     */
    Certificate: any;
    /**
     * Свойство возвращает идентификатор загруженного сертификата.
     */
    readonly CertificateID: string;
    /**
     * Свойство возвращает имя эмитента сертификата.
     */
    readonly IssuerName: string;
    /**
     * Свойство возвращает имя модуля шифрования сертификата.
     */
    readonly PluginName: string;
    /**
     * Свойство возвращает имя владельца сертификата.
     */
    readonly SubjectName: string;
    /**
     * Свойство возвращает серийный номер сертификата.
     */
    readonly SerialNumber: string;
    /**
     * Свойство возвращает дату начала срока действия сертификата.
     */
    readonly ValidFromDate: Date;
    /**
     * Свойство возвращает дату окончания срока действия сертификата.
     */
    readonly ValidToDate: Date;


    /**
     * Метод экспортирует загруженный сертификат в файл.
     *
     * @param fileName имя файла, в который будет экспортирован сертификат
     * @param password пароль для обращения к сертификату
     * @param saveType тип экспорта сертификата. Возможные значения:
     •    0 – будет произведен экспорт закрытого ключа;
     •    1 – будет произведен экспорт открытого ключа.
     */
    Export(fileName: string, password: string, saveType: number): void;
    /**
     * Метод возвращает детальную информацию о загруженном сертификате.
     *
     * @param typeInfo тип получаемой информации. Возможные значения:
     •    0 – имя владельца сертификата;
     •    1 – имя эмитента сертификата;
     •    2 – электронный адрес владельца сертификата;
     •    3 – электронный адрес эмитента сертификата;
     •    4 – имя участника-пользователя владельца сертификата;
     •    5 – имя участника-пользователя эмитента сертификата;
     •    6 – DNS-имя владельца сертификата;
     •    7 – DNS-имя эмитента сертификата.
     */
    DetailInfo(typeInfo: number): string;
    /**
     * Метод отображает стандартное окно информации о загруженном сертификате.
     */
    Display(): void;
    /**
     * Метод проверяет достоверность загруженного сертификата.
     *
     * @param verificationDate дата, на которую нужно проверить сертификат
     * @param needCheckTimeValidity признак необходимости проверки сертификата на дату, указанную в параметре VerificationDate. Возможные значения:
     * True – выполняется проверка достоверности сертификата на дату, указанную в параметре VerificationDate.
     * False – выполняется проверка сертификата без проверки срока действия.
     */
    IsValid(verificationDate: Date, needCheckTimeValidity: boolean): boolean;
    /**
     * Метод проверяет достоверность сертификата аналогично методу IsValid, дополнительно указывает причину недостоверности сертификата.
     *
     * @param verificationDate дата, на которую нужно проверить сертификат
     * @param needCheckTimeValidity признак необходимости проверки сертификата на дату, указанную в параметре VerificationDate. Возможные значения:
     * True – выполняется проверка достоверности сертификата на дату, указанную в параметре VerificationDate.
     * False – выполняется проверка сертификата без проверки срока действия.
     * @param invalidationReason причина недостоверности сертификата.
     */
    IsValidEx(verificationDate: Date, needCheckTimeValidity: boolean, invalidationReason: TCertificateInvalidationReason): boolean;

    /**
     * Метод загружает сертификат из файла с именем FileName.
     *
     * @param fileName путь к файлу, в который экспортирован сертификат
     * @param password пароль обращения к сертификату
     */
    Load(fileName: string, password: string): void;
    /**
     * Метод загружает сертификат с указанным в параметре CertificateID идентификатором из личного хранилища сертификатов.
     *
     * @param certificateID ИД сертификата
     */
    LoadFromStorage(certificateID: string): void;
}