import {IObjectInfo} from "../BaseObjects/IObjectInfo";
import {IForEach} from "./IForEach";
/**
 * Объект IContents предназначен для работы со списком содержимого объекта, например, папки.
 */
export interface IContents extends IForEach {
    /**
     * Свойство возвращает признак получения содержимого с помощью поиска,
     * причем количество результатов превышает заданное в свойстве MaxRecordCount ограничение:
     * True, если содержимое объекта, получено поиском, превысившим ограничение, иначе False.
     */
    readonly IsResultExceedsMaxRecordCount: boolean;

    /**
     * Объединить информацию об объектах
     *
     * @param value информация об объектах, объединяемая с текущим содержимым IContents.
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_metod_combine_obedinit_informciyu_ob_obektah.htm
     */
    Combine(value: IObjectInfo | Array<IObjectInfo> | IContents): IContents;
    /**
     * Сортировать содержимое
     * @param properties строка или массив строк с наименованиями свойств элементов содержимого, по которым будет осуществляться сортировка;
     * @param ascendingOrder логическое значение или массив логических значений, определяющий порядок сортировки по соответствующим свойствам элементов содержимого.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_sort_sortirovka_soderzhimogo.htm
     */
    Sort(properties: string, ascendingOrder: boolean): void;

    /**
     * Сортировать содержимое
     * @param properties строка или массив строк с наименованиями свойств элементов содержимого, по которым будет осуществляться сортировка;
     * @param ascendingOrder логическое значение или массив логических значений, определяющий порядок сортировки по соответствующим свойствам элементов содержимого.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_sort_sortirovka_soderzhimogo.htm
     */
    Sort(properties: Array<string>, ascendingOrder: Array<boolean>): void;
}