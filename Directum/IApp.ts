import {IScriptFactory} from "./Factories/IScriptFactory";
import {IWizardFactory} from "./Factories/IWizardFactory";
import {IReferencesFactory} from "./Factories/IReferencesFactory";
export interface IApp{
    ScriptFactory: IScriptFactory;
    ReferencesFactory: IReferencesFactory;
    WizardFactory: IWizardFactory;
}
