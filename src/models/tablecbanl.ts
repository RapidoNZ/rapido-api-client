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
 * @interface TABLECBANL
 */
export interface TABLECBANL {
    /**
     * 
     * @type {number}
     * @memberof TABLECBANL
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'AnalysisCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'AnalysisName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'AnalysisFilter'?: TABLECBANLAnalysisFilterEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'AccountClass'?: TABLECBANLAccountClassEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TABLECBANL
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'GstCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLECBANL
     */
    'HasRegimeOverrides'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'FriendlyAccountCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLECBANL
     */
    'JCDisbursement'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLECBANL
     */
    'EditRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECBANL
     */
    'LastYearBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECBANL
     */
    'CurrentPeriodBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECBANL
     */
    'YearToDateBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECBANL
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLECBANL
     */
    'GSTType'?: TABLECBANLGSTTypeEnum;
}

export const TABLECBANLAnalysisFilterEnum = {
    ExpenseAsset: 'Expense/Asset',
    GeneralAll: 'General/All',
    IncomeLiability: 'Income/Liability',
    NotAvailable: 'Not Available'
} as const;

export type TABLECBANLAnalysisFilterEnum = typeof TABLECBANLAnalysisFilterEnum[keyof typeof TABLECBANLAnalysisFilterEnum];
export const TABLECBANLAccountClassEnum = {
    Asset: 'Asset',
    Capital: 'Capital',
    Expense: 'Expense',
    Income: 'Income',
    Liability: 'Liability'
} as const;

export type TABLECBANLAccountClassEnum = typeof TABLECBANLAccountClassEnum[keyof typeof TABLECBANLAccountClassEnum];
export const TABLECBANLGSTTypeEnum = {
    Sales: 'Sales',
    Purchases: 'Purchases'
} as const;

export type TABLECBANLGSTTypeEnum = typeof TABLECBANLGSTTypeEnum[keyof typeof TABLECBANLGSTTypeEnum];

