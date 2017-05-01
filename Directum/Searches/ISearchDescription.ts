import {IApplication} from "../IApplication";
import {TSearchShowMode} from "../Enums/TSearchShowMode";
import {IContents} from "../AuxiliaryObjects/IContents";
import {TContentKind} from "../Enums/TContentKind";
import {IRequisiteDescriptionList} from "./IRequisiteDescriptionList";
import {ISearchCriteria} from "./ISearchCriteria";
import {ISearchResultRestrictions} from "./ISearchResultRestrictions";
/**
 * Объект ISearchDescription предназначен для описания поисков.
 */
export interface ISearchDescription {
    /**
     * Свойство возвращает объект-приложение, в контексте которого будет выполнен поиск.
     */
    readonly Application: IApplication;
    /**
     * Текст обработчика события «До поиска».
     * Содержит ISBL-код, который будет отработан при выполнении события «До поиска».
     */
    BeforeSearch: string;
    /**
     * Свойство предоставляет доступ к заголовку поиска.
     */
    Description: string;
    /**
     * Свойство предоставляет доступ к признаку доступности поиска для всех пользователей:
     * True, если поиск доступен для всех пользователей,
     * False, если поиск доступен только для текущего пользователя.
     */
    ForAllUsers: boolean;
    /**
     * Свойство возвращает признак поиска для объекта:
     * True, если производится поиск связанный с объектом, например, поиск «Вложено в задачи»,
     * False, если поиск не связан с объектом.
     */
    readonly ForObject: boolean;
    /**
     * Свойство предоставляет доступ к имени поиска.
     */
    Name: string;
    /**
     * Текст обработчика события «Удаление ссылки».
     * Содержит ISBL-код, который будет отработан при выполнении действия «Удаление ссылки» в результатах поиска.
     */
    OnCutLinks: string;
    /**
     * Текст обработчика события «Вставка ссылки».
     * Содержит ISBL-код, который будет отработан при выполнении действия «Вставка ссылки» в результатах поиска.
     */
    OnPasteLinks: string;
    /**
     * Свойство возвращает список описаний всех возможных реквизитов, по которым можно осуществлять поиск.
     */
    readonly RequisiteDescriptionList: IRequisiteDescriptionList;
    /**
     * Свойство возвращает список критериев поиска.
     * Элементами списка являются объекты ISearchCriterion и его наследники.
     */
    readonly SearchCriteria: ISearchCriteria;
    /**
     * Свойство возвращает настройки ограничения результатов поиска.
     */
    readonly SearchResultRestrictions: ISearchResultRestrictions;
    /**
     * Свойство возвращает список, содержащий информацию о выбранных из результатов поиска объектах.
     */
    readonly SelectedContents: IContents;

    /**
     * Метод возвращает тип содержимого поиска.
     */
    GetContentKind(): TContentKind;
    /**
     * Метод выполняет поиск и возвращает список с информацией о найденных объектах.
     */
    Execute(): IContents;
    /**
     * Метод выполняет поиск и отображает его результаты в режиме Mode.
     *
     * @param mode режим отображения результатов поиска
     * @param suppressQuerySearchCriteria признак подавления показа диалога для заполнения значений критериев поиска:
     * True, если не нужно показывать диалог,
     * False, если диалог нужно показывать в зависимости от наличия запрашиваемых реквизитов.
     */
    Show(mode: TSearchShowMode, suppressQuerySearchCriteria: boolean): void;
}