import {IComponent} from "./IComponent";
import {IObject} from "../BaseObjects/IObject";
import {IRequisite} from "../Data/IRequisite";
import {IActionList} from "../VisualView/IActionList";
/**
 * Содержит методы и свойства для работы с компонентами типа «Справочник».
 * Наследует свойства и методы IComponent.
 */
export interface IReference extends IComponent, IObject {
    /**
     * Свойство возвращает список действий справочника.
     */
    readonly Actions: IActionList;
    /**
     * Если на данный справочник ссылаются реквизиты типа «Справочник»,
     * то свойство возвращает реквизит, значения которого будут отображаться как значения реквизита типа «Справочник».
     */
    readonly DisplayRequisite: IRequisite;
    /**
     * Свойство возвращает признак запрета на просмотр всех записей справочника:
     * True, если для справочника установлен запрет на просмотр всех записей справочника, иначе False.
     */
    readonly FullShowingRestricted: boolean;
    /**
     * Метод возвращает связанный справочник с именем Name.
     *
     * @param name имя связанного справочника
     */
    GetLinkedReference(name: string): IReference;
    /**
     * Метод устанавливает максимальное количество получаемых записей справочника равным значению настройки RestrictedReferenceRecordCount,
     * если на этот справочник установлен запрет на просмотр всех записей.
     */
    SetRecordCountRestriction(): void;
    /**
     * Метод отображает форму-список связанного справочника с именем Name из представления с кодом ViewCode.
     *
     * @param name имя связанного справочника
     * @param viewCode код представления
     */
    ShowLinkedReferenceComponentForm(name: string, viewCode: string): void;
    /**
     * Метод отображает форму-карточку связанного справочника с именем Name из представления с кодом ViewCode.
     *
     * @param name имя связанного справочника
     * @param viewCode код представления
     */
    ShowLinkedReferenceForm(name: string, viewCode: string): void;
}