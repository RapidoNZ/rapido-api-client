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
 * @interface INInvoiceLink
 */
export interface INInvoiceLink {
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLink
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLink
     */
    'LinkID'?: number;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLink
     */
    'ImageIndex'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'LinkType'?: INInvoiceLinkLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'FilePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'Reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'Comment'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof INInvoiceLink
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'LastModified'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLink
     */
    'LineNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    'ShortFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof INInvoiceLink
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof INInvoiceLink
     */
    '@odata.etag'?: string;
}

export const INInvoiceLinkLinkTypeEnum = {
    File: 'File',
    Web: 'Web'
} as const;

export type INInvoiceLinkLinkTypeEnum = typeof INInvoiceLinkLinkTypeEnum[keyof typeof INInvoiceLinkLinkTypeEnum];


