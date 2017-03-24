import {IScript} from "../IScript";
export interface IScriptFactory{
    GetObjectByName(name: string) : IScript;
}