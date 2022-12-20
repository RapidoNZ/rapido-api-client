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


// May contain unused imports in some cases
// @ts-ignore
import { OEMemoMemo } from './oememo-memo';

/**
 * 
 * @export
 * @interface OEMemo
 */
export interface OEMemo {
    /**
     * 
     * @type {number}
     * @memberof OEMemo
     */
    'MemoID'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'MemoDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'MemoTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'MemoType'?: OEMemoMemoTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof OEMemo
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'ActionOnTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'ActionOnDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'TargetUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'Subject'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEMemo
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof OEMemo
     */
    'Reminder'?: number;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'MemoDateTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    'ActionOnDateTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof OEMemo
     */
    'RecNo'?: number;
    /**
     * 
     * @type {OEMemoMemo}
     * @memberof OEMemo
     */
    'Memo'?: OEMemoMemo;
    /**
     * 
     * @type {string}
     * @memberof OEMemo
     */
    '@odata.etag'?: string;
}

export const OEMemoMemoTypeEnum = {
    Memo: 'Memo',
    Alarm: 'Alarm',
    Reminder: 'Reminder'
} as const;

export type OEMemoMemoTypeEnum = typeof OEMemoMemoTypeEnum[keyof typeof OEMemoMemoTypeEnum];

