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
 * @interface FAAssetLink
 */
export interface FAAssetLink {
    /**
     * 
     * @type {number}
     * @memberof FAAssetLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof FAAssetLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof FAAssetLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'LinkType'?: FAAssetLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FAAssetLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof FAAssetLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof FAAssetLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof FAAssetLink
     */
    '@odata.etag'?: string;
}

export const FAAssetLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type FAAssetLinkLinkTypeEnum = typeof FAAssetLinkLinkTypeEnum[keyof typeof FAAssetLinkLinkTypeEnum];

