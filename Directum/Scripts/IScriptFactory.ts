import {IScript} from "./IScript";
import {IFactory} from "../BaseObjects/IFactory";
/**
 * Объект IScriptFactory предназначен для работы со сценариями.
 */
export interface IScriptFactory extends IFactory {
    /**
     * Метод выполняет сценарий с именем Name.
     *
     * @param name имя сценария
     */
    ExecuteByName(name: string): any;
    /**
     * Метод возвращает объект-сценарий IScript.
     * Если сценария с именем Name не существует, то будет сгенерировано исключение.
     *
     * @param name имя сценария
     */
    GetObjectByName(name: string) : IScript;
}