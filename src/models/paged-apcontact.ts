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
import { APContact } from './apcontact';

/**
 * 
 * @export
 * @interface PagedAPContact
 */
export interface PagedAPContact {
    /**
     * 
     * @type {string}
     * @memberof PagedAPContact
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedAPContact
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<APContact>}
     * @memberof PagedAPContact
     */
    'value'?: Array<APContact>;
}

