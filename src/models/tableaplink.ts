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
 * @interface TABLEAPLINK
 */
export interface TABLEAPLINK {
    /**
     * 
     * @type {number}
     * @memberof TABLEAPLINK
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPLINK
     */
    'LinkID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'LinkType'?: TABLEAPLINKLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'FilePath'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPLINK
     */
    'LineNo'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEAPLINK
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEAPLINK
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEAPLINK
     */
    'RecordRevision'?: number;
}

export const TABLEAPLINKLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type TABLEAPLINKLinkTypeEnum = typeof TABLEAPLINKLinkTypeEnum[keyof typeof TABLEAPLINKLinkTypeEnum];


