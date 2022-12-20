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
 * @interface OEOrderLine
 */
export interface OEOrderLine {
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'LineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'LineType'?: OEOrderLineLineTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'Description'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'QuantityOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'QuantitySupplied'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'QuantityBackOrdered'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'Unit'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'SellingPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'DiscountPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'GstCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'SalesGroupCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'EnteredAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'AlternateCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'GstAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'MarginPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'MarginPercentageOrdered'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExtendedWeight'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExtendedVolume'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'CommissionPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExclusiveCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExclusiveAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'QuantityInvoiced'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'CommissionAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'Weight'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'Narration'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'AnalysisName'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'BinLocation'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'Details'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'Volume'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'CostPrice'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'BarCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'CostPriceBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'DateSupplied'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExclusiveCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExclusiveAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'GstAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'CommissionAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'UsageCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'EnteredAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'EnteredAmountOrderedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'GSTAmountOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExclusiveAmountOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'UsageCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'MarkupPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExclusiveCostOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'EnteredAmountOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExclusiveCostOrderedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'UsageCostOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'ExclusiveAmountOrderedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'SellingPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'UsageCostOrderedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'GstAmountOrderedBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'InclusiveAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'InclusiveAmountBs'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OEOrderLine
     */
    'LineBreak'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OEOrderLine
     */
    'LineSpace'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'EffectiveSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEOrderLine
     */
    'EffectiveSellPriceBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'StockGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'ICCategory1'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    'ICCategory2'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OEOrderLine
     */
    'HideUsages'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OEOrderLine
     */
    '@odata.etag'?: string;
}

export const OEOrderLineLineTypeEnum = {
    Product: 'Product',
    AutoKitset: 'Auto Kitset',
    ManualKitset: 'Manual Kitset',
    Component: 'Component',
    Usage: 'Usage',
    Narrative: 'Narrative',
    StickyNarrative: 'Sticky Narrative'
} as const;

export type OEOrderLineLineTypeEnum = typeof OEOrderLineLineTypeEnum[keyof typeof OEOrderLineLineTypeEnum];


