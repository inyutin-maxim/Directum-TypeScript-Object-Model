/**
 * Объект IEdocumentInfo предназначен для получения информации о документе.
 *
 * todo описать интерфейс
 */
export interface IEDocumentInfo {
    /**
     *
     */
    readonly CardType: string;
    /**
     *
     */
    readonly Document: string;
    /**
     *
     */
    readonly DelegateAccessRightsEnabled: string;
    /**
     *
     */
    readonly Editor: string;
    /**
     *
     */
    readonly EDocKind: string;
    /**
     *
     */
    readonly EncodeType: string;
    /**
     *
     */
    readonly Exporter: string;
    /**
     *
     */
    readonly HasBoundDocuments: string;
    /**
     *
     */
    readonly LifeCycleStage: string;
    /**
     *
     */
    readonly SignatureType: string;
    /**
     *
     */
    readonly Signed: string;
    /**
     *
     */
    readonly Storage: string;
    /**
     *
     */
    readonly TextModified: string;
}