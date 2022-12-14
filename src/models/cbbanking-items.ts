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
import { CBBankingItemsDissection } from './cbbanking-items-dissection';

/**
 * 
 * @export
 * @interface CBBankingItems
 */
export interface CBBankingItems {
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'ItemID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'ItemType'?: CBBankingItemsItemTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'ItemDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'BankingAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'MediaCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'OtherParty'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'Particulars'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'BankAccountNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'BankingAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'GLLastTransferredBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'GainLoss'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'Status'?: CBBankingItemsStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'SourceID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'GstIncluded'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'GstIncludedBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'PendingBalanceTotal'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'BaseCurrencyCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CBBankingItems
     */
    'Extern'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CBBankingItems
     */
    'TransferredToGL'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'RegimeCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'SummaryID'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'LineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'RecNo'?: number;
    /**
     * 
     * @type {Array<CBBankingItemsDissection>}
     * @memberof CBBankingItems
     */
    'Dissection'?: Array<CBBankingItemsDissection>;
    /**
     * 
     * @type {number}
     * @memberof CBBankingItems
     */
    'SourceTransactionID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBBankingItems
     */
    '@odata.etag'?: string;
}

export const CBBankingItemsItemTypeEnum = {
    Withdrawal: 'Withdrawal',
    Deposit: 'Deposit',
    Transfer: 'Transfer'
} as const;

export type CBBankingItemsItemTypeEnum = typeof CBBankingItemsItemTypeEnum[keyof typeof CBBankingItemsItemTypeEnum];
export const CBBankingItemsStatusEnum = {
    Banked: 'Banked',
    Unbanked: 'Unbanked',
    Deleted: 'Deleted',
    Exported: 'Exported'
} as const;

export type CBBankingItemsStatusEnum = typeof CBBankingItemsStatusEnum[keyof typeof CBBankingItemsStatusEnum];


