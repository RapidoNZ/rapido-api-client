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
import { APTransactionDissection } from './aptransaction-dissection';
// May contain unused imports in some cases
// @ts-ignore
import { APTransactionLink } from './aptransaction-link';

/**
 * 
 * @export
 * @interface APTransaction
 */
export interface APTransaction {
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'TransactionType'?: APTransactionTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'DueDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'DiscountDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'TransactionAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'TransactionDiscount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'UnallocatedAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'UnallocatedAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'UnallocatedDiscount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'VariationRealisedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'VariationUnrealisedBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'GLAccountName'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'BillFromAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'PaymentMethod'?: APTransactionPaymentMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'PaymentReference'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'BankAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'SourceID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'ApprovalAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'ApprovalDiscount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'HoldAmount'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof APTransaction
     */
    'PaymentCreated'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'TransactionAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'NetAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'NetAmountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'OriginationDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'CBTransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'PaymentDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'PaymentPeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'GstIncluded'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'GstIncludedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'PendingBalanceTotal'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'TransactionDiscountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'BaseCurrencyCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof APTransaction
     */
    'FixedRate'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof APTransaction
     */
    'BankingExtern'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof APTransaction
     */
    'BankThrough'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'BankingRateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'BankingExchangeRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'BankCharges'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'BankingAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'BankingCurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'PendingBalanceTotalBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'PayeeName'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'VariationBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'AutoAllocate'?: APTransactionAutoAllocateEnum;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'PrintStatus'?: APTransactionPrintStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof APTransaction
     */
    'Extern'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof APTransaction
     */
    'TransferredToGL'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'RegimeCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'PeriodFullyAllocated'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'RecNo'?: number;
    /**
     * 
     * @type {Array<APTransactionDissection>}
     * @memberof APTransaction
     */
    'Dissection'?: Array<APTransactionDissection>;
    /**
     * 
     * @type {number}
     * @memberof APTransaction
     */
    'SourceTransactionID'?: number;
    /**
     * 
     * @type {Array<APTransactionLink>}
     * @memberof APTransaction
     */
    'Link'?: Array<APTransactionLink>;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransaction
     */
    '@odata.etag'?: string;
}

export const APTransactionTransactionTypeEnum = {
    Invoice: 'Invoice',
    Credit: 'Credit',
    Payment: 'Payment',
    Journal: 'Journal',
    CashPurchase: 'Cash Purchase'
} as const;

export type APTransactionTransactionTypeEnum = typeof APTransactionTransactionTypeEnum[keyof typeof APTransactionTransactionTypeEnum];
export const APTransactionPaymentMethodEnum = {
    ComputerPrintedCheque: 'Computer Printed Cheque',
    CreditCard: 'Credit Card',
    DirectDebit: 'Direct Debit',
    Electronic: 'Electronic',
    LetterOfCredit: 'Letter of Credit',
    Manual: 'Manual',
    Remittance: 'Remittance',
    TelegraphicTransfer: 'Telegraphic Transfer'
} as const;

export type APTransactionPaymentMethodEnum = typeof APTransactionPaymentMethodEnum[keyof typeof APTransactionPaymentMethodEnum];
export const APTransactionAutoAllocateEnum = {
    All: 'All',
    WholeBalances: 'Whole Balances',
    None: 'None'
} as const;

export type APTransactionAutoAllocateEnum = typeof APTransactionAutoAllocateEnum[keyof typeof APTransactionAutoAllocateEnum];
export const APTransactionPrintStatusEnum = {
    Empty: '',
    Unprinted: 'Unprinted',
    Printed: 'Printed'
} as const;

export type APTransactionPrintStatusEnum = typeof APTransactionPrintStatusEnum[keyof typeof APTransactionPrintStatusEnum];

