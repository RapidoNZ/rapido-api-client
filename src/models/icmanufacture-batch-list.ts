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
 * @interface ICManufactureBatchList
 */
export interface ICManufactureBatchList {
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'BatchID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'Description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'TransactionDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'TransactionQuantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'Details'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'PostStatus'?: ICManufactureBatchListPostStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'PeriodName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'Reference'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'UOMMultiplier'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'SerialNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'ManufactureID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'UOMUnitCostprice'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'UnitCostprice'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'CostValueExclusive'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'PrintStatus'?: ICManufactureBatchListPrintStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICManufactureBatchList
     */
    'PeriodNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    'ReferenceAlpha'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICManufactureBatchList
     */
    '@odata.etag'?: string;
}

export const ICManufactureBatchListPostStatusEnum = {
    Unposted: 'Unposted',
    Open: 'Open',
    Posted: 'Posted',
    Deleted: 'Deleted'
} as const;

export type ICManufactureBatchListPostStatusEnum = typeof ICManufactureBatchListPostStatusEnum[keyof typeof ICManufactureBatchListPostStatusEnum];
export const ICManufactureBatchListPrintStatusEnum = {
    Unprinted: 'Unprinted',
    Printed: 'Printed'
} as const;

export type ICManufactureBatchListPrintStatusEnum = typeof ICManufactureBatchListPrintStatusEnum[keyof typeof ICManufactureBatchListPrintStatusEnum];


