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
 * @interface TABLESPWHO
 */
export interface TABLESPWHO {
    /**
     * 
     * @type {number}
     * @memberof TABLESPWHO
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLESPWHO
     */
    'Type'?: TABLESPWHOTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TABLESPWHO
     */
    'Available'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TABLESPWHO
     */
    'DefaultPriority'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLESPWHO
     */
    'SortOrder'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TABLESPWHO
     */
    'ShowName'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TABLESPWHO
     */
    'RecordRevision'?: number;
}

export const TABLESPWHOTypeEnum = {
    Customer: 'Customer',
    CustomerGroup: 'Customer Group',
    SalesArea: 'Sales Area',
    SalesPerson: 'Sales Person',
    PriceCode: 'Price Code',
    Discount: 'Discount',
    DeliveryAddress: 'Delivery Address',
    ArCategory1: 'AR Category 1',
    ArCategory2: 'AR Category 2',
    InCategory1: 'IN Category 1',
    InCategory2: 'IN Category 2',
    Job: 'Job',
    JobGroup: 'Job Group',
    JcCategory1: 'JC Category 1',
    JcCategory2: 'JC Category 2',
    None: 'None'
} as const;

export type TABLESPWHOTypeEnum = typeof TABLESPWHOTypeEnum[keyof typeof TABLESPWHOTypeEnum];


