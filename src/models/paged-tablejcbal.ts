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
import { TABLEJCBAL } from './tablejcbal';

/**
 * 
 * @export
 * @interface PagedTABLEJCBAL
 */
export interface PagedTABLEJCBAL {
    /**
     * 
     * @type {string}
     * @memberof PagedTABLEJCBAL
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedTABLEJCBAL
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<TABLEJCBAL>}
     * @memberof PagedTABLEJCBAL
     */
    'value'?: Array<TABLEJCBAL>;
}
