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
import { FACategory2 } from './facategory2';

/**
 * 
 * @export
 * @interface PagedFACategory2
 */
export interface PagedFACategory2 {
    /**
     * 
     * @type {string}
     * @memberof PagedFACategory2
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedFACategory2
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<FACategory2>}
     * @memberof PagedFACategory2
     */
    'value'?: Array<FACategory2>;
}

