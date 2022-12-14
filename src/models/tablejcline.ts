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
 * @interface TABLEJCLINE
 */
export interface TABLEJCLINE {
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'LineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'BatchID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'TransactionType'?: TABLEJCLINETransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'Narration'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'UOMCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'UOMMultiplier'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'Description'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEJCLINE
     */
    'LineBreak'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEJCLINE
     */
    'LineSpace'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'SellCurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'SalesGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'Unit'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEJCLINE
     */
    'FullyInvoiced'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEJCLINE
     */
    'CompleteForWIP'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'CostCentreCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'ComponentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'UOMTransactionQuantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCLINE
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'TransactionQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'DiscountPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'UOMUnitSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'UnitSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'UOMUnitSellPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'UnitSellPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'ExtendedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'ExtendedSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'UOMUnitCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'UnitCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'ExtendedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'LineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'MarginPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCLINE
     */
    'MarkupPercentage'?: number;
}

export const TABLEJCLINETransactionTypeEnum = {
    Time: 'Time',
    Material: 'Material',
    Disbursement: 'Disbursement',
    Narrative: 'Narrative'
} as const;

export type TABLEJCLINETransactionTypeEnum = typeof TABLEJCLINETransactionTypeEnum[keyof typeof TABLEJCLINETransactionTypeEnum];


