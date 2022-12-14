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
import { PagedTABLEJCLINK } from '../models';
// @ts-ignore
import { TABLEJCLINK } from '../models';
/**
 * TABLEJCLINKApi - axios parameter creator
 * @export
 */
export const TABLEJCLINKApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCLINKGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_JCLINK`;
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
        tABLEJCLINKLinkIDGet: async (linkID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'linkID' is not null or undefined
            assertParamExists('tABLEJCLINKLinkIDGet', 'linkID', linkID)
            const localVarPath = `/TABLE_JCLINK('{LinkID}')`
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
 * TABLEJCLINKApi - functional programming interface
 * @export
 */
export const TABLEJCLINKApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEJCLINKApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCLINKGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEJCLINK>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCLINKGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEJCLINK>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCLINKLinkIDGet(linkID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEJCLINKApi - factory interface
 * @export
 */
export const TABLEJCLINKApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEJCLINKApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCLINKGet(options?: any): AxiosPromise<PagedTABLEJCLINK> {
            return localVarFp.tABLEJCLINKGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCLINKLinkIDGet(linkID: number, options?: any): AxiosPromise<TABLEJCLINK> {
            return localVarFp.tABLEJCLINKLinkIDGet(linkID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEJCLINKApi - interface
 * @export
 * @interface TABLEJCLINKApi
 */
export interface TABLEJCLINKApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCLINKApiInterface
     */
    tABLEJCLINKGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEJCLINK>;

    /**
     * 
     * @param {number} linkID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCLINKApiInterface
     */
    tABLEJCLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEJCLINK>;

}

/**
 * TABLEJCLINKApi - object-oriented interface
 * @export
 * @class TABLEJCLINKApi
 * @extends {BaseAPI}
 */
export class TABLEJCLINKApi extends BaseAPI implements TABLEJCLINKApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCLINKApi
     */
    public tABLEJCLINKGet(options?: AxiosRequestConfig) {
        return TABLEJCLINKApiFp(this.configuration).tABLEJCLINKGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} linkID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCLINKApi
     */
    public tABLEJCLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig) {
        return TABLEJCLINKApiFp(this.configuration).tABLEJCLINKLinkIDGet(linkID, options).then((request) => request(this.axios, this.basePath));
    }
}
