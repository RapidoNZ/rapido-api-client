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
 * @interface APCreditorLink
 */
export interface APCreditorLink {
    /**
     * 
     * @type {number}
     * @memberof APCreditorLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'LinkType'?: APCreditorLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof APCreditorLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorLink
     */
    '@odata.etag'?: string;
}

export const APCreditorLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type APCreditorLinkLinkTypeEnum = typeof APCreditorLinkLinkTypeEnum[keyof typeof APCreditorLinkLinkTypeEnum];


