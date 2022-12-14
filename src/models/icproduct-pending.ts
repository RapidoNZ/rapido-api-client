/* tslint:disable */
/* eslint-disable */
/**
 * Accredo Web Service
 * Accredo Web Service
 *
 * The version of the OpenAPI document: 5.0.11.125
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ICProductPending
 */
export interface ICProductPending {
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'QuantityIn'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'QuantityOut'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'BalanceQuantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'Class'?: ICProductPendingClassEnum;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'DocumentDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'DocumentPartyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'DocumentClass'?: ICProductPendingDocumentClassEnum;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'PeriodName'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'SourceDocumentID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'SourceLineID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'DocumentNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'EffectiveDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'OriginationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'DocumentPartyName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductPending
     */
    'Contra'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'SortOrder'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'PackingSlipNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'QuotationReference'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'PrintStatus'?: ICProductPendingPrintStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'PostStatus'?: ICProductPendingPostStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'UOMCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'UOMQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductPending
     */
    'UOMMultiplier'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    'LineComment'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductPending
     */
    '@odata.etag'?: string;
}

export const ICProductPendingClassEnum = {
    Allocation: 'Allocation',
    BackOrder: 'Back Order',
    Order: 'Order',
    TransferIn: 'Transfer In',
    TransferOut: 'Transfer Out',
    Shipped: 'Shipped',
    Commitment: 'Commitment',
    InProduction: 'In Production',
    Returned: 'Returned',
    Variation: 'Variation'
} as const;

export type ICProductPendingClassEnum = typeof ICProductPendingClassEnum[keyof typeof ICProductPendingClassEnum];
export const ICProductPendingDocumentClassEnum = {
    Invoice: 'Invoice',
    Credit: 'Credit',
    Order: 'Order',
    Quote: 'Quote',
    JobBatch: 'Job Batch',
    TimeSheet: 'Time Sheet',
    Receipt: 'Receipt',
    Transfer: 'Transfer',
    Stocktake: 'Stocktake',
    Manufacture: 'Manufacture',
    Adjustment: 'Adjustment'
} as const;

export type ICProductPendingDocumentClassEnum = typeof ICProductPendingDocumentClassEnum[keyof typeof ICProductPendingDocumentClassEnum];
export const ICProductPendingPrintStatusEnum = {
    Unprinted: 'Unprinted',
    Printed: 'Printed',
    Manual: 'Manual',
    PackingSlip: 'Packing Slip'
} as const;

export type ICProductPendingPrintStatusEnum = typeof ICProductPendingPrintStatusEnum[keyof typeof ICProductPendingPrintStatusEnum];
export const ICProductPendingPostStatusEnum = {
    Unposted: 'Unposted',
    Open: 'Open',
    Posted: 'Posted',
    Deleted: 'Deleted',
    Counted: 'Counted'
} as const;

export type ICProductPendingPostStatusEnum = typeof ICProductPendingPostStatusEnum[keyof typeof ICProductPendingPostStatusEnum];


