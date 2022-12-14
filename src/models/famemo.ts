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
import { FAMemoMemo } from './famemo-memo';

/**
 * 
 * @export
 * @interface FAMemo
 */
export interface FAMemo {
    /**
     * 
     * @type {number}
     * @memberof FAMemo
     */
    'MemoID'?: number;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'MemoDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'MemoTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'MemoType'?: FAMemoMemoTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FAMemo
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'ActionOnTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'ActionOnDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'TargetUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'Subject'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'AssetCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof FAMemo
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof FAMemo
     */
    'Reminder'?: number;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'MemoDateTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    'ActionOnDateTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof FAMemo
     */
    'RecNo'?: number;
    /**
     * 
     * @type {FAMemoMemo}
     * @memberof FAMemo
     */
    'Memo'?: FAMemoMemo;
    /**
     * 
     * @type {string}
     * @memberof FAMemo
     */
    '@odata.etag'?: string;
}

export const FAMemoMemoTypeEnum = {
    Memo: 'Memo',
    Alarm: 'Alarm',
    Reminder: 'Reminder'
} as const;

export type FAMemoMemoTypeEnum = typeof FAMemoMemoTypeEnum[keyof typeof FAMemoMemoTypeEnum];


