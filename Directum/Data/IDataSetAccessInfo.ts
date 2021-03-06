/**
 * Объект IDataSetAccessInfo содержит информацию о правах доступа к набору данных.
 */
export interface IDataSetAccessInfo {
    /**
     * Свойство возвращает признак возможности добавления записи:
     * True, если текущий пользователь может добавлять запись, иначе False.
     */
    readonly CanInsert: boolean;
    /**
     * Свойство возвращает признак возможности изменения записи:
     * True, если текущий пользователь может изменять запись, иначе False.
     */
    readonly CanUpdate: boolean;
    /**
     * Свойство возвращает признак возможности удаления записи:
     * True, если текущий пользователь может удалять запись, иначе False.
     */
    readonly CanDelete: boolean;
    /**
     * Свойство возвращает признак возможности утверждения записи:
     * True, если текущий пользователь может утверждать запись, иначе False.
     */
    readonly CanRatify: boolean;
}