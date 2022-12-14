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
 * @interface TABLEOEMEMO
 */
export interface TABLEOEMEMO {
    /**
     * 
     * @type {number}
     * @memberof TABLEOEMEMO
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEOEMEMO
     */
    'MemoID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'MemoDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'MemoTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'Subject'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'MemoType'?: TABLEOEMEMOMemoTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'TargetUserCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEOEMEMO
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'ActionOnDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'ActionOnTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEOEMEMO
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEOEMEMO
     */
    'RecordRevision'?: number;
}

export const TABLEOEMEMOMemoTypeEnum = {
    Memo: 'Memo',
    Alarm: 'Alarm',
    Reminder: 'Reminder'
} as const;

export type TABLEOEMEMOMemoTypeEnum = typeof TABLEOEMEMOMemoTypeEnum[keyof typeof TABLEOEMEMOMemoTypeEnum];


