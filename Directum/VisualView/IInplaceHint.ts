import {IControl} from "./IControl";
import {TInplaceHintKind} from "../Enums/TInplaceHintKind";
/**
 * Управляющий элемент IInplaceHint предназначен для отображения встроенных подсказок на форме.
 */
export interface IInplaceHint extends IControl {
    /**
     * Свойство предоставляет доступ к типу подсказки.
     */
    Kind: TInplaceHintKind;
}