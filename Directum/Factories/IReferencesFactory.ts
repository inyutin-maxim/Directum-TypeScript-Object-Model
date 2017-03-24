import {IReference} from "../IReference";
export interface IReferencesFactory{
    ReferenceFactory(name: string): IReferencesFactory;
    GetObjectByID(id: number): IReference;
    GetComponent(): IReference;
}