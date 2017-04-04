import {IAccessRights} from "./IAccessRights";
import {TEditMode} from "../Enums/TEditMode";
/**
 * Объект IEdmsObject предназначен для работы с объектом ЭДО.
 */
export interface IEdmsObject {
    /**
     * Свойство возвращает права доступа пользователей к объекту электронного документооборота (ЭДО):
     * документу, папке, задаче, заданию, варианту запуска компоненты.
     */
    readonly AccessRights: IAccessRights;

    /**
     * Метод переводит объект в режим редактирования.
     */
    EnterEditMode(): void;
    /**
     * Метод переводит объект из режима редактирования в режим просмотра.
     */
    LeaveEditMode(): void;
    /**
     * Метод проверяет, возможно ли редактирование объекта в режиме EditMode.
     *
     * @param editMode режим редактирования объекта
     * @param errorMessage системное сообщение об ошибке IS-Builder
     */
    TryEdit(editMode: TEditMode, errorMessage: string): boolean;
}