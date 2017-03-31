/**
 * Однонаправленный список
 */
export interface IForEach{
    /**
     * Свойство возвращает количество элементов в списке.
     */
    readonly Count: number;
    /**
     *Свойство возвращает признак конца списка.
     */
    readonly EOF: boolean;
    /**
     * Свойство возвращает значение текущего элемента списка.
     */
    readonly Value: any;
    /**
     * Перейти к следующему элементу списка
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_metod_next_perejti_k_sledujuschemu_elementy_spiska.htm
     */
    Next(): void;
    /**
     * Перейти к началу списка
     *
     * @desc https://club.directum.ru/webhelp/directum/5.2/index.html?om_metod_reset_perejti_k_nachalu_spiska.htm
     */
    Reset(): void;
}