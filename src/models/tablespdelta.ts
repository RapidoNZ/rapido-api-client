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
 * @interface TABLESPDELTA
 */
export interface TABLESPDELTA {
    /**
     * 
     * @type {number}
     * @memberof TABLESPDELTA
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLESPDELTA
     */
    'DeltaID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLESPDELTA
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLESPDELTA
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLESPDELTA
     */
    'ChangeType'?: TABLESPDELTAChangeTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLESPDELTA
     */
    'ChangeHeat'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLESPDELTA
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLESPDELTA
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLESPDELTA
     */
    'CreatedTime'?: string;
}

export const TABLESPDELTAChangeTypeEnum = {
    Add: 'Add',
    Update: 'Update',
    Delete: 'Delete'
} as const;

export type TABLESPDELTAChangeTypeEnum = typeof TABLESPDELTAChangeTypeEnum[keyof typeof TABLESPDELTAChangeTypeEnum];


