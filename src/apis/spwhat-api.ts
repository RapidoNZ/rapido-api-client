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
import { PagedSPWhat } from '../models';
// @ts-ignore
import { SPWhat } from '../models';
/**
 * SPWhatApi - axios parameter creator
 * @export
 */
export const SPWhatApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhatGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/SPWhat`;
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
        sPWhatSortOrderGet: async (sortOrder: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrder' is not null or undefined
            assertParamExists('sPWhatSortOrderGet', 'sortOrder', sortOrder)
            const localVarPath = `/SPWhat('{SortOrder}')`
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
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhat} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhatSortOrderPatch: async (sortOrder: number, body: SPWhat, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrder' is not null or undefined
            assertParamExists('sPWhatSortOrderPatch', 'sortOrder', sortOrder)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('sPWhatSortOrderPatch', 'body', body)
            const localVarPath = `/SPWhat('{SortOrder}')`
                .replace(`{${"SortOrder"}}`, encodeURIComponent(String(sortOrder)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhat} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhatSortOrderPut: async (sortOrder: number, body: SPWhat, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrder' is not null or undefined
            assertParamExists('sPWhatSortOrderPut', 'sortOrder', sortOrder)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('sPWhatSortOrderPut', 'body', body)
            const localVarPath = `/SPWhat('{SortOrder}')`
                .replace(`{${"SortOrder"}}`, encodeURIComponent(String(sortOrder)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SPWhatApi - functional programming interface
 * @export
 */
export const SPWhatApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SPWhatApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sPWhatGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedSPWhat>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sPWhatGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sPWhatSortOrderGet(sortOrder: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SPWhat>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sPWhatSortOrderGet(sortOrder, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhat} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sPWhatSortOrderPatch(sortOrder: number, body: SPWhat, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sPWhatSortOrderPatch(sortOrder, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhat} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sPWhatSortOrderPut(sortOrder: number, body: SPWhat, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sPWhatSortOrderPut(sortOrder, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SPWhatApi - factory interface
 * @export
 */
export const SPWhatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SPWhatApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhatGet(options?: any): AxiosPromise<PagedSPWhat> {
            return localVarFp.sPWhatGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhatSortOrderGet(sortOrder: number, options?: any): AxiosPromise<SPWhat> {
            return localVarFp.sPWhatSortOrderGet(sortOrder, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhat} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhatSortOrderPatch(sortOrder: number, body: SPWhat, options?: any): AxiosPromise<void> {
            return localVarFp.sPWhatSortOrderPatch(sortOrder, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhat} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhatSortOrderPut(sortOrder: number, body: SPWhat, options?: any): AxiosPromise<void> {
            return localVarFp.sPWhatSortOrderPut(sortOrder, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SPWhatApi - interface
 * @export
 * @interface SPWhatApi
 */
export interface SPWhatApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhatApiInterface
     */
    sPWhatGet(options?: AxiosRequestConfig): AxiosPromise<PagedSPWhat>;

    /**
     * 
     * @param {number} sortOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhatApiInterface
     */
    sPWhatSortOrderGet(sortOrder: number, options?: AxiosRequestConfig): AxiosPromise<SPWhat>;

    /**
     * 
     * @param {number} sortOrder 
     * @param {SPWhat} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhatApiInterface
     */
    sPWhatSortOrderPatch(sortOrder: number, body: SPWhat, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} sortOrder 
     * @param {SPWhat} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhatApiInterface
     */
    sPWhatSortOrderPut(sortOrder: number, body: SPWhat, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * SPWhatApi - object-oriented interface
 * @export
 * @class SPWhatApi
 * @extends {BaseAPI}
 */
export class SPWhatApi extends BaseAPI implements SPWhatApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhatApi
     */
    public sPWhatGet(options?: AxiosRequestConfig) {
        return SPWhatApiFp(this.configuration).sPWhatGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sortOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhatApi
     */
    public sPWhatSortOrderGet(sortOrder: number, options?: AxiosRequestConfig) {
        return SPWhatApiFp(this.configuration).sPWhatSortOrderGet(sortOrder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sortOrder 
     * @param {SPWhat} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhatApi
     */
    public sPWhatSortOrderPatch(sortOrder: number, body: SPWhat, options?: AxiosRequestConfig) {
        return SPWhatApiFp(this.configuration).sPWhatSortOrderPatch(sortOrder, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sortOrder 
     * @param {SPWhat} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhatApi
     */
    public sPWhatSortOrderPut(sortOrder: number, body: SPWhat, options?: AxiosRequestConfig) {
        return SPWhatApiFp(this.configuration).sPWhatSortOrderPut(sortOrder, body, options).then((request) => request(this.axios, this.basePath));
    }
}
