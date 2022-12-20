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
 * @interface TABLEARMEMO
 */
export interface TABLEARMEMO {
    /**
     * 
     * @type {number}
     * @memberof TABLEARMEMO
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEARMEMO
     */
    'MemoID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'MemoDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'MemoTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'Subject'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'MemoType'?: TABLEARMEMOMemoTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'TargetUserCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEARMEMO
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'ActionOnDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'ActionOnTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARMEMO
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEARMEMO
     */
    'RecordRevision'?: number;
}

export const TABLEARMEMOMemoTypeEnum = {
    Memo: 'Memo',
    Alarm: 'Alarm',
    Reminder: 'Reminder'
} as const;

export type TABLEARMEMOMemoTypeEnum = typeof TABLEARMEMOMemoTypeEnum[keyof typeof TABLEARMEMOMemoTypeEnum];

