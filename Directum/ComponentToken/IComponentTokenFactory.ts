import {IEdmsObjectFactory} from "../BaseObjects/IEdmsObjectFactory";
import {IFactory} from "../BaseObjects/IFactory";
import {IComponentToken} from "./IComponentToken";
import {IObjectInfo} from "../BaseObjects/IObjectInfo";
/**
 * Объект IComponentTokenFactory предназначен для работы с вариантами запуска компонент.
 */
export interface IComponentTokenFactory extends IEdmsObjectFactory, IFactory {
    /**
     * Метод создает новый вариант запуска компоненты, с теми же значениями свойств, что и у варианта запуска SourceComponentToken.
     *
     * @param sourceComponentToken исходный вариант запуска
     */
    Copy(sourceComponentToken: IComponentToken): IComponentToken;
    /**
     * Метод создает новый вариант запуска компоненты.
     */
    CreateNew(): IComponentToken;
    /**
     * Метод запускает компоненту с помощью варианта запуска, информация о котором была передана в параметре ObjectInfo.
     *
     * @param objectInfo информация о варианте запуска компоненты.
     */
    Execute(objectInfo: IObjectInfo): void;
    /**
     * Метод запускает компоненту в новом процессе Windows с помощью варианта запуска, информация о котором была передана в параметре ObjectInfo.
     *
     * @param objectInfo информация о варианте запуска компоненты.
     */
    ExecuteInNewProcess(objectInfo: IObjectInfo): void;
    /**
     * Метод экспортирует варианты запуска и папки из общей папки «Компоненты» в файл FileName.
     *
     * @param fileName имя файла, в который выгружаются данные.
     */
    Export(fileName: string): void;
    /**
     * Метод импортирует варианты запуска и папок из файла FileName.
     *
     * @param fileName имя файла, из которого загружаются данные.
     * @param error сводная информация об ошибках.
     */
    Import(fileName: string, error: string): boolean;
}