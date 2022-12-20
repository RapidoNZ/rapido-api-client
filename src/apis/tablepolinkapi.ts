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
import { PagedTABLEPOLINK } from '../models';
// @ts-ignore
import { TABLEPOLINK } from '../models';
/**
 * TABLEPOLINKApi - axios parameter creator
 * @export
 */
export const TABLEPOLINKApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOLINKGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_POLINK`;
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
        tABLEPOLINKLinkIDGet: async (linkID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'linkID' is not null or undefined
            assertParamExists('tABLEPOLINKLinkIDGet', 'linkID', linkID)
            const localVarPath = `/TABLE_POLINK('{LinkID}')`
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
 * TABLEPOLINKApi - functional programming interface
 * @export
 */
export const TABLEPOLINKApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEPOLINKApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEPOLINKGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEPOLINK>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEPOLINKGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEPOLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEPOLINK>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEPOLINKLinkIDGet(linkID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEPOLINKApi - factory interface
 * @export
 */
export const TABLEPOLINKApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEPOLINKApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOLINKGet(options?: any): AxiosPromise<PagedTABLEPOLINK> {
            return localVarFp.tABLEPOLINKGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOLINKLinkIDGet(linkID: number, options?: any): AxiosPromise<TABLEPOLINK> {
            return localVarFp.tABLEPOLINKLinkIDGet(linkID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEPOLINKApi - interface
 * @export
 * @interface TABLEPOLINKApi
 */
export interface TABLEPOLINKApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOLINKApiInterface
     */
    tABLEPOLINKGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEPOLINK>;

    /**
     * 
     * @param {number} linkID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOLINKApiInterface
     */
    tABLEPOLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEPOLINK>;

}

/**
 * TABLEPOLINKApi - object-oriented interface
 * @export
 * @class TABLEPOLINKApi
 * @extends {BaseAPI}
 */
export class TABLEPOLINKApi extends BaseAPI implements TABLEPOLINKApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOLINKApi
     */
    public tABLEPOLINKGet(options?: AxiosRequestConfig) {
        return TABLEPOLINKApiFp(this.configuration).tABLEPOLINKGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} linkID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOLINKApi
     */
    public tABLEPOLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig) {
        return TABLEPOLINKApiFp(this.configuration).tABLEPOLINKLinkIDGet(linkID, options).then((request) => request(this.axios, this.basePath));
    }
}
