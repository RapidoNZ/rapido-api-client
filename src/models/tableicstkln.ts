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
 * @interface TABLEICSTKLN
 */
export interface TABLEICSTKLN {
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'LineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'DocumentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICSTKLN
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICSTKLN
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'QuantityExpectedOpening'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'QuantityExpectedMovement'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'QuantityCounted'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEICSTKLN
     */
    'LineStatus'?: TABLEICSTKLNLineStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'CountLines'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'PeriodNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'QuantityExpected'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEICSTKLN
     */
    'QuantityVariance'?: number;
}

export const TABLEICSTKLNLineStatusEnum = {
    Uncounted: 'Uncounted',
    Counted: 'Counted',
    Posted: 'Posted',
    Deleted: 'Deleted'
} as const;

export type TABLEICSTKLNLineStatusEnum = typeof TABLEICSTKLNLineStatusEnum[keyof typeof TABLEICSTKLNLineStatusEnum];


