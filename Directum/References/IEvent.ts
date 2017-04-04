import {IExternalHandler} from "./IExternalHandler";
/**
 * Объект-событие предназначен для управления доступностью обработчиков событий на ISBL.
 */
export interface IEvent {
    /**
     * Свойство предоставляет доступ к доступности ISBL-обработчиков события:
     * True - если обработчик включен, False - если отключен.
     */
    Enabled: boolean;
    /**
     * Свойство ExternalHandler дает возможность назначить внешнюю обработку при срабатывании событий IS-Builder.
     */
    readonly ExternalHandler: IExternalHandler;
    /**
     * Свойство возвращает ИД события.
     */
    readonly ID: number;
}