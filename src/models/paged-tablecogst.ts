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
import { TABLECOGST } from './tablecogst';

/**
 * 
 * @export
 * @interface PagedTABLECOGST
 */
export interface PagedTABLECOGST {
    /**
     * 
     * @type {string}
     * @memberof PagedTABLECOGST
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedTABLECOGST
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<TABLECOGST>}
     * @memberof PagedTABLECOGST
     */
    'value'?: Array<TABLECOGST>;
}
