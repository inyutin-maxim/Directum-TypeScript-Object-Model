/**
 * Режим доступа к объекту
 */
export enum TEditMode {
    /**
     * блокировка на сервере приложений;
     */
    emLock,
        /**
         * изменение;
         */
    emEdit,
        /**
         * подписание;
         */
    emSign,
        /**
         * экспорт с блокировкой;
         */
    emExportWithLock,
        /**
         * импорт с разблокировкой;
         */
    emImportWithUnlock,
        /**
         * изменение примечания к версии;
         */
    emChangeVersionNote,
        /**
         * открытие в приложении-редакторе для изменения;
         */
    emOpenForModify,
        /**
         * изменение стадии жизненного цикла;
         */
    emChangeLifeStage,
        /**
         * удаление;
         */
    emDelete,
        /**
         * создание версии;
         */
    emCreateVersion,
        /**
         * импорт;
         */
    emImport,
        /**
         * старт задачи;
         */
    emStart,
        /**
         * прекращение задачи;
         */
    emAbort,
        /**
         * рестарт задачи;
         */
    emReInit,
        /**
         * пометка задания как прочитанного;
         */
    emMarkAsReaded,
        /**
         * пометка задания как не прочитанного;
         */
    emMarkAsUnreaded,
        /**
         * выполнение задания;
         */
    emPerform,
        /**
         * принятие задачи;
         */
    emAccept,
        /**
         * отправка задачи на доработку;
         */
    emResume,
        /**
         * изменение прав на объект;
         */
    emChangeRights,
        /**
         * изменение маршрута задачи;
         */
    emEditRoute,
        /**
         * изменение наблюдателей задачи;
         */
    emEditObserver,
        /**
         * восстановление документа из локальной копии;
         */
    emRecoveryFromLocalCopy,
        /**
         * изменение типа прав на задачу;
         */
    emChangeWorkAccessType,
        /**
         * изменение типа шифрования на шифрование сертификатом;
         */
    emChangeEncodeTypeToCertificate,
        /**
         * изменение типа шифрования на шифрование паролем;
         */
    emChangeEncodeTypeToPassword,
        /**
         * отключение шифрования;
         */
    emChangeEncodeTypeToNone,
        /**
         * изменение типа шифрования на шифрование сертификатом и паролем;
         */
    emChangeEncodeTypeToCertificatePassword,
        /**
         * изменение типового маршрута задачи;
         */
    emChangeStandardRoute,
        /**
         * получение объекта;
         */
    emGetText,
        /**
         * перемещение в другое хранилище;
         */
    emMoveToStorage,
        /**
         * создание объекта;
         */
    emCreateObject,
        /**
         * изменение признака скрытия версии документа;
         */
    emChangeVersionHidden,
        /**
         * удаление версии документа;
         */
    emDeleteVersion,
        /**
         * изменение стадии жизненного цикла документа;
         */
    emChangeLifeCycleStage,
        /**
         * подписание утверждающей подписью;
         */
    emApprovingSign,
        /**
         * экспорт;
         */
    emExport,
        /**
         * возобновление задачи;
         */
    emContinue,
        /**
         * блокировка документа;
         */
    emLockFromEdit,
        /**
         * разблокировка документа;
         */
    emUnLockForEdit,
        /**
         * закрепление документа для сервера;
         */
    emLockForServer,
        /**
         * снятие закрепления документа для сервера;
         */
    emUnlockFromServer,
        /**
         * передача прав доступа на документ;
         */
    emDelegateAccessRights,
        /**
         * перешифрование документов или задач.
         */
    emReEncode,
}