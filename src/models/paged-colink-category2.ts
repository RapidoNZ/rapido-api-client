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
import { COLinkCategory2 } from './colink-category2';

/**
 * 
 * @export
 * @interface PagedCOLinkCategory2
 */
export interface PagedCOLinkCategory2 {
    /**
     * 
     * @type {string}
     * @memberof PagedCOLinkCategory2
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedCOLinkCategory2
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<COLinkCategory2>}
     * @memberof PagedCOLinkCategory2
     */
    'value'?: Array<COLinkCategory2>;
}
