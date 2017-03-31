import {TUserType} from "../Enums/TUserType";
import {TAccountType} from "../Enums/TAccountType";
/**
 * Объект IUser предназначен для получения полной информации о пользователе, группе пользователей или роли.
 */
export interface IUser {
    /**
     * Свойство возвращает тип учетной записи: пользователь, группа или роль.
     */
    readonly AccountType: TAccountType;
    /**
     * Свойство возвращает код записи из справочника Пользователи, Группы пользователей, Роли.
     */
    readonly Code: string;
    /**
     * Свойство возвращает полное имя пользователя или группы.
     */
    readonly FullName: string;
    /**
     * Свойство возвращает ИД пользователя или группы.
     */
    readonly ID: number;
    /**
     * Свойство возвращает признак того, что пользователь является пользователем удаленной системы.
     */
    readonly IsRemote: boolean;
    /**
     * Свойство возвращает имя пользователя или группы.
     */
    readonly Name: string;
    /**
     * Свойство возвращает статус пользователя.
     */
    readonly UserType: TUserType;
}