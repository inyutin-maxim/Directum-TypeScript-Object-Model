import {TLifeCycleStageFontColor} from "../Enums/TLifeCycleStageFontColor";
import {TLifeCycleStageFontStyle} from "../Enums/TLifeCycleStageFontStyle";
/**
 * Объект ILifeCycleStage предназначен для получения информации о стадии жизненного цикла документа.
 */
export interface ILifeCycleStage {
    /**
     * Свойство возвращает цвет шрифта стадии жизненного цикла документа.
     */
    readonly FontColor: TLifeCycleStageFontColor;
    /**
     * Свойство возвращает начертание шрифта стадии жизненного цикла документа.
     */
    readonly FontStyle: TLifeCycleStageFontStyle;
    /**
     * Свойство возвращает имя стадии жизненного цикла документа.
     */
    readonly Name: string;
    /**
     * Свойство возвращает имя стадии жизненного цикла документа.
     */
    readonly Title: string;
}