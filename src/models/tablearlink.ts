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
 * @interface TABLEARLINK
 */
export interface TABLEARLINK {
    /**
     * 
     * @type {number}
     * @memberof TABLEARLINK
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEARLINK
     */
    'LinkID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'AccountFile'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'AccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'LinkType'?: TABLEARLINKLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'FilePath'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEARLINK
     */
    'LineNo'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TABLEARLINK
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEARLINK
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEARLINK
     */
    'RecordRevision'?: number;
}

export const TABLEARLINKLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type TABLEARLINKLinkTypeEnum = typeof TABLEARLINKLinkTypeEnum[keyof typeof TABLEARLINKLinkTypeEnum];


