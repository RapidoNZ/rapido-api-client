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
 * @interface TABLECOALIAS
 */
export interface TABLECOALIAS {
    /**
     * 
     * @type {number}
     * @memberof TABLECOALIAS
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECOALIAS
     */
    'AliasID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLECOALIAS
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOALIAS
     */
    'OldAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOALIAS
     */
    'NewAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOALIAS
     */
    'ParentAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOALIAS
     */
    'AliasType'?: TABLECOALIASAliasTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLECOALIAS
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOALIAS
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOALIAS
     */
    'CreatedTime'?: string;
}

export const TABLECOALIASAliasTypeEnum = {
    Alias: 'Alias',
    Merge: 'Merge'
} as const;

export type TABLECOALIASAliasTypeEnum = typeof TABLECOALIASAliasTypeEnum[keyof typeof TABLECOALIASAliasTypeEnum];


