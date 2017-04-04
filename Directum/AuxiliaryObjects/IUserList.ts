import {IForEach} from "./IForEach";
import {IUser} from "./IUser";
/**
 * Объект IUserList предназначен для управления списком пользователей. Элементами списка являются объекты IUser.
 */
export interface IUserList extends IForEach {
    /**
     * Метод добавляет в конец списка пользователя или группу.
     *
     * @param user добавляемый пользователь или группа
     */
    Add(user: IUser): void;
    /**
     * Метод очищает список пользователей.
     */
    Clear(): void;
    /**
     * Метод удаляет из списка пользователя или группу.
     *
     * @param user удаляемый пользователь или группа
     */
    Delete(user: IUser): void;
    /**
     * Метод выполняет поиск пользователя или группы User в списке.
     *
     * @param user пользователь или группа
     */
    Find(user: IUser): boolean;
}