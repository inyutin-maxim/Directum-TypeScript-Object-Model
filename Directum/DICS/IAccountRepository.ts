import {IList} from "../AuxiliaryObjects/IList";
/**
 * Объект IAccountRepository предназначен для импорта структурированных объектов в систему DIRECTUM.
 */
export interface IAccountRepository {
    /**
     * Метод добавляет адресную информацию в справочник Пользователи удаленных систем.
     *
     * @param system имя системы в формате DICS, которой принадлежит адресная информация
     * @param accounts список адресной информации.
     */
    Add(system: string, accounts: IList): void;
    /**
     * Метод добавляет информацию о пользователе удаленной системы в хранилище адресной информации.
     *
     * @param system имя удаленной системы, заданное в настройках агента удаленной системы
     * @param name имя пользователя, группы пользователей или роли в удаленной системе.
     * @param fullName полное имя пользователя, группы пользователей или роли в удаленной системе.
     * @param additionalInformation дополнительные сведения о пользователе, роли или группе пользователей в удаленной системе.
     */
    AddAccount(system: string, name: string, fullName: string, additionalInformation: string): void;
    /**
     * Метод удаляет адресную информацию из справочника Пользователи удаленных систем.
     *
     * @param system имя системы в формате DICS, которой принадлежит адресная информация
     * @param accounts список адресной информации.
     */
    Delete(system: string, accounts: IList): void;
    /**
     * Метод удаляет информацию о пользователе удаленной системы из хранилища адресной информации.
     *
     * @param system имя удаленной системы, заданное в настройках агента удаленной системы;
     * @param name имя пользователя, группы пользователей или роли в удаленной системе.
     */
    DeleteAccount(system: string, name: string): void;
    /**
     * Метод обновляет адресную информацию в хранилище,
     * то есть заменяет имеющийся список учетных записей для системы System на список, переданный через параметр Accounts.
     *
     * @param system имя системы в формате DICS, которой принадлежит адресная информация
     * @param accounts список адресной информации
     */
    Update(system: string, accounts: IList): void;
    /**
     * Метод обновляет информацию о пользователе удаленной системы в хранилище адресной информации.
     *
     * @param system имя удаленной системы, заданное в настройках агента удаленной системы
     * @param name имя пользователя, группы пользователей или роли в удаленной системе.
     * @param fullName полное имя пользователя, группы пользователей или роли в удаленной системе.
     * @param additionalInformation дополнительные сведения о пользователе, роли или группе.
     */
    UpdateAccount(system: string, name: string, fullName: string, additionalInformation: string): void;
}