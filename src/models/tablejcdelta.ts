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
 * @interface TABLEJCDELTA
 */
export interface TABLEJCDELTA {
    /**
     * 
     * @type {number}
     * @memberof TABLEJCDELTA
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCDELTA
     */
    'DeltaID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCDELTA
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCDELTA
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCDELTA
     */
    'ChangeType'?: TABLEJCDELTAChangeTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEJCDELTA
     */
    'ChangeHeat'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCDELTA
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCDELTA
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEJCDELTA
     */
    'CreatedTime'?: string;
}

export const TABLEJCDELTAChangeTypeEnum = {
    Add: 'Add',
    Update: 'Update',
    Delete: 'Delete'
} as const;

export type TABLEJCDELTAChangeTypeEnum = typeof TABLEJCDELTAChangeTypeEnum[keyof typeof TABLEJCDELTAChangeTypeEnum];


