import {IControl} from "./IControl";
import {TInplaceHintKind} from "../Data/TInplaceHintKind";
/**
 * Управляющий элемент IInplaceHint предназначен для отображения встроенных подсказок на форме.
 */
export interface IInplaceHint extends IControl {
    Kind: TInplaceHintKind;
}