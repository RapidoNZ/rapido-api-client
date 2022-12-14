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
 * @interface TABLEJCINV
 */
export interface TABLEJCINV {
    /**
     * 
     * @type {number}
     * @memberof TABLEJCINV
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCINV
     */
    'JobCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCINV
     */
    'SourceDocumentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCINV
     */
    'DocumentClass'?: TABLEJCINVDocumentClassEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCINV
     */
    'SellCurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCINV
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCINV
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCINV
     */
    'ExtendedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCINV
     */
    'ExtendedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCINV
     */
    'ExtendedSellBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCINV
     */
    'PostStatus'?: TABLEJCINVPostStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCINV
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCINV
     */
    'PeriodNo'?: number;
}

export const TABLEJCINVDocumentClassEnum = {
    Invoice: 'Invoice',
    Credit: 'Credit',
    Quote: 'Quote',
    StandingInvoice: 'Standing Invoice'
} as const;

export type TABLEJCINVDocumentClassEnum = typeof TABLEJCINVDocumentClassEnum[keyof typeof TABLEJCINVDocumentClassEnum];
export const TABLEJCINVPostStatusEnum = {
    Unposted: 'Unposted',
    Open: 'Open',
    Posted: 'Posted',
    Deleted: 'Deleted'
} as const;

export type TABLEJCINVPostStatusEnum = typeof TABLEJCINVPostStatusEnum[keyof typeof TABLEJCINVPostStatusEnum];


