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
import { PagedTABLEINMEMO } from '../models';
// @ts-ignore
import { TABLEINMEMO } from '../models';
/**
 * TABLEINMEMOApi - axios parameter creator
 * @export
 */
export const TABLEINMEMOApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINMEMOGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_INMEMO`;
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
        tABLEINMEMOMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('tABLEINMEMOMemoIDGet', 'memoID', memoID)
            const localVarPath = `/TABLE_INMEMO('{MemoID}')`
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
 * TABLEINMEMOApi - functional programming interface
 * @export
 */
export const TABLEINMEMOApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEINMEMOApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEINMEMOGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEINMEMO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEINMEMOGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEINMEMOMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEINMEMO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEINMEMOMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEINMEMOApi - factory interface
 * @export
 */
export const TABLEINMEMOApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEINMEMOApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINMEMOGet(options?: any): AxiosPromise<PagedTABLEINMEMO> {
            return localVarFp.tABLEINMEMOGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINMEMOMemoIDGet(memoID: number, options?: any): AxiosPromise<TABLEINMEMO> {
            return localVarFp.tABLEINMEMOMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEINMEMOApi - interface
 * @export
 * @interface TABLEINMEMOApi
 */
export interface TABLEINMEMOApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINMEMOApiInterface
     */
    tABLEINMEMOGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEINMEMO>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINMEMOApiInterface
     */
    tABLEINMEMOMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEINMEMO>;

}

/**
 * TABLEINMEMOApi - object-oriented interface
 * @export
 * @class TABLEINMEMOApi
 * @extends {BaseAPI}
 */
export class TABLEINMEMOApi extends BaseAPI implements TABLEINMEMOApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINMEMOApi
     */
    public tABLEINMEMOGet(options?: AxiosRequestConfig) {
        return TABLEINMEMOApiFp(this.configuration).tABLEINMEMOGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINMEMOApi
     */
    public tABLEINMEMOMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return TABLEINMEMOApiFp(this.configuration).tABLEINMEMOMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }
}
