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
 * @interface APShipmentsLine
 */
export interface APShipmentsLine {
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'LineType'?: APShipmentsLineLineTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'Description'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'Quantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'Unit'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'CostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'DiscountPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'GstCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'GstAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'InclusiveAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'ExpenseCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'AdditionalCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ReceiptCostPriceBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'AnalysisName'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'SellPrice'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'InvoiceStatus'?: APShipmentsLineInvoiceStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'ReceiptStatus'?: APShipmentsLineReceiptStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'AlternateCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedAdditionalCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedReceiptCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedVolume'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedWeight'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'GstAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ICTransactionID'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'JCTransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'LineID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'LineNo'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof APShipmentsLine
     */
    'ManuallyApportion'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'Narration'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'OrderID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'OrderLineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'SellPriceBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'SellCurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'SellRateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'SellExchangeRate'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'VendorsCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'BarCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'ComponentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'Weight'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'CostCentreCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'Volume'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'InclusiveAmountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'Details'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'JCTransactionType'?: APShipmentsLineJCTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'BinLocation'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'Duty'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'MarkupPercentage'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof APShipmentsLine
     */
    'LineBreak'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof APShipmentsLine
     */
    'LineSpace'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof APShipmentsLine
     */
    'NonDiminishing'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof APShipmentsLine
     */
    'CompleteForWIP'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'QuantityOrdered'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'QuantityReceipted'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'QuantityInvoiced'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'QuantityOutstandingReceipt'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'QuantityOutstandingInvoice'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'QuantityShipped'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'QuantityPendingInvoice'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'SellDiscountPercentage'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof APShipmentsLine
     */
    'JCFullyInvoiced'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'EffectiveCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'EffectiveCostPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedDiscount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'ExtendedDiscountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'InclusiveDiscount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsLine
     */
    'InclusiveDiscountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsLine
     */
    '@odata.etag'?: string;
}

export const APShipmentsLineLineTypeEnum = {
    Product: 'Product',
    Narrative: 'Narrative'
} as const;

export type APShipmentsLineLineTypeEnum = typeof APShipmentsLineLineTypeEnum[keyof typeof APShipmentsLineLineTypeEnum];
export const APShipmentsLineInvoiceStatusEnum = {
    Unposted: 'Unposted',
    Posted: 'Posted',
    NotApplicable: 'Not Applicable',
    Deleted: 'Deleted'
} as const;

export type APShipmentsLineInvoiceStatusEnum = typeof APShipmentsLineInvoiceStatusEnum[keyof typeof APShipmentsLineInvoiceStatusEnum];
export const APShipmentsLineReceiptStatusEnum = {
    Unposted: 'Unposted',
    Posted: 'Posted',
    NotApplicable: 'Not Applicable',
    Deleted: 'Deleted'
} as const;

export type APShipmentsLineReceiptStatusEnum = typeof APShipmentsLineReceiptStatusEnum[keyof typeof APShipmentsLineReceiptStatusEnum];
export const APShipmentsLineJCTransactionTypeEnum = {
    Time: 'Time',
    Material: 'Material',
    Disbursement: 'Disbursement',
    Narrative: 'Narrative'
} as const;

export type APShipmentsLineJCTransactionTypeEnum = typeof APShipmentsLineJCTransactionTypeEnum[keyof typeof APShipmentsLineJCTransactionTypeEnum];


