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
import { TABLEFATRAN } from './tablefatran';

/**
 * 
 * @export
 * @interface PagedTABLEFATRAN
 */
export interface PagedTABLEFATRAN {
    /**
     * 
     * @type {string}
     * @memberof PagedTABLEFATRAN
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedTABLEFATRAN
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<TABLEFATRAN>}
     * @memberof PagedTABLEFATRAN
     */
    'value'?: Array<TABLEFATRAN>;
}

