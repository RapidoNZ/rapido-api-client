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
 * @interface ICStockTakeLink
 */
export interface ICStockTakeLink {
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'LinkType'?: ICStockTakeLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ICStockTakeLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeLink
     */
    '@odata.etag'?: string;
}

export const ICStockTakeLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type ICStockTakeLinkLinkTypeEnum = typeof ICStockTakeLinkLinkTypeEnum[keyof typeof ICStockTakeLinkLinkTypeEnum];

