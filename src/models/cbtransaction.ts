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
import { CBTransactionDissection } from './cbtransaction-dissection';
// May contain unused imports in some cases
// @ts-ignore
import { CBTransactionLink } from './cbtransaction-link';

/**
 * 
 * @export
 * @interface CBTransaction
 */
export interface CBTransaction {
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'BankAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'Particulars'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'TransactionAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'StatementID'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'StatementLineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'PeriodReconciled'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'TransactionType'?: CBTransactionTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'OtherParty'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'SourceID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'TransactionAmountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'StatementReference'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'TransferAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'GainLoss'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'GstIncluded'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'GstIncludedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'PendingBalanceTotal'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'BaseCurrencyCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CBTransaction
     */
    'FixedRate'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CBTransaction
     */
    'Extern'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CBTransaction
     */
    'TransferredToGL'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'RegimeCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'SummaryID'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'RecNo'?: number;
    /**
     * 
     * @type {Array<CBTransactionDissection>}
     * @memberof CBTransaction
     */
    'Dissection'?: Array<CBTransactionDissection>;
    /**
     * 
     * @type {number}
     * @memberof CBTransaction
     */
    'SourceTransactionID'?: number;
    /**
     * 
     * @type {Array<CBTransactionLink>}
     * @memberof CBTransaction
     */
    'Link'?: Array<CBTransactionLink>;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransaction
     */
    '@odata.etag'?: string;
}

export const CBTransactionTransactionTypeEnum = {
    Withdrawal: 'Withdrawal',
    Deposit: 'Deposit',
    Transfer: 'Transfer'
} as const;

export type CBTransactionTransactionTypeEnum = typeof CBTransactionTransactionTypeEnum[keyof typeof CBTransactionTransactionTypeEnum];


