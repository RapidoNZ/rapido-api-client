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
import { JCCategory2 } from './jccategory2';

/**
 * 
 * @export
 * @interface PagedJCCategory2
 */
export interface PagedJCCategory2 {
    /**
     * 
     * @type {string}
     * @memberof PagedJCCategory2
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedJCCategory2
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<JCCategory2>}
     * @memberof PagedJCCategory2
     */
    'value'?: Array<JCCategory2>;
}

