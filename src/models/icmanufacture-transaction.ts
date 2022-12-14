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
 * @interface ICManufactureTransaction
 */
export interface ICManufactureTransaction {
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'ParentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'TransactionType'?: ICManufactureTransactionTransactionTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ICManufactureTransaction
     */
    'NonDiminishing'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'TransactionQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'CostValueExclusive'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'UnitCostPrice'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'UOMCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'UOMTransactionQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'UOMMultiplier'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'SourceType'?: ICManufactureTransactionSourceTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'SourceID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'SourceLineID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'StockGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'PriceCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'SellPriceBasis'?: ICManufactureTransactionSellPriceBasisEnum;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'GstCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'UnitSellingPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'SalesValueExclusive'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'CostofSalesExclusive'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'TransferredValue'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ICManufactureTransaction
     */
    'TransferredToGL'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureTransaction
     */
    'PeriodNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'ReferenceAlpha'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    'OrderNoAlpha'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureTransaction
     */
    '@odata.etag'?: string;
}

export const ICManufactureTransactionTransactionTypeEnum = {
    Issue: 'Issue',
    Credit: 'Credit',
    Receipt: 'Receipt',
    Adjustment: 'Adjustment',
    Transfer: 'Transfer',
    Usage: 'Usage',
    Manufacture: 'Manufacture'
} as const;

export type ICManufactureTransactionTransactionTypeEnum = typeof ICManufactureTransactionTransactionTypeEnum[keyof typeof ICManufactureTransactionTransactionTypeEnum];
export const ICManufactureTransactionSourceTypeEnum = {
    Invoice: 'Invoice',
    Credit: 'Credit',
    Shipment: 'Shipment',
    Transfer: 'Transfer',
    Stocktake: 'Stocktake',
    Job: 'Job',
    Manufacture: 'Manufacture'
} as const;

export type ICManufactureTransactionSourceTypeEnum = typeof ICManufactureTransactionSourceTypeEnum[keyof typeof ICManufactureTransactionSourceTypeEnum];
export const ICManufactureTransactionSellPriceBasisEnum = {
    Inclusive: 'Inclusive',
    Exclusive: 'Exclusive'
} as const;

export type ICManufactureTransactionSellPriceBasisEnum = typeof ICManufactureTransactionSellPriceBasisEnum[keyof typeof ICManufactureTransactionSellPriceBasisEnum];


