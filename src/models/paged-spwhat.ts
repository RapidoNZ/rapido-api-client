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
import { SPWhat } from './spwhat';

/**
 * 
 * @export
 * @interface PagedSPWhat
 */
export interface PagedSPWhat {
    /**
     * 
     * @type {string}
     * @memberof PagedSPWhat
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedSPWhat
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<SPWhat>}
     * @memberof PagedSPWhat
     */
    'value'?: Array<SPWhat>;
}

