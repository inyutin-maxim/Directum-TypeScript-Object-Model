/**
 * Объект IMetadataRepository предназначен для работы с хранилищем метаданных.
 */
export interface IMetadataRepository {
    /**
     * Метод импортирует новые метаданные в справочник Метаданные структурированных объектов.
     *
     * @param id идентификатор метаданных
     * @param version версия метаданных
     * @param controller имя контроллера, с которого получены метаданные
     * @param value метаданные
     */
    Add(id: string, version: string, controller: string, value: string)
    /**
     * Метод удаляет метаданные из справочника Метаданные структурированных объектов.
     *
     * @param id идентификатор метаданных
     * @param version версия метаданных
     */
    Delete(id: string, version: string)
}