import {IWizard} from "../IWizard";
export interface IWizardFactory{
    GetObjectByCode(name: string): IWizard;
}