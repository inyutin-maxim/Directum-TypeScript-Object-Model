import {IApplication} from "../IApplication";
import {TContentKind} from "../Enums/TContentKind";
import {ISearchDescription} from "./ISearchDescription";
import {IList} from "../AuxiliaryObjects/IList";
/**
 * Объект ISearchFactory предназначен для работы с поисками.
 */
export interface ISearchFactory {
    /**
     * Свойство возвращает объект-приложение, которому принадлежит фабрика поисков.
     */
    readonly Application: IApplication;

    /**
     * Метод создает и возвращает описание нового поиска, содержимое которого имеет тип SearchKind.
     *
     * @param searchKind тип содержимого поиска.
     */
    CreateNew(searchKind: TContentKind): ISearchDescription;
    /**
     * Метод удаляет все слепки объектов из таблиц SBIndexDataEDoc, SBIndexDataFolder, SBIndexDataJob, SBIndexDataTask.
     */
    DeleteIndexData(): void;
    /**
     * Метод возвращает описание поиска с именем SearchName.
     *
     * @param searchName имя поиска.
     */
    Load(searchName: string): ISearchDescription;
    /**
     * Метод возвращает список всех описаний поисков из справочника Поиски и всех предопределенных поисков.
     * Элементами списка являются объекты ISearchDecription и его наследники.
     */
    LoadAll(): IList;
    /**
     * Метод обновляет слепки объектов в таблицах SBIndexDataEDoc, SBIndexDataFolder, SBIndexDataJob, SBIndexDataTask:
     * удаляет слепки для удаленных объектов, создает слепки для новых объектов и обновляет слепки для измененных объектов.
     * @constructor
     */
    UpdateIndexData(): void;
}