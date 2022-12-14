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
import { CBBankingSummaryBanked } from './cbbanking-summary-banked';
// May contain unused imports in some cases
// @ts-ignore
import { CBBankingSummaryUnbanked } from './cbbanking-summary-unbanked';

/**
 * 
 * @export
 * @interface CBBankingSummary
 */
export interface CBBankingSummary {
    /**
     * 
     * @type {Array<CBBankingSummaryUnbanked>}
     * @memberof CBBankingSummary
     */
    'Unbanked'?: Array<CBBankingSummaryUnbanked>;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'SummaryID'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'SummaryType'?: CBBankingSummarySummaryTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'TransactionType'?: CBBankingSummaryTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'SummaryInfoType'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CBBankingSummary
     */
    'Consolidate'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'Status'?: CBBankingSummaryStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'BankAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'BankingCurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'SourceID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'Particulars'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'OtherParty'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'BankingDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'MediaCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'BankingAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'AbsBankingAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'BankingAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'AbsBankingAmountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'TransactionCurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'TransactionAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'TransactionExchangeRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'TransactionAmountExclCharges'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'BankCharges'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'BankChargesBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'TransactionAmountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'ExportFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'DefinitionFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'HashTotal'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    'RegimeCode'?: string;
    /**
     * 
     * @type {Array<CBBankingSummaryBanked>}
     * @memberof CBBankingSummary
     */
    'Banked'?: Array<CBBankingSummaryBanked>;
    /**
     * 
     * @type {number}
     * @memberof CBBankingSummary
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingSummary
     */
    '@odata.etag'?: string;
}

export const CBBankingSummarySummaryTypeEnum = {
    BankDeposits: 'Bank Deposits',
    ElectronicPayments: 'Electronic Payments',
    Payments: 'Payments',
    DirectDebits: 'Direct Debits'
} as const;

export type CBBankingSummarySummaryTypeEnum = typeof CBBankingSummarySummaryTypeEnum[keyof typeof CBBankingSummarySummaryTypeEnum];
export const CBBankingSummaryTransactionTypeEnum = {
    Withdrawal: 'Withdrawal',
    Deposit: 'Deposit',
    Transfer: 'Transfer'
} as const;

export type CBBankingSummaryTransactionTypeEnum = typeof CBBankingSummaryTransactionTypeEnum[keyof typeof CBBankingSummaryTransactionTypeEnum];
export const CBBankingSummaryStatusEnum = {
    Banked: 'Banked',
    Unbanked: 'Unbanked',
    Deleted: 'Deleted',
    Exported: 'Exported'
} as const;

export type CBBankingSummaryStatusEnum = typeof CBBankingSummaryStatusEnum[keyof typeof CBBankingSummaryStatusEnum];


