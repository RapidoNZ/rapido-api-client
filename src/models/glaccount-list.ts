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
 * @interface GLAccountList
 */
export interface GLAccountList {
    /**
     * 
     * @type {number}
     * @memberof GLAccountList
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'AccountName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'FriendlyAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'ExternalAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'AccountType'?: GLAccountListAccountTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'AccountClass'?: GLAccountListAccountClassEnum;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'AddToAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'PostToAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'OpeningAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'ConsolidateAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GLAccountList
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'PercentageAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'AlternateAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'ForTotalAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'HeadingStyle'?: GLAccountListHeadingStyleEnum;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'TotalStyle'?: GLAccountListTotalStyleEnum;
    /**
     * 
     * @type {boolean}
     * @memberof GLAccountList
     */
    'StartNewPage'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GLAccountList
     */
    'LineSpaceBefore'?: number;
    /**
     * 
     * @type {number}
     * @memberof GLAccountList
     */
    'LineSpaceAfter'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GLAccountList
     */
    'Restricted'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'AnalysisCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GLAccountList
     */
    'ReplicateAR'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GLAccountList
     */
    'ReplicateAP'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GLAccountList
     */
    'ReplicateCB'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'GSTCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof GLAccountList
     */
    'LastHistoryPeriod'?: number;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'CashFlowType'?: GLAccountListCashFlowTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'CashFlowDirection'?: GLAccountListCashFlowDirectionEnum;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    'AIMCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof GLAccountList
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof GLAccountList
     */
    '@odata.etag'?: string;
}

export const GLAccountListAccountTypeEnum = {
    Standard: 'Standard',
    NonPosting: 'Non Posting',
    Total: 'Total',
    Heading: 'Heading'
} as const;

export type GLAccountListAccountTypeEnum = typeof GLAccountListAccountTypeEnum[keyof typeof GLAccountListAccountTypeEnum];
export const GLAccountListAccountClassEnum = {
    Asset: 'Asset',
    Capital: 'Capital',
    Expense: 'Expense',
    Income: 'Income',
    Liability: 'Liability'
} as const;

export type GLAccountListAccountClassEnum = typeof GLAccountListAccountClassEnum[keyof typeof GLAccountListAccountClassEnum];
export const GLAccountListHeadingStyleEnum = {
    _1: 'Heading 1',
    _2: 'Heading 2',
    _3: 'Heading 3',
    _0: 'Heading 0'
} as const;

export type GLAccountListHeadingStyleEnum = typeof GLAccountListHeadingStyleEnum[keyof typeof GLAccountListHeadingStyleEnum];
export const GLAccountListTotalStyleEnum = {
    Total0: 'Total 0',
    Total1: 'Total 1',
    Total2: 'Total 2',
    Total3: 'Total 3',
    Total4: 'Total 4',
    Total: 'Total @',
    NonPrinting: 'Non printing'
} as const;

export type GLAccountListTotalStyleEnum = typeof GLAccountListTotalStyleEnum[keyof typeof GLAccountListTotalStyleEnum];
export const GLAccountListCashFlowTypeEnum = {
    Operating: 'Operating',
    Investing: 'Investing',
    Financing: 'Financing',
    NonCash: 'Non-Cash',
    NonOperating: 'Non-Operating'
} as const;

export type GLAccountListCashFlowTypeEnum = typeof GLAccountListCashFlowTypeEnum[keyof typeof GLAccountListCashFlowTypeEnum];
export const GLAccountListCashFlowDirectionEnum = {
    Inwards: 'Inwards',
    Outwards: 'Outwards'
} as const;

export type GLAccountListCashFlowDirectionEnum = typeof GLAccountListCashFlowDirectionEnum[keyof typeof GLAccountListCashFlowDirectionEnum];


