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
import { ICUOMGroup } from './icuomgroup';

/**
 * 
 * @export
 * @interface PagedICUOMGroup
 */
export interface PagedICUOMGroup {
    /**
     * 
     * @type {string}
     * @memberof PagedICUOMGroup
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedICUOMGroup
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<ICUOMGroup>}
     * @memberof PagedICUOMGroup
     */
    'value'?: Array<ICUOMGroup>;
}

