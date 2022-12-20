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
import { PagedTABLESPWHAT } from '../models';
// @ts-ignore
import { TABLESPWHAT } from '../models';
/**
 * TABLESPWHATApi - axios parameter creator
 * @export
 */
export const TABLESPWHATApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPWHATGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_SPWHAT`;
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
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPWHATSortOrderGet: async (sortOrder: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrder' is not null or undefined
            assertParamExists('tABLESPWHATSortOrderGet', 'sortOrder', sortOrder)
            const localVarPath = `/TABLE_SPWHAT('{SortOrder}')`
                .replace(`{${"SortOrder"}}`, encodeURIComponent(String(sortOrder)));
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
 * TABLESPWHATApi - functional programming interface
 * @export
 */
export const TABLESPWHATApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLESPWHATApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLESPWHATGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLESPWHAT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLESPWHATGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLESPWHATSortOrderGet(sortOrder: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLESPWHAT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLESPWHATSortOrderGet(sortOrder, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLESPWHATApi - factory interface
 * @export
 */
export const TABLESPWHATApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLESPWHATApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPWHATGet(options?: any): AxiosPromise<PagedTABLESPWHAT> {
            return localVarFp.tABLESPWHATGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPWHATSortOrderGet(sortOrder: number, options?: any): AxiosPromise<TABLESPWHAT> {
            return localVarFp.tABLESPWHATSortOrderGet(sortOrder, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLESPWHATApi - interface
 * @export
 * @interface TABLESPWHATApi
 */
export interface TABLESPWHATApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPWHATApiInterface
     */
    tABLESPWHATGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLESPWHAT>;

    /**
     * 
     * @param {number} sortOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPWHATApiInterface
     */
    tABLESPWHATSortOrderGet(sortOrder: number, options?: AxiosRequestConfig): AxiosPromise<TABLESPWHAT>;

}

/**
 * TABLESPWHATApi - object-oriented interface
 * @export
 * @class TABLESPWHATApi
 * @extends {BaseAPI}
 */
export class TABLESPWHATApi extends BaseAPI implements TABLESPWHATApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPWHATApi
     */
    public tABLESPWHATGet(options?: AxiosRequestConfig) {
        return TABLESPWHATApiFp(this.configuration).tABLESPWHATGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sortOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPWHATApi
     */
    public tABLESPWHATSortOrderGet(sortOrder: number, options?: AxiosRequestConfig) {
        return TABLESPWHATApiFp(this.configuration).tABLESPWHATSortOrderGet(sortOrder, options).then((request) => request(this.axios, this.basePath));
    }
}