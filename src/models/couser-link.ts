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
 * @interface COUserLink
 */
export interface COUserLink {
    /**
     * 
     * @type {number}
     * @memberof COUserLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof COUserLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof COUserLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'LinkType'?: COUserLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof COUserLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof COUserLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof COUserLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof COUserLink
     */
    '@odata.etag'?: string;
}

export const COUserLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type COUserLinkLinkTypeEnum = typeof COUserLinkLinkTypeEnum[keyof typeof COUserLinkLinkTypeEnum];

