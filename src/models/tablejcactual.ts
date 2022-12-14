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
 * @interface TABLEJCACTUAL
 */
export interface TABLEJCACTUAL {
    /**
     * 
     * @type {number}
     * @memberof TABLEJCACTUAL
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCACTUAL
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCACTUAL
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCACTUAL
     */
    'SourceDocumentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCACTUAL
     */
    'DocumentClass'?: TABLEJCACTUALDocumentClassEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCACTUAL
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCACTUAL
     */
    'SellCurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCACTUAL
     */
    'ExtendedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCACTUAL
     */
    'ExtendedSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCACTUAL
     */
    'ExtendedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCACTUAL
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCACTUAL
     */
    'PeriodNo'?: number;
}

export const TABLEJCACTUALDocumentClassEnum = {
    Order: 'Order',
    Quotation: 'Quotation',
    ReceiptOnly: 'Receipt Only',
    Shipment: 'Shipment',
    Timesheet: 'Timesheet',
    Batch: 'Batch',
    Disbursement: 'Disbursement',
    Invoice: 'Invoice'
} as const;

export type TABLEJCACTUALDocumentClassEnum = typeof TABLEJCACTUALDocumentClassEnum[keyof typeof TABLEJCACTUALDocumentClassEnum];


