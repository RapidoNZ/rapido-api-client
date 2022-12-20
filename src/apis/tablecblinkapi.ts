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
import { PagedTABLECBLINK } from '../models';
// @ts-ignore
import { TABLECBLINK } from '../models';
/**
 * TABLECBLINKApi - axios parameter creator
 * @export
 */
export const TABLECBLINKApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBLINKGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBLINK`;
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
        tABLECBLINKLinkIDGet: async (linkID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'linkID' is not null or undefined
            assertParamExists('tABLECBLINKLinkIDGet', 'linkID', linkID)
            const localVarPath = `/TABLE_CBLINK('{LinkID}')`
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
 * TABLECBLINKApi - functional programming interface
 * @export
 */
export const TABLECBLINKApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBLINKApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBLINKGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBLINK>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBLINKGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBLINK>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBLINKLinkIDGet(linkID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBLINKApi - factory interface
 * @export
 */
export const TABLECBLINKApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBLINKApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBLINKGet(options?: any): AxiosPromise<PagedTABLECBLINK> {
            return localVarFp.tABLECBLINKGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} linkID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBLINKLinkIDGet(linkID: number, options?: any): AxiosPromise<TABLECBLINK> {
            return localVarFp.tABLECBLINKLinkIDGet(linkID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBLINKApi - interface
 * @export
 * @interface TABLECBLINKApi
 */
export interface TABLECBLINKApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBLINKApiInterface
     */
    tABLECBLINKGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBLINK>;

    /**
     * 
     * @param {number} linkID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBLINKApiInterface
     */
    tABLECBLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECBLINK>;

}

/**
 * TABLECBLINKApi - object-oriented interface
 * @export
 * @class TABLECBLINKApi
 * @extends {BaseAPI}
 */
export class TABLECBLINKApi extends BaseAPI implements TABLECBLINKApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBLINKApi
     */
    public tABLECBLINKGet(options?: AxiosRequestConfig) {
        return TABLECBLINKApiFp(this.configuration).tABLECBLINKGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} linkID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBLINKApi
     */
    public tABLECBLINKLinkIDGet(linkID: number, options?: AxiosRequestConfig) {
        return TABLECBLINKApiFp(this.configuration).tABLECBLINKLinkIDGet(linkID, options).then((request) => request(this.axios, this.basePath));
    }
}
