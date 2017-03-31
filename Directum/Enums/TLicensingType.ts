/**
 * Тип учета лицензий
 */
export enum TLicensingType{
        /**
         * Учет по количеству активных соединений;
         */
    eltPerConnection = 0,
        /**
         * Учет по количеству пользователей в системе.
         */
    eltPerUser = 1
}