/**
 * Объект ISystemInfo предназначен для получения информации о системе.
 */
export interface ISystemInfo {
    /**
     * Свойство возвращает версию клиентской части системы.
     * Свойство является системным, использовать его не рекомендуется.
     */
    readonly ClientVersion: string;
    /**
     * Свойство возвращает код системы.
     */
    readonly Code: string;
    /**
     * Свойство возвращает полный путь к папке с файлами версии IS-Builder, завершающийся символом «\».
     */
    readonly CorePath: string;
    /**
     * Свойство возвращает имя базы данных, в которой располагаются данные системы.
     */
    readonly DatabaseName: string;
    /**
     * Свойство возвращает полный путь к папке с файлами справочной системы DIRECTUM, завершающийся символом «\».
     */
    readonly HelpPath: string;
    /**
     * Уникальный идентификатор экземпляра системы, полученный при регистрации системы.
     */
    readonly InstallationID: string;
    /**
     * Свойство возвращает наименование системы. Наименование хранится в установке системы MB_ASystemName.
     */
    readonly Name: string;
    /**
     * Свойство возвращает программный идентификатор COM-объекта приложения.
     */
    readonly ProgID: string;
    /**
     * Свойство возвращает физическое имя SQL-сервера, на котором располагаются данные системы.
     */
    readonly ServerName: string;
    /**
     * Свойство возвращает версию серверной части системы.
     * Свойство является системным, использовать его не рекомендуется.
     */
    readonly ServerVersion: string;
}