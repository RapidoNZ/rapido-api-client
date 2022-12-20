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
 * @interface TABLEINHEAD
 */
export interface TABLEINHEAD {
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'DocumentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'SourceID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'SourceOrderID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ARTransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DocumentClass'?: TABLEINHEADDocumentClassEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'RegimeCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'GstOverride'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'RateType'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DefaultLocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'SalesAreaCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'SalesPersonCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'SellPriceBasis'?: TABLEINHEADSellPriceBasisEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'DiscountScheduleCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'PriceCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEINHEAD
     */
    'FixedRate'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Charge1GstCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Charge2GstCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Charge3GstCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DefaultJobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryAddressCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ContactID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'QuotationReference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Custom2'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEINHEAD
     */
    'ContactEmail'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryAddress1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryAddress2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryAddress3'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryAddress4'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryAddress5'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryCountryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryPostCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DefaultJCTransactionType'?: TABLEINHEADDefaultJCTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DefaultComponentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DefaultCostCentreCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DocumentDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'OriginationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DeliveryDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'InternalReference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'TotalWeight'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'TotalVolume'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge3GstAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge3GstAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge3Amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge3AmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge2GstAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge2GstAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge2Amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge2AmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge1GstAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge1GstAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge1Amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'Charge1AmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'JobAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'JobAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'JobCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'JobCostBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'CommissionAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'CommissionAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'GstAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'GstAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'RoundingAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'RoundingAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ExclusiveAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ExclusiveAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'UsageCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'UsageCostBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ExclusiveCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ExclusiveCostBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'PackingSlipNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DocumentNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DocumentType'?: TABLEINHEADDocumentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'PrintStatus'?: TABLEINHEADPrintStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'PostStatus'?: TABLEINHEADPostStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'Z_Rapido'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'PeriodNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'OrderNoAlpha'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'PackingSlipNoAlpha'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEINHEAD
     */
    'DocumentNoAlpha'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ChargesAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'GrossAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'ChargesAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'GrossAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'MarginPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'MarginPercentageBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'InclusiveCharge1Amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'InclusiveCharge2Amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'InclusiveCharge3Amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'InclusiveCharge1AmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'InclusiveCharge2AmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEINHEAD
     */
    'InclusiveCharge3AmountBs'?: number;
}

export const TABLEINHEADDocumentClassEnum = {
    Invoice: 'Invoice',
    Credit: 'Credit',
    Quote: 'Quote',
    StandingInvoice: 'Standing Invoice'
} as const;

export type TABLEINHEADDocumentClassEnum = typeof TABLEINHEADDocumentClassEnum[keyof typeof TABLEINHEADDocumentClassEnum];
export const TABLEINHEADSellPriceBasisEnum = {
    Inclusive: 'Inclusive',
    Exclusive: 'Exclusive'
} as const;

export type TABLEINHEADSellPriceBasisEnum = typeof TABLEINHEADSellPriceBasisEnum[keyof typeof TABLEINHEADSellPriceBasisEnum];
export const TABLEINHEADDefaultJCTransactionTypeEnum = {
    Time: 'Time',
    Material: 'Material',
    Disbursement: 'Disbursement',
    Narrative: 'Narrative'
} as const;

export type TABLEINHEADDefaultJCTransactionTypeEnum = typeof TABLEINHEADDefaultJCTransactionTypeEnum[keyof typeof TABLEINHEADDefaultJCTransactionTypeEnum];
export const TABLEINHEADDocumentTypeEnum = {
    Normal: 'Normal',
    Historic: 'Historic'
} as const;

export type TABLEINHEADDocumentTypeEnum = typeof TABLEINHEADDocumentTypeEnum[keyof typeof TABLEINHEADDocumentTypeEnum];
export const TABLEINHEADPrintStatusEnum = {
    Unprinted: 'Unprinted',
    Printed: 'Printed',
    Manual: 'Manual',
    PackingSlip: 'Packing Slip'
} as const;

export type TABLEINHEADPrintStatusEnum = typeof TABLEINHEADPrintStatusEnum[keyof typeof TABLEINHEADPrintStatusEnum];
export const TABLEINHEADPostStatusEnum = {
    Unposted: 'Unposted',
    Open: 'Open',
    Posted: 'Posted',
    Deleted: 'Deleted'
} as const;

export type TABLEINHEADPostStatusEnum = typeof TABLEINHEADPostStatusEnum[keyof typeof TABLEINHEADPostStatusEnum];

