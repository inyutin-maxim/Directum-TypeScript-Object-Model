import {IForEach} from "./IForEach";
import {TStringsSortType} from "../Enums/TStringsSortType";
/**
 * Объект IStringList предназначен для хранения набора строк.
 */
export interface IStringList extends IForEach {
    /**
     * Свойство предоставляет доступ к списку строк в виде единой строки с разделителями.
     */
    DelimitedText: string;
    /**
     * Свойство предоставляет доступ к разделителю строк списка.
     */
    Delimiter: string;
    /**
     * Свойство предоставляет доступ к признаку сортировки списка.
     */
    Sorted: boolean;
    /**
     * Свойство предоставляет доступ к типу сортировки строк.
     */
    SortType: TStringsSortType;
    /**
     * Свойство предоставляет доступ к списку строк в виде текста, в котором строки разделены парой символов:
     * возврата каретки (#13) и перевода строки (#10).
     */
    Text: string;
    /**
     * Свойство возвращает строку списка с указанным индексом.
     *
     * @param index индекс строки в списке.
     */
    Values(index: number): string;
    /**
     * Метод добавляет в список новую строку.
     *
     * @param value строка.
     */
    Add(value: string): number;
    /**
     * Метод добавляет к списку новые строки из параметра Source.
     *
     * @param source список строк.
     */
    AddStrings(source: IStringList): void;
    /**
     * Метод удаляет все строки списка. После удаления значение свойства Count становится равным нулю.
     */
    Clear(): void;
    /**
     * Метод удаляет строку с указанным индексом.
     *
     * @param index индекс удаляемой строки.
     */
    Delete(index: number): void;
    /**
     * Метод меняет местами 2 строки в списке.
     *
     * @param index1 индекс первой строки
     * @param index2 индекс второй строки
     */
    Exchange(index1: number, index2: number): void;
    /**
     * Метод возвращает индекс строки, совпадающей со значением параметра Value.
     *
     * @param value искомая строка
     */
    IndexOf(value: string): number;
}