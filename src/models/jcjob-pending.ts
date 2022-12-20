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
 * @interface JCJobPending
 */
export interface JCJobPending {
    /**
     * 
     * @type {number}
     * @memberof JCJobPending
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobPending
     */
    'SourceDocumentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'DocumentClass'?: JCJobPendingDocumentClassEnum;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'DocumentDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobPending
     */
    'ExtendedCost'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'DocumentNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobPending
     */
    'ExtendedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobPending
     */
    'ExtendedSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobPending
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'PeriodName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'SellCurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'Details'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    'CreditorName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobPending
     */
    '@odata.etag'?: string;
}

export const JCJobPendingDocumentClassEnum = {
    Order: 'Order',
    Quotation: 'Quotation',
    ReceiptOnly: 'Receipt Only',
    Shipment: 'Shipment',
    Timesheet: 'Timesheet',
    Batch: 'Batch',
    Disbursement: 'Disbursement',
    Invoice: 'Invoice'
} as const;

export type JCJobPendingDocumentClassEnum = typeof JCJobPendingDocumentClassEnum[keyof typeof JCJobPendingDocumentClassEnum];


