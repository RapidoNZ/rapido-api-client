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
import { TABLEFACODE } from './tablefacode';

/**
 * 
 * @export
 * @interface PagedTABLEFACODE
 */
export interface PagedTABLEFACODE {
    /**
     * 
     * @type {string}
     * @memberof PagedTABLEFACODE
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedTABLEFACODE
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<TABLEFACODE>}
     * @memberof PagedTABLEFACODE
     */
    'value'?: Array<TABLEFACODE>;
}
