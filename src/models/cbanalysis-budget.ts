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
import { CBAnalysisBudgetBudgets } from './cbanalysis-budget-budgets';

/**
 * 
 * @export
 * @interface CBAnalysisBudget
 */
export interface CBAnalysisBudget {
    /**
     * 
     * @type {number}
     * @memberof CBAnalysisBudget
     */
    'RecNo'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CBAnalysisBudget
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CBAnalysisBudget
     */
    'AnalysisCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBAnalysisBudget
     */
    'AnalysisName'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBAnalysisBudget
     */
    'AccountClass'?: CBAnalysisBudgetAccountClassEnum;
    /**
     * 
     * @type {string}
     * @memberof CBAnalysisBudget
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CBAnalysisBudget
     */
    'FriendlyAccountCode'?: string;
    /**
     * 
     * @type {Array<CBAnalysisBudgetBudgets>}
     * @memberof CBAnalysisBudget
     */
    'Budgets'?: Array<CBAnalysisBudgetBudgets>;
    /**
     * 
     * @type {number}
     * @memberof CBAnalysisBudget
     */
    'YearNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof CBAnalysisBudget
     */
    '@odata.etag'?: string;
}

export const CBAnalysisBudgetAccountClassEnum = {
    Asset: 'Asset',
    Capital: 'Capital',
    Expense: 'Expense',
    Income: 'Income',
    Liability: 'Liability'
} as const;

export type CBAnalysisBudgetAccountClassEnum = typeof CBAnalysisBudgetAccountClassEnum[keyof typeof CBAnalysisBudgetAccountClassEnum];


