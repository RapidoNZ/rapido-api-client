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


// May contain unused imports in some cases
// @ts-ignore
import { JCTransactionLink } from './jctransaction-link';

/**
 * 
 * @export
 * @interface JCTransaction
 */
export interface JCTransaction {
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'TransactionType'?: JCTransactionTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'Reference'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'SourceID'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'CostCentreCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'ComponentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'TransactionQuantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'Unit'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UnitCostPrice'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'MarkupPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UnitSellPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UnitSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ExtendedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ExtendedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ExtendedSellBs'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JCTransaction
     */
    'CompleteForWIP'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'PeriodCompleteForWIP'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'TransferredToGL'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'SalesGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'Description'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceMarkupPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceSellPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceSellBs'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JCTransaction
     */
    'FullyInvoiced'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'SourceLineID'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'Narration'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'Custom2'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'PendingInvoicedQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'PendingInvoicedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'PendingInvoicedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'PendingInvoicedSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'InvoicedQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'InvoicedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'InvoicedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'InvoicedSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'BatchID'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'SellCurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMUnitCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMUnitSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMUnitSellPriceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMTransactionQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMApprovalInvoiceQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMPendingInvoicedQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMInvoicedQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMApprovalInvoiceCostPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMApprovalInvoiceSellPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMApprovalInvoiceSellPriceBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'UOMCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'UOMMultiplier'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'ApprovalInvoiceDiscountPercentage'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'DiscountPercentage'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'BaseUOMCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JCTransaction
     */
    'ManuallyCosted'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JCTransaction
     */
    'LineBreak'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JCTransaction
     */
    'LineSpace'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCTransaction
     */
    'SourceTransactionID'?: number;
    /**
     * 
     * @type {Array<JCTransactionLink>}
     * @memberof JCTransaction
     */
    'Link'?: Array<JCTransactionLink>;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JCTransaction
     */
    'SpecialPricingActive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JCTransaction
     */
    '@odata.etag'?: string;
}

export const JCTransactionTransactionTypeEnum = {
    Time: 'Time',
    Material: 'Material',
    Disbursement: 'Disbursement',
    Narrative: 'Narrative'
} as const;

export type JCTransactionTransactionTypeEnum = typeof JCTransactionTransactionTypeEnum[keyof typeof JCTransactionTransactionTypeEnum];


