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
 * @interface TABLEOELINE
 */
export interface TABLEOELINE {
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'LineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'DocumentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'GstCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'Narration'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'LineType'?: TABLEOELINELineTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'CommissionPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'DiscountPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'DateSupplied'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'Weight'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'Volume'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'SalesGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'UOMCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UOMMultiplier'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'Unit'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEOELINE
     */
    'LineBreak'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEOELINE
     */
    'LineSpace'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'Description'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOELINE
     */
    'Custom2'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UOMQuantityOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'QuantityOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'QuantityInvoiced'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExtendedWeight'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExtendedVolume'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UOMQuantitySupplied'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'QuantitySupplied'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UOMQuantityBackordered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'QuantityBackOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'LineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'CommissionAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'CommissionAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'GstAmountOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'GstAmountOrderedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'GstAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'GstAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UOMSellingPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UOMSellingPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'SellingPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'SellingPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExclusiveAmountOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExclusiveAmountOrderedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExclusiveAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExclusiveAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UOMCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UOMCostPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'CostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'CostPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExclusiveCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExclusiveCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UsageCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UsageCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExclusiveCostOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'ExclusiveCostOrderedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UsageCostOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'UsageCostOrderedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'MarginPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'MarginPercentageOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'MarkupPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'InclusiveAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOELINE
     */
    'InclusiveAmountBs'?: number;
}

export const TABLEOELINELineTypeEnum = {
    Product: 'Product',
    AutoKitset: 'Auto Kitset',
    ManualKitset: 'Manual Kitset',
    Component: 'Component',
    Usage: 'Usage',
    Narrative: 'Narrative',
    StickyNarrative: 'Sticky Narrative'
} as const;

export type TABLEOELINELineTypeEnum = typeof TABLEOELINELineTypeEnum[keyof typeof TABLEOELINELineTypeEnum];


