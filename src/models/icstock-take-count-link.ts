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
 * @interface ICStockTakeCountLink
 */
export interface ICStockTakeCountLink {
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'LinkType'?: ICStockTakeCountLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ICStockTakeCountLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLink
     */
    '@odata.etag'?: string;
}

export const ICStockTakeCountLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type ICStockTakeCountLinkLinkTypeEnum = typeof ICStockTakeCountLinkLinkTypeEnum[keyof typeof ICStockTakeCountLinkLinkTypeEnum];


