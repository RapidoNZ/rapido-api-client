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
import { GLMemo } from './glmemo';

/**
 * 
 * @export
 * @interface PagedGLMemo
 */
export interface PagedGLMemo {
    /**
     * 
     * @type {string}
     * @memberof PagedGLMemo
     */
    '@odata.deltaLink'?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedGLMemo
     */
    '@odata.context'?: string;
    /**
     * 
     * @type {Array<GLMemo>}
     * @memberof PagedGLMemo
     */
    'value'?: Array<GLMemo>;
}

