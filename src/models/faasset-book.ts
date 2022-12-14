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
 * @interface FAAssetBook
 */
export interface FAAssetBook {
    /**
     * 
     * @type {number}
     * @memberof FAAssetBook
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof FAAssetBook
     */
    'BookCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetBook
     */
    'BookName'?: string;
    /**
     * 
     * @type {string}
     * @memberof FAAssetBook
     */
    'BookStatus'?: FAAssetBookBookStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof FAAssetBook
     */
    'DisposalOption'?: FAAssetBookDisposalOptionEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FAAssetBook
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FAAssetBook
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof FAAssetBook
     */
    '@odata.etag'?: string;
}

export const FAAssetBookBookStatusEnum = {
    Pending: 'Pending',
    Open: 'Open',
    Closed: 'Closed'
} as const;

export type FAAssetBookBookStatusEnum = typeof FAAssetBookBookStatusEnum[keyof typeof FAAssetBookBookStatusEnum];
export const FAAssetBookDisposalOptionEnum = {
    NoDepreciationThisYear: 'No depreciation this year',
    DepreciationThisYear: 'Depreciation this year'
} as const;

export type FAAssetBookDisposalOptionEnum = typeof FAAssetBookDisposalOptionEnum[keyof typeof FAAssetBookDisposalOptionEnum];


