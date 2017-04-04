import {IList} from "../AuxiliaryObjects/IList";
import {IForEach} from "../AuxiliaryObjects/IForEach";
import {IControl} from "./IControl";
import {IAction} from "./IAction";
import {IRequisite} from "../Data/IRequisite";
import {TControlType} from "../Enums/TControlType";
/**
 * Объект IControlList предназначен для доступа к элементам управления формы. Элементами списка являются объекты IControl.
 */
export interface IControlList extends IList, IForEach {
    /**
     * Свойство возвращает список управляющих элементов формы. Элементами списка являются объекты IControl или его наследники.
     *
     * @param name имя элемента управления
     */
    FindControl(name: string): IControl;
    /**
     * Метод возвращает первый элемент управления из списка, связанный с действием Action.
     *
     * @param action действие
     */
    FindControlByAction(action: IAction): IControl;
    /**
     * Метод возвращает первый элемент управления из списка, связанный с реквизитом Requisite.
     *
     * @param requisite реквизит
     */
    FindControlByRequisite(requisite: IRequisite): IControl;
    /**
     * Метод возвращает список элементов управления, связанных с действием Action.
     *
     * @param action действие
     */
    FindControlsByAction(action: IAction): IControlList;
    /**
     * Метод возвращает список элементов управления из списка, связанных с реквизитом Requisite.
     *
     * @param requisite реквизит
     */
    FindControlsByRequisite(requisite: IRequisite): IControlList;
    /**
     *  Метод возвращает список элементов управления, которые имеют тип ControlType.
     *
     * @param controlType тип контроля
     */
    FindControlsByType(controlType: TControlType): IControlList;
}