import {IContents} from "../AuxiliaryObjects/IContents";
import {TCompType} from "../Enums/TCompType";
/**
 * Объект IObjectInfo предназначен для получения информации о наследниках объекта IObject без получения самих объектов-наследников.
 */
export interface IObjectInfo{
    /**
     * Свойство возвращает имя компоненты, к которой относится объект.
     */
    ComponentName: string;
    /**
     * Свойство возвращает заголовок компоненты, к которой относится объект.
     */
    ComponentTitle: string;
    /**
     * Свойство возвращает тип объекта.
     */
    ComponentType: TCompType;
    /**
     * Свойство возвращает ИД объекта.
     */
    ID: number;
    /**
     * Свойство возвращает наименование объекта.
     */
    Name: string;
    /**
     * Свойство возвращает код системы, к которой относится объект.
     */
    SystemCode: string;
    /**
     * Метод помещает в объект IContents текущий объект IObjectInfo и значение параметра Value.
     *
     * @param value – информация об объекте, объединяемая вместе с текущей.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_metod_combine_obedinit_informaciyu_ob_obektah.htm
     */
    Combine(value: IObjectInfo): IContents;
}