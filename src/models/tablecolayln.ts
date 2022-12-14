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
 * @interface TABLECOLAYLN
 */
export interface TABLECOLAYLN {
    /**
     * 
     * @type {number}
     * @memberof TABLECOLAYLN
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECOLAYLN
     */
    'LayoutID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLECOLAYLN
     */
    'TableName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOLAYLN
     */
    'Data'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOLAYLN
     */
    'Type'?: TABLECOLAYLNTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLECOLAYLN
     */
    'Order'?: number;
}

export const TABLECOLAYLNTypeEnum = {
    Filter: 'Filter',
    Sort: 'Sort',
    Selection: 'Selection',
    Preference: 'Preference',
    User: 'User'
} as const;

export type TABLECOLAYLNTypeEnum = typeof TABLECOLAYLNTypeEnum[keyof typeof TABLECOLAYLNTypeEnum];


