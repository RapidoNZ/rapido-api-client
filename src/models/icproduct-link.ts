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
 * @interface ICProductLink
 */
export interface ICProductLink {
    /**
     * 
     * @type {number}
     * @memberof ICProductLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'LinkType'?: ICProductLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductLink
     */
    '@odata.etag'?: string;
}

export const ICProductLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type ICProductLinkLinkTypeEnum = typeof ICProductLinkLinkTypeEnum[keyof typeof ICProductLinkLinkTypeEnum];


