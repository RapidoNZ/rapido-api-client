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
 * @interface TABLEAPFXVAR
 */
export interface TABLEAPFXVAR {
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'VariationID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'TransactionID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'AllocationID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'VariationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'VariationType'?: TABLEAPFXVARVariationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPFXVAR
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'VariationAmount'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEAPFXVAR
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEAPFXVAR
     */
    'TransferredToGL'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPFXVAR
     */
    'PeriodNo'?: number;
}

export const TABLEAPFXVARVariationTypeEnum = {
    Unrealised: 'Unrealised',
    Realised: 'Realised',
    Variation: 'Variation'
} as const;

export type TABLEAPFXVARVariationTypeEnum = typeof TABLEAPFXVARVariationTypeEnum[keyof typeof TABLEAPFXVARVariationTypeEnum];

