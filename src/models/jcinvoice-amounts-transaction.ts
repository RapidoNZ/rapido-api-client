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
 * @interface JCInvoiceAmountsTransaction
 */
export interface JCInvoiceAmountsTransaction {
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'TransactionType'?: JCInvoiceAmountsTransactionTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'Description'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ApprovalInvoiceQuantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'Unit'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ApprovalInvoiceSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ApprovalInvoiceDiscountPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ApprovalInvoiceSellPriceBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'SalesGroupCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ApprovalInvoiceSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ApprovalInvoiceSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ApprovalInvoiceCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ApprovalInvoiceCost'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JCInvoiceAmountsTransaction
     */
    'FullyInvoiced'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JCInvoiceAmountsTransaction
     */
    'CompleteForWIP'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'PeriodCompleteForWIP'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'LineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'MarkupPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'CostCentreCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ComponentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'TransactionQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'InvoicedQuantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'InvoicedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'InvoicedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'InvoicedSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'UnitCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'UnitSellPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'UnitSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ExtendedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ExtendedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ExtendedSellBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'Narration'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'PendingInvoicedQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'PendingInvoicedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'PendingInvoicedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'PendingInvoicedSellBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'SellCurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JCInvoiceAmountsTransaction
     */
    'LineBreak'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'DiscountPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'JobCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'SourceID'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'SourceLineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'BatchID'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JCInvoiceAmountsTransaction
     */
    'LineSpace'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'TransferredToGL'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCInvoiceAmountsTransaction
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCInvoiceAmountsTransaction
     */
    '@odata.etag'?: string;
}

export const JCInvoiceAmountsTransactionTransactionTypeEnum = {
    Time: 'Time',
    Material: 'Material',
    Disbursement: 'Disbursement',
    Narrative: 'Narrative'
} as const;

export type JCInvoiceAmountsTransactionTransactionTypeEnum = typeof JCInvoiceAmountsTransactionTransactionTypeEnum[keyof typeof JCInvoiceAmountsTransactionTransactionTypeEnum];


