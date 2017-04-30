import {IObject} from "../BaseObjects/IObject";
import {TReportDestination} from "../Enums/TReportDestination";
/**
 * Объект IReport содержит методы и свойства для работы с компонентами типа «Отчет».
 */
export interface IReport extends IObject {
    /**
     * Свойство предоставляет доступ к направлению вывода отчета: отчет отображается на экране или заносится в файл.
     */
    Destination: TReportDestination;
    /**
     * Свойство возвращает имя файла, в который сохраняется отчет.
     * Используется, когда свойство Destination имеет значение rdFile.
     */
    FileName: string;
    /**
     * Метод выполняет отчет.
     * В зависимости от значения свойства Destination отчет отображается на экране или заносится в файл.
     */
    Execute(): void;
    /**
     * Метод фиксирует факт выполнения отчета в истории.
     */
    WriteExecutionToHistory(): void;
}