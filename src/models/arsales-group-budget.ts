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
import { ARSalesGroupBudgetBudgets } from './arsales-group-budget-budgets';

/**
 * 
 * @export
 * @interface ARSalesGroupBudget
 */
export interface ARSalesGroupBudget {
    /**
     * 
     * @type {number}
     * @memberof ARSalesGroupBudget
     */
    'RecNo'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ARSalesGroupBudget
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ARSalesGroupBudget
     */
    'AnalysisCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARSalesGroupBudget
     */
    'AnalysisName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARSalesGroupBudget
     */
    'AccountClass'?: ARSalesGroupBudgetAccountClassEnum;
    /**
     * 
     * @type {string}
     * @memberof ARSalesGroupBudget
     */
    'GLAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARSalesGroupBudget
     */
    'FriendlyAccountCode'?: string;
    /**
     * 
     * @type {Array<ARSalesGroupBudgetBudgets>}
     * @memberof ARSalesGroupBudget
     */
    'Budgets'?: Array<ARSalesGroupBudgetBudgets>;
    /**
     * 
     * @type {number}
     * @memberof ARSalesGroupBudget
     */
    'YearNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARSalesGroupBudget
     */
    '@odata.etag'?: string;
}

export const ARSalesGroupBudgetAccountClassEnum = {
    Asset: 'Asset',
    Capital: 'Capital',
    Expense: 'Expense',
    Income: 'Income',
    Liability: 'Liability'
} as const;

export type ARSalesGroupBudgetAccountClassEnum = typeof ARSalesGroupBudgetAccountClassEnum[keyof typeof ARSalesGroupBudgetAccountClassEnum];


