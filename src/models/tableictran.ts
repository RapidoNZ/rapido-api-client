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
 * @interface TABLEICTRAN
 */
export interface TABLEICTRAN {
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'SourceType'?: TABLEICTRANSourceTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'SourceID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'SourceLineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'ParentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'TransactionType'?: TABLEICTRANTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'StockGroupCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEICTRAN
     */
    'NonDiminishing'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'PriceCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'SellPriceBasis'?: TABLEICTRANSellPriceBasisEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'GstCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'UOMCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'UOMMultiplier'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'UOMTransactionQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'TransactionQuantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'UnitSellingPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'SalesValueExclusive'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'CostofSalesExclusive'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'UnitCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'CostValueExclusive'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'TransferredValue'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEICTRAN
     */
    'TransferredToGL'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICTRAN
     */
    'PeriodNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'ReferenceAlpha'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEICTRAN
     */
    'OrderNoAlpha'?: string;
}

export const TABLEICTRANSourceTypeEnum = {
    Invoice: 'Invoice',
    Credit: 'Credit',
    Shipment: 'Shipment',
    Transfer: 'Transfer',
    Stocktake: 'Stocktake',
    Job: 'Job',
    Manufacture: 'Manufacture'
} as const;

export type TABLEICTRANSourceTypeEnum = typeof TABLEICTRANSourceTypeEnum[keyof typeof TABLEICTRANSourceTypeEnum];
export const TABLEICTRANTransactionTypeEnum = {
    Issue: 'Issue',
    Credit: 'Credit',
    Receipt: 'Receipt',
    Adjustment: 'Adjustment',
    Transfer: 'Transfer',
    Usage: 'Usage',
    Manufacture: 'Manufacture'
} as const;

export type TABLEICTRANTransactionTypeEnum = typeof TABLEICTRANTransactionTypeEnum[keyof typeof TABLEICTRANTransactionTypeEnum];
export const TABLEICTRANSellPriceBasisEnum = {
    Inclusive: 'Inclusive',
    Exclusive: 'Exclusive'
} as const;

export type TABLEICTRANSellPriceBasisEnum = typeof TABLEICTRANSellPriceBasisEnum[keyof typeof TABLEICTRANSellPriceBasisEnum];


