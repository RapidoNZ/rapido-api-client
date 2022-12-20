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


// May contain unused imports in some cases
// @ts-ignore
import { FADepreciationDefaultsGroup } from './fadepreciation-defaults-group';

/**
 * 
 * @export
 * @interface FADepreciationDefaults
 */
export interface FADepreciationDefaults {
    /**
     * 
     * @type {number}
     * @memberof FADepreciationDefaults
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof FADepreciationDefaults
     */
    'BookCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FADepreciationDefaults
     */
    'BookName'?: string;
    /**
     * 
     * @type {string}
     * @memberof FADepreciationDefaults
     */
    'BookStatus'?: FADepreciationDefaultsBookStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FADepreciationDefaults
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {Array<FADepreciationDefaultsGroup>}
     * @memberof FADepreciationDefaults
     */
    'Group'?: Array<FADepreciationDefaultsGroup>;
    /**
     * 
     * @type {string}
     * @memberof FADepreciationDefaults
     */
    '@odata.etag'?: string;
}

export const FADepreciationDefaultsBookStatusEnum = {
    Pending: 'Pending',
    Open: 'Open',
    Closed: 'Closed'
} as const;

export type FADepreciationDefaultsBookStatusEnum = typeof FADepreciationDefaultsBookStatusEnum[keyof typeof FADepreciationDefaultsBookStatusEnum];

