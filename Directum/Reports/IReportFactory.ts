import {IFactory} from "../BaseObjects/IFactory";
import {IReport} from "./IReport";
/**
 * Объект IReportFactory предназначен для работы с отчетами.
 */
export interface IReportFactory extends IFactory {
    /**
     * Метод выполняет отчет с именем Name и возвращает управление в вызвавший код.
     *
     * @param name имя отчета
     */
    ExecuteByName(name: string): void;
    /**
     * Метод возвращает объект IReport.
     *
     * @param name имя отчета
     */
    GetObjectByName(name: string): IReport;
}