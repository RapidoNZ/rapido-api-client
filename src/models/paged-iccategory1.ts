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
import { ICCategory1 } from './iccategory1';

/**
 * 
 * @export
 * @interface PagedICCategory1
 */
export interface PagedICCategory1 {
    /**
     * 
     * @type {string}
     * @memberof PagedICCategory1
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedICCategory1
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<ICCategory1>}
     * @memberof PagedICCategory1
     */
    'value'?: Array<ICCategory1>;
}

