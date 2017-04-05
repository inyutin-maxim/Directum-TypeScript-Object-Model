import {IDialogFactory} from "./IDialogFactory";
/**
 * Объект IDialogsFactory предназначен для получения фабрики диалога с помощью свойства DialogFactory.
 */
export interface IDialogsFactory {
    DialogFactory(name: string): IDialogFactory;
}