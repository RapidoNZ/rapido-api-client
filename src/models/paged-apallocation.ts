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
import { APAllocation } from './apallocation';

/**
 * 
 * @export
 * @interface PagedAPAllocation
 */
export interface PagedAPAllocation {
    /**
     * 
     * @type {string}
     * @memberof PagedAPAllocation
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedAPAllocation
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<APAllocation>}
     * @memberof PagedAPAllocation
     */
    'value'?: Array<APAllocation>;
}

