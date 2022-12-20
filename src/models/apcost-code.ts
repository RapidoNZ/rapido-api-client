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
 * @interface APCostCode
 */
export interface APCostCode {
    /**
     * 
     * @type {number}
     * @memberof APCostCode
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCostCode
     */
    'CostCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCostCode
     */
    'Description'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCostCode
     */
    'ApportionType'?: APCostCodeApportionTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof APCostCode
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCostCode
     */
    '@odata.etag'?: string;
}

export const APCostCodeApportionTypeEnum = {
    Cost: 'Cost',
    Quantity: 'Quantity',
    Volume: 'Volume',
    Weight: 'Weight',
    Manual: 'Manual'
} as const;

export type APCostCodeApportionTypeEnum = typeof APCostCodeApportionTypeEnum[keyof typeof APCostCodeApportionTypeEnum];

