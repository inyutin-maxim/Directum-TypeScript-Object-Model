import {IQuery} from "./IQuery";
import {TFieldDataType} from "../Enums/TFieldDataType";
/**
 * Объект IField предназначен для работы с полями запроса.
 */
export interface IField{
    /**
     * Свойство предоставляет доступ к значению поля в виде даты.
     */
    AsDate:Date;
    /**
     * Свойство предоставляет доступ к значению поля в виде целого числа.
     */
    AsInteger:number;
    /**
     * Свойство предоставляет доступ к значению поля в виде числа.
     */
    AsNumeric:number;
    /**
     * Свойство возвращает строку критерия поиска.
     */
    AsString:string;
    /**
     * Свойство возвращает тип данных поля.
     */
    readonly DataType: TFieldDataType;
    /**
     * Свойство возвращает признак пустого значения поля: True, если значение поля пустое, иначе False.
     */
    readonly IsNull: boolean;
    /**
     * Свойство возвращает алиас поля, используемый в SQL-запросе.
     */
    readonly Name: string;
    /**
     * Свойство возвращает SQL-запрос, к которому относится поле.
     */
    readonly Query: IQuery;
    /**
     * Свойство возвращает имя поля в таблице базы данных.
     */
    readonly SQLFieldName: string;
    /**
     * Свойство предоставляет доступ к значению поля.
     */
    Value:any;

    /**
     * Метод загружает значение поля из файла с именем FileName.
     *
     * @param fileName - имя файла.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_loadfromfile_zagruzit_iz_fajla_ifield.htm
     */
    LoadFromFile(fileName: string): void;
    /**
     * Метод сохраняет значение поля в файл с именем FileName.
     *
     * @param fileName - имя файла.
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_savetofile_sohranit_v_fajl_ifield.htm
     */
    SaveToFile(fileName: string): void;
}