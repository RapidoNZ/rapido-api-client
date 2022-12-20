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
import { CBTransferDissection } from './cbtransfer-dissection';
// May contain unused imports in some cases
// @ts-ignore
import { CBTransferLink } from './cbtransfer-link';

/**
 * 
 * @export
 * @interface CBTransfer
 */
export interface CBTransfer {
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'BankAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'Particulars'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'TransactionType'?: CBTransferTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'SourceID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'GstIncluded'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'GstIncludedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'PendingBalanceTotal'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'GainLoss'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'TransactionAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'TransactionAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'TransferId'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'TransferCurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'TransferAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'TransferRateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'TransferExchangeRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'TransferAmountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'TransferStatementReference'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'StatementReference'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'StatementLineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'StatementID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'SummaryID'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'TransferStatementID'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CBTransfer
     */
    'TransferExtern'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CBTransfer
     */
    'Extern'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'PeriodReconciled'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'TransferAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'TransferOtherParty'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'BaseCurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'OtherParty'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CBTransfer
     */
    'TransferredToGL'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CBTransfer
     */
    'FixedRate'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'RegimeCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'RecNo'?: number;
    /**
     * 
     * @type {Array<CBTransferDissection>}
     * @memberof CBTransfer
     */
    'Dissection'?: Array<CBTransferDissection>;
    /**
     * 
     * @type {number}
     * @memberof CBTransfer
     */
    'SourceTransactionID'?: number;
    /**
     * 
     * @type {Array<CBTransferLink>}
     * @memberof CBTransfer
     */
    'Link'?: Array<CBTransferLink>;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBTransfer
     */
    '@odata.etag'?: string;
}

export const CBTransferTransactionTypeEnum = {
    Withdrawal: 'Withdrawal',
    Deposit: 'Deposit',
    Transfer: 'Transfer'
} as const;

export type CBTransferTransactionTypeEnum = typeof CBTransferTransactionTypeEnum[keyof typeof CBTransferTransactionTypeEnum];

