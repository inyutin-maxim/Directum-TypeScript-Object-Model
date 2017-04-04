import {IForm} from "./VisualView/IForm";
export interface IReference{
    Form: IForm;
    CreateView(viewName: string);
}