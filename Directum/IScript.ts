import {IScriptParams} from "./IScriptParams";
export interface IScript{
    Params: IScriptParams;
    Execute();
}