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
 * @interface FATransactionLink
 */
export interface FATransactionLink {
    /**
     * 
     * @type {number}
     * @memberof FATransactionLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof FATransactionLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof FATransactionLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'LinkType'?: FATransactionLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FATransactionLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof FATransactionLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof FATransactionLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof FATransactionLink
     */
    '@odata.etag'?: string;
}

export const FATransactionLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type FATransactionLinkLinkTypeEnum = typeof FATransactionLinkLinkTypeEnum[keyof typeof FATransactionLinkLinkTypeEnum];

