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
import { COBankingMedia } from './cobanking-media';

/**
 * 
 * @export
 * @interface PagedCOBankingMedia
 */
export interface PagedCOBankingMedia {
    /**
     * 
     * @type {string}
     * @memberof PagedCOBankingMedia
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedCOBankingMedia
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<COBankingMedia>}
     * @memberof PagedCOBankingMedia
     */
    'value'?: Array<COBankingMedia>;
}

