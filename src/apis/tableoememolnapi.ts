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
import { PagedTABLEOEMEMOLN } from '../models';
// @ts-ignore
import { TABLEOEMEMOLN } from '../models';
/**
 * TABLEOEMEMOLNApi - axios parameter creator
 * @export
 */
export const TABLEOEMEMOLNApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOEMEMOLNGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_OEMEMOLN`;
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
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOEMEMOLNMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('tABLEOEMEMOLNMemoIDGet', 'memoID', memoID)
            const localVarPath = `/TABLE_OEMEMOLN('{MemoID}')`
                .replace(`{${"MemoID"}}`, encodeURIComponent(String(memoID)));
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
 * TABLEOEMEMOLNApi - functional programming interface
 * @export
 */
export const TABLEOEMEMOLNApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEOEMEMOLNApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEOEMEMOLNGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEOEMEMOLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEOEMEMOLNGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEOEMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEOEMEMOLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEOEMEMOLNMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEOEMEMOLNApi - factory interface
 * @export
 */
export const TABLEOEMEMOLNApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEOEMEMOLNApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOEMEMOLNGet(options?: any): AxiosPromise<PagedTABLEOEMEMOLN> {
            return localVarFp.tABLEOEMEMOLNGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOEMEMOLNMemoIDGet(memoID: number, options?: any): AxiosPromise<TABLEOEMEMOLN> {
            return localVarFp.tABLEOEMEMOLNMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEOEMEMOLNApi - interface
 * @export
 * @interface TABLEOEMEMOLNApi
 */
export interface TABLEOEMEMOLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOEMEMOLNApiInterface
     */
    tABLEOEMEMOLNGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEOEMEMOLN>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOEMEMOLNApiInterface
     */
    tABLEOEMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEOEMEMOLN>;

}

/**
 * TABLEOEMEMOLNApi - object-oriented interface
 * @export
 * @class TABLEOEMEMOLNApi
 * @extends {BaseAPI}
 */
export class TABLEOEMEMOLNApi extends BaseAPI implements TABLEOEMEMOLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOEMEMOLNApi
     */
    public tABLEOEMEMOLNGet(options?: AxiosRequestConfig) {
        return TABLEOEMEMOLNApiFp(this.configuration).tABLEOEMEMOLNGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOEMEMOLNApi
     */
    public tABLEOEMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return TABLEOEMEMOLNApiFp(this.configuration).tABLEOEMEMOLNMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }
}