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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PagedTABLEICLINK } from '../models';
// @ts-ignore
import { TABLEICLINK } from '../models';
/**
 * TABLEICLINKApi - axios parameter creator
 * @export
 */
export const TABLEICLINKApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICLINKGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ICLINK`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICLINKLinkIDGet: async (linkID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'linkID' is not null or undefined
            assertParamExists('tABLEICLINKLinkIDGet', 'linkID', linkID)
            const localVarPath = `/TABLE_ICLINK('{LinkID}')`
                .replace(`{${"LinkID"}}`, encodeURIComponent(String(linkID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TABLEICLINKApi - functional programming interface
 * @export
 */
export const TABLEICLINKApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEICLINKApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICLINKGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEICLINK>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICLINKGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEICLINK>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICLINKLinkIDGet(linkID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEICLINKApi - factory interface
 * @export
 */
export const TABLEICLINKApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEICLINKApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICLINKGet(options?: any): AxiosPromise<PagedTABLEICLINK> {
            return localVarFp.tABLEICLINKGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICLINKLinkIDGet(linkID: number, options?: any): AxiosPromise<TABLEICLINK> {
            return localVarFp.tABLEICLINKLinkIDGet(linkID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEICLINKApi - interface
 * @export
 * @interface TABLEICLINKApi
 */
export interface TABLEICLINKApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICLINKApiInterface
     */
    tABLEICLINKGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEICLINK>;

    /**
     * 
     * @param {number} linkID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICLINKApiInterface
     */
    tABLEICLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEICLINK>;

}

/**
 * TABLEICLINKApi - object-oriented interface
 * @export
 * @class TABLEICLINKApi
 * @extends {BaseAPI}
 */
export class TABLEICLINKApi extends BaseAPI implements TABLEICLINKApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICLINKApi
     */
    public tABLEICLINKGet(options?: AxiosRequestConfig) {
        return TABLEICLINKApiFp(this.configuration).tABLEICLINKGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} linkID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICLINKApi
     */
    public tABLEICLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig) {
        return TABLEICLINKApiFp(this.configuration).tABLEICLINKLinkIDGet(linkID, options).then((request) => request(this.axios, this.basePath));
    }
}