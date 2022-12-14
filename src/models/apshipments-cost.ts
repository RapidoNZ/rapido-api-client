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
 * @interface APShipmentsCost
 */
export interface APShipmentsCost {
    /**
     * 
     * @type {number}
     * @memberof APShipmentsCost
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'CreditorName'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'CostCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'Description'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsCost
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'Reference'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsCost
     */
    'CostAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'ApportionType'?: APShipmentsCostApportionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsCost
     */
    'CostAmountBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'RateType'?: string;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsCost
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsCost
     */
    'LineID'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof APShipmentsCost
     */
    'ShipmentLine'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsCost
     */
    'LineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof APShipmentsCost
     */
    'SourceID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {string}
     * @memberof APShipmentsCost
     */
    '@odata.etag'?: string;
}

export const APShipmentsCostApportionTypeEnum = {
    Cost: 'Cost',
    Quantity: 'Quantity',
    Volume: 'Volume',
    Weight: 'Weight',
    Manual: 'Manual'
} as const;

export type APShipmentsCostApportionTypeEnum = typeof APShipmentsCostApportionTypeEnum[keyof typeof APShipmentsCostApportionTypeEnum];


