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
import { PagedTABLEINMEMOLN } from '../models';
// @ts-ignore
import { TABLEINMEMOLN } from '../models';
/**
 * TABLEINMEMOLNApi - axios parameter creator
 * @export
 */
export const TABLEINMEMOLNApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINMEMOLNGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_INMEMOLN`;
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
        tABLEINMEMOLNMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('tABLEINMEMOLNMemoIDGet', 'memoID', memoID)
            const localVarPath = `/TABLE_INMEMOLN('{MemoID}')`
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
 * TABLEINMEMOLNApi - functional programming interface
 * @export
 */
export const TABLEINMEMOLNApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEINMEMOLNApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEINMEMOLNGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEINMEMOLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEINMEMOLNGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEINMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEINMEMOLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEINMEMOLNMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEINMEMOLNApi - factory interface
 * @export
 */
export const TABLEINMEMOLNApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEINMEMOLNApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINMEMOLNGet(options?: any): AxiosPromise<PagedTABLEINMEMOLN> {
            return localVarFp.tABLEINMEMOLNGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINMEMOLNMemoIDGet(memoID: number, options?: any): AxiosPromise<TABLEINMEMOLN> {
            return localVarFp.tABLEINMEMOLNMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEINMEMOLNApi - interface
 * @export
 * @interface TABLEINMEMOLNApi
 */
export interface TABLEINMEMOLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINMEMOLNApiInterface
     */
    tABLEINMEMOLNGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEINMEMOLN>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINMEMOLNApiInterface
     */
    tABLEINMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEINMEMOLN>;

}

/**
 * TABLEINMEMOLNApi - object-oriented interface
 * @export
 * @class TABLEINMEMOLNApi
 * @extends {BaseAPI}
 */
export class TABLEINMEMOLNApi extends BaseAPI implements TABLEINMEMOLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINMEMOLNApi
     */
    public tABLEINMEMOLNGet(options?: AxiosRequestConfig) {
        return TABLEINMEMOLNApiFp(this.configuration).tABLEINMEMOLNGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINMEMOLNApi
     */
    public tABLEINMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return TABLEINMEMOLNApiFp(this.configuration).tABLEINMEMOLNMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }
}