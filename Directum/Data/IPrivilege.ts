/**
 * Объект IPrivilege предназначен для получения информации о привилегии пользователя или группы пользователей.
 */
export interface IPrivilege {
    /**
     * Свойство возвращает имя привилегии.
     */
    readonly Name: string;
    /**
     * Свойство возвращает полное имя привилегии.
     */
    readonly FullName: string;
    /**
     * Свойство устанавливает и возвращает признак доступности привилегии:
     * True – привилегия доступна пользователю или группе, False - привилегия недоступна.
     */
    readonly Enabled: boolean;
    /**
     * Метод проверяет доступность привилегии пользователю или группе.
     * Если пользователь или группа не обладает привилегией, то будет сгенерировано исключение.
     */
    Check(): void;
}