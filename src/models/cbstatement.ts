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
import { CBStatementStatementLine } from './cbstatement-statement-line';
// May contain unused imports in some cases
// @ts-ignore
import { CBStatementUnreconciled } from './cbstatement-unreconciled';

/**
 * 
 * @export
 * @interface CBStatement
 */
export interface CBStatement {
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'StatementID'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'BankAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'Status'?: CBStatementStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'LastStatementDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'StatementDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'OpeningBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'ClosingBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'ReconciliationBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'RulesToApply'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'NumberUnmatched'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'BankAccountNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'ClosedTransactionID'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'PeriodNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'StatementSequence'?: number;
    /**
     * 
     * @type {number}
     * @memberof CBStatement
     */
    'RecNo'?: number;
    /**
     * 
     * @type {Array<CBStatementStatementLine>}
     * @memberof CBStatement
     */
    'StatementLine'?: Array<CBStatementStatementLine>;
    /**
     * 
     * @type {Array<CBStatementUnreconciled>}
     * @memberof CBStatement
     */
    'Unreconciled'?: Array<CBStatementUnreconciled>;
    /**
     * 
     * @type {string}
     * @memberof CBStatement
     */
    '@odata.etag'?: string;
}

export const CBStatementStatusEnum = {
    Open: 'Open',
    Closed: 'Closed'
} as const;

export type CBStatementStatusEnum = typeof CBStatementStatusEnum[keyof typeof CBStatementStatusEnum];


