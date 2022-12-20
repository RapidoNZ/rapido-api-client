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
 * @interface SPWhat
 */
export interface SPWhat {
    /**
     * 
     * @type {number}
     * @memberof SPWhat
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof SPWhat
     */
    'Type'?: SPWhatTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SPWhat
     */
    'Available'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SPWhat
     */
    'DefaultPriority'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SPWhat
     */
    'ShowName'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SPWhat
     */
    'SortOrder'?: number;
    /**
     * 
     * @type {number}
     * @memberof SPWhat
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof SPWhat
     */
    '@odata.etag'?: string;
}

export const SPWhatTypeEnum = {
    Product: 'Product',
    StockGroup: 'Stock Group',
    SalesGroup: 'Sales Group',
    Creditor: 'Creditor',
    Discount: 'Discount',
    IcCategory1: 'IC Category 1',
    IcCategory2: 'IC Category 2',
    None: 'None'
} as const;

export type SPWhatTypeEnum = typeof SPWhatTypeEnum[keyof typeof SPWhatTypeEnum];

