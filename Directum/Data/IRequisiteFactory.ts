import {TDateFormatType} from "../Enums/TDateFormatType";
import {TAlignment} from "../Enums/TAlignment";
/**
 * Объект IRequisiteFactory содержит методы создания реквизитов набора данных на этапе выполнения вычислений.
 */
export interface IRequisiteFactory {
    /**
     * Метод создает реквизит типа «Дата».
     *
     * @param title заголовок реквизита
     * @param name имя реквизита
     * @param fieldName имя поля с данными реквизита
     * @param dateFormatType тип форматирования даты в реквизите
     */
    CreateDateTimeRequisite(title: string, name: string, fieldName: string, dateFormatType: TDateFormatType): void;
    /**
     * Метод создает и добавляет в набор данных целочисленный реквизит.
     *
     * @param title заголовок реквизита
     * @param name имя реквизита
     * @param fieldName имя поля, в котором хранится значение реквизита
     */
    CreateIntegerRequisite(title: string, name: string, fieldName: string): void;
    /**
     * Метод создает и добавляет в набор данных числовой реквизит.
     *
     * @param title заголовок реквизита
     * @param name имя реквизита
     * @param fieldName имя поля, в котором хранится значение реквизита
     * @param precision точность числового реквизита.
     * В качестве параметра Precision следует передавать количество цифр после запятой.
     */
    CreateNumericRequisite(title: string, name: string, fieldName: string, precision: number): void;
    /**
     * Метод создает и добавляет в набор данных реквизит типа признак.
     *
     * @param title заголовок реквизита
     * @param name имя реквизита
     * @param fieldName имя поля, в котором хранится значение реквизита
     * @param pickList перечень значений в формате:
     * <Name1>=<Value1>|@<LocalizationGroupCode1>.< LocalizationStringCode1>;...;<NameN>=<ValueN>|@<LocalizationGroupCodeN>.< LocalizationStringCodeN>,
     * где Name – это ИД допустимого значения реквизита,
     * Value – это допустимое значение реквизита,
     * LocalizationGroupCode – это код группы локализованной строки отображаемого значения реквизита,
     * LocalizationStringCode – код локализованной строки отображаемого значения реквизита.
     */
    CreatePickRequisite(title: string, name: string, fieldName: string, pickList: string): void;
    /**
     * Метод создает и добавляет в набор данных строковый реквизит.
     *
     * @param title заголовок реквизита
     * @param name имя реквизита
     * @param fieldName имя поля, в котором хранится значение реквизита
     * @param alignment  выравнивание значения реквизита (по левому или по правому краю).
     */
    CreateStringRequisite(title: string, name: string, fieldName: string, alignment: TAlignment): void;
    /**
     * Метод создает и добавляет в набор данных строковый реквизит с поддержкой Unicode.
     *
     * @param title заголовок реквизита
     * @param name имя реквизита
     * @param fieldName имя поля, в котором хранится значение реквизита
     * @param alignment  выравнивание значения реквизита (по левому или по правому краю).
     */
    CreateWideStringRequisite(title: string, name: string, fieldName: string, alignment: TAlignment): void;
}