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
 * @interface APTransactionLink
 */
export interface APTransactionLink {
    /**
     * 
     * @type {number}
     * @memberof APTransactionLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransactionLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof APTransactionLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'LinkType'?: APTransactionLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof APTransactionLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransactionLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof APTransactionLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof APTransactionLink
     */
    '@odata.etag'?: string;
}

export const APTransactionLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type APTransactionLinkLinkTypeEnum = typeof APTransactionLinkLinkTypeEnum[keyof typeof APTransactionLinkLinkTypeEnum];


