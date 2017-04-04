import {IForEach} from "./IForEach";
/**
 * Объект IStringList предназначен для хранения набора строк.
 *
 * todo описать интерфейс
 */
export interface IStringList extends IForEach {
    readonly DelimitedText: string;
    readonly Delimiter: string;
    readonly Sorted: string;
    readonly SortType: string;
    readonly Text: string;
    readonly Values: string;

    Add(): void;
    AddStrings(): void;
    Clear(): void;
    Delete(): void;
    Exchange(): void;
    IndexOf(): void;
}