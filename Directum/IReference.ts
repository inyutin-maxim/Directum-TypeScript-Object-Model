import {IForm} from "./IForm";
export interface IReference{
    Form: IForm;
    CreateView(viewName: string);
}