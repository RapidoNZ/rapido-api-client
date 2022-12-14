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
 * @interface INInvoiceLine
 */
export interface INInvoiceLine {
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'LineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'LineType'?: INInvoiceLineLineTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'Description'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'QuantitySupplied'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'Unit'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'SellingPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'DiscountPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'GstCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'SalesGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'AnalysisName'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'CommissionPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'CommissionAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'ExclusiveCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'CostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'ExclusiveAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'GstAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'MarginPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'CostPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'EnteredAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'BinLocation'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'EnteredDiscount'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'ExclusiveDiscount'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'DateSupplied'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'JCTransactionID'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'Weight'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'Volume'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'Narration'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'ExtendedWeight'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'ExtendedVolume'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'AlternateCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'PackingSlipNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'OrderID'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'OrderLineID'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'BarCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'Details'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'SellingPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'ExclusiveCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'ExclusiveAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'GstAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'CommissionAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'UsageCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'EnteredDiscountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'EnteredAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'ExclusiveDiscountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'UsageCost'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'CostCentreCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'ComponentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'JCTransactionType'?: INInvoiceLineJCTransactionTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'MarkupPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'InclusiveAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'InclusiveAmountBs'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof INInvoiceLine
     */
    'LineBreak'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof INInvoiceLine
     */
    'LineSpace'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'EffectiveSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLine
     */
    'EffectiveSellPriceBs'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof INInvoiceLine
     */
    'CompleteForWIP'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'StockGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'ICCategory1'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    'ICCategory2'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof INInvoiceLine
     */
    'JCActuals'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof INInvoiceLine
     */
    'HideUsages'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLine
     */
    '@odata.etag'?: string;
}

export const INInvoiceLineLineTypeEnum = {
    Product: 'Product',
    AutoKitset: 'Auto Kitset',
    ManualKitset: 'Manual Kitset',
    Component: 'Component',
    Usage: 'Usage',
    Narrative: 'Narrative'
} as const;

export type INInvoiceLineLineTypeEnum = typeof INInvoiceLineLineTypeEnum[keyof typeof INInvoiceLineLineTypeEnum];
export const INInvoiceLineJCTransactionTypeEnum = {
    Time: 'Time',
    Material: 'Material',
    Disbursement: 'Disbursement',
    Narrative: 'Narrative'
} as const;

export type INInvoiceLineJCTransactionTypeEnum = typeof INInvoiceLineJCTransactionTypeEnum[keyof typeof INInvoiceLineJCTransactionTypeEnum];


