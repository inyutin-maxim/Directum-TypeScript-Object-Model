import {IFactory} from "./IFactory";
import {IUser} from "../AuxiliaryObjects/IUser";
import {TUserObjectStatus} from "../Enums/TUserObjectStatus";
import {IComponent} from "../References/IComponent";
import {IContents} from "../AuxiliaryObjects/IContents";
/**
 * Объект IEdmsObjectFactory предназначен для доступа к объектам ЭДО: документам, папкам, задачам, заданиям, вариантам запуска компонент.
 */
export interface IEdmsObjectFactory extends IFactory {
    /**
     * Свойство возвращает пользователя, от имени которого выполняются вычисления.
     */
    readonly CurrentUser: IUser;
    /**
     * Свойство предоставляет доступ к пользовательскому статусу объекта с идентификатором ID.
     */
    UserStatus: TUserObjectStatus;

    /**
     * Свойство возвращает историю работы с объектом типа Kind с идентификатором ID.
     * Если такого объекта не существует, то будет сгенерировано исключение.
     */
    History(id: number): IComponent;

    /**
     * Метод удаляет объект типа Kind с идентификатором ID.
     *
     * @param id ИД объекта
     */
    DeleteByID(id: number): void;
    /**
     * Метод возвращает список с информацией об объектах типа Kind с идентификаторами из массива ObjectsID.
     *
     * @param objectsID массив ИД объектов.
     */
    GetContents(objectsID: any): IContents;
}