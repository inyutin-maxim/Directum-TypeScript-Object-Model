import {TUserType} from "../Enums/TUserType";
export interface IUser{
    /**
     *
     */
    AccountType
    /**
     * Свойство возвращает код записи из справочника Пользователи, Группы пользователей, Роли.
     */
    Code: string;
    /**
     * Свойство возвращает полное имя пользователя или группы.
     */
    FullName: string;
    /**
     * Свойство возвращает ИД пользователя или группы.
     */
    ID: number;
    /**
     * Свойство возвращает признак того, что пользователь является пользователем удаленной системы.
     */
    IsRemote: boolean;
    /**
     *
     */
    Name: string;
    /**
     * Свойство возвращает статус пользователя.
     */
    UserType:TUserType;
}