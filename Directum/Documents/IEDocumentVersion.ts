/**
 * Объект IEDocumentVersion предназначен для работы с версией документа.
 *
 * todo описать интерфейс
 */
export interface IEDocumentVersion {
    /**
     *
     */
    readonly Author: string;
    /**
     *
     */
    readonly CurrentState: string;
    /**
     *
     */
    readonly CurrentStateName: string;
    /**
     *
     */
    readonly Editor: string;
    /**
     *
     */
    readonly GlobalLock: string;
    /**
     *
     */
    readonly IsHidden: string;
    /**
     *
     */
    readonly LockedForServer: string;
    /**
     *
     */
    readonly Modified: string;
    /**
     *
     */
    readonly Note: string;
    /**
     *
     */
    readonly Number: string;
    /**
     *
     */
    readonly Parent: string;
    /**
     *
     */
    readonly Signed: string;
    /**
     *
     */
    readonly Signatures: string;
    /**
     *
     */
    readonly SignatureType: string;
    /**
     *
     */
    readonly Size: string;
    /**
     *
     */
    readonly TextModified: string;

    ChangeState(...args): void;
    CreateClone(...args): void;
    EnterEditMode(...args): void;
    Export(...args): void;
    ExportInExtendedFormat(...args): void;
    ImportFromEDocument(...args): void;
    ImportFromFile(...args): void;
    ImportFromScannedFile(...args): void;
    ImportFromTemplate(...args): void;
    ImportInExtendedFormat(...args): void;
    Lock(...args): void;
    LockForServer(...args): void;
    LeaveEditMode(...args): void;
    Sign(...args): void;
    SignByAnotherUser(...args): void;
    TryEdit(...args): void;
    UnLock(...args): void;
    UnlockFromServer(...args): void;
    VerifySignatures(...args): void;
}