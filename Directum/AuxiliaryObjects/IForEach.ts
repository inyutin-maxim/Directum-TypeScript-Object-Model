/**
 * Однонаправленный список
 */
export interface IForEach{
    /**
     * Свойство возвращает количество элементов в списке.
     */
    Count: number;
    /**
     *Свойство возвращает признак конца списка.
     */
    EOF: boolean;
    /**
     * Свойство возвращает значение текущего элемента списка.
     */
    Value: any;
    /**
     * Перейти к следующему элементу списка
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_metod_next_perejti_k_sledujuschemu_elementy_spiska.htm
     */
    Next();
    /**
     * Перейти к началу списка
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_metod_reset_perejti_k_nachalu_spiska.htm
     */
    Reset();
}