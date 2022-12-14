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
import { PagedTABLESPWHO } from '../models';
// @ts-ignore
import { TABLESPWHO } from '../models';
/**
 * TABLESPWHOApi - axios parameter creator
 * @export
 */
export const TABLESPWHOApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPWHOGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_SPWHO`;
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
        tABLESPWHOSortOrderGet: async (sortOrder: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrder' is not null or undefined
            assertParamExists('tABLESPWHOSortOrderGet', 'sortOrder', sortOrder)
            const localVarPath = `/TABLE_SPWHO('{SortOrder}')`
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
 * TABLESPWHOApi - functional programming interface
 * @export
 */
export const TABLESPWHOApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLESPWHOApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLESPWHOGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLESPWHO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLESPWHOGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLESPWHOSortOrderGet(sortOrder: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLESPWHO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLESPWHOSortOrderGet(sortOrder, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLESPWHOApi - factory interface
 * @export
 */
export const TABLESPWHOApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLESPWHOApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPWHOGet(options?: any): AxiosPromise<PagedTABLESPWHO> {
            return localVarFp.tABLESPWHOGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPWHOSortOrderGet(sortOrder: number, options?: any): AxiosPromise<TABLESPWHO> {
            return localVarFp.tABLESPWHOSortOrderGet(sortOrder, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLESPWHOApi - interface
 * @export
 * @interface TABLESPWHOApi
 */
export interface TABLESPWHOApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPWHOApiInterface
     */
    tABLESPWHOGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLESPWHO>;

    /**
     * 
     * @param {number} sortOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPWHOApiInterface
     */
    tABLESPWHOSortOrderGet(sortOrder: number, options?: AxiosRequestConfig): AxiosPromise<TABLESPWHO>;

}

/**
 * TABLESPWHOApi - object-oriented interface
 * @export
 * @class TABLESPWHOApi
 * @extends {BaseAPI}
 */
export class TABLESPWHOApi extends BaseAPI implements TABLESPWHOApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPWHOApi
     */
    public tABLESPWHOGet(options?: AxiosRequestConfig) {
        return TABLESPWHOApiFp(this.configuration).tABLESPWHOGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sortOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPWHOApi
     */
    public tABLESPWHOSortOrderGet(sortOrder: number, options?: AxiosRequestConfig) {
        return TABLESPWHOApiFp(this.configuration).tABLESPWHOSortOrderGet(sortOrder, options).then((request) => request(this.axios, this.basePath));
    }
}
