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
 * @interface TABLEAPMEMO
 */
export interface TABLEAPMEMO {
    /**
     * 
     * @type {number}
     * @memberof TABLEAPMEMO
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPMEMO
     */
    'MemoID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'MemoDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'MemoTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'Subject'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'MemoType'?: TABLEAPMEMOMemoTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'TargetUserCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEAPMEMO
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'ActionOnDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'ActionOnTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPMEMO
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPMEMO
     */
    'RecordRevision'?: number;
}

export const TABLEAPMEMOMemoTypeEnum = {
    Memo: 'Memo',
    Alarm: 'Alarm',
    Reminder: 'Reminder'
} as const;

export type TABLEAPMEMOMemoTypeEnum = typeof TABLEAPMEMOMemoTypeEnum[keyof typeof TABLEAPMEMOMemoTypeEnum];


