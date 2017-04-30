import {IFactory} from "../BaseObjects/IFactory";
import {IEdmsObjectFactory} from "../BaseObjects/IEdmsObjectFactory";
import {IUser} from "../AuxiliaryObjects/IUser";
/**
 * Объект IJobFactory предназначен для работы с заданиями.
 */
export interface IJobFactory extends IEdmsObjectFactory, IFactory {
    /**
     * Свойство предоставляет доступ ко времени напоминания текущему пользователю о задании.
     *
     * @param id ИД задания
     */
    SuspendTime(id: number): Date;
    /**
     * Свойство предоставляет доступ ко времени напоминания пользователю User о задании с идентификатором ID.
     *
     * @param id ИД задания
     * @param user Пользователь
     */
    SuspendTimeForUser(id: number, user: IUser): Date;
    /**
     * Метод очищает время напоминания по заданию с идентификатором ID для текущего пользователя.
     *
     * @param id ИД задания
     */
    ClearSuspendTime(id: number): void;
    /**
     * Очистить время напоминания о заданию с идентификатором ID для пользователя User.
     *
     * @param id ИД задания
     * @param user Пользователь
     */
    ClearSuspendTimeForUser(id: number, user: IUser): void;
}