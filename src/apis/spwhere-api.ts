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
import { PagedSPWhere } from '../models';
// @ts-ignore
import { SPWhere } from '../models';
/**
 * SPWhereApi - axios parameter creator
 * @export
 */
export const SPWhereApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhereGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/SPWhere`;
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
        sPWhereSortOrderGet: async (sortOrder: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrder' is not null or undefined
            assertParamExists('sPWhereSortOrderGet', 'sortOrder', sortOrder)
            const localVarPath = `/SPWhere('{SortOrder}')`
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
         * @param {SPWhere} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhereSortOrderPatch: async (sortOrder: number, body: SPWhere, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrder' is not null or undefined
            assertParamExists('sPWhereSortOrderPatch', 'sortOrder', sortOrder)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('sPWhereSortOrderPatch', 'body', body)
            const localVarPath = `/SPWhere('{SortOrder}')`
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
         * @param {SPWhere} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhereSortOrderPut: async (sortOrder: number, body: SPWhere, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrder' is not null or undefined
            assertParamExists('sPWhereSortOrderPut', 'sortOrder', sortOrder)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('sPWhereSortOrderPut', 'body', body)
            const localVarPath = `/SPWhere('{SortOrder}')`
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
 * SPWhereApi - functional programming interface
 * @export
 */
export const SPWhereApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SPWhereApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sPWhereGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedSPWhere>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sPWhereGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sPWhereSortOrderGet(sortOrder: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SPWhere>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sPWhereSortOrderGet(sortOrder, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhere} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sPWhereSortOrderPatch(sortOrder: number, body: SPWhere, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sPWhereSortOrderPatch(sortOrder, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhere} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sPWhereSortOrderPut(sortOrder: number, body: SPWhere, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sPWhereSortOrderPut(sortOrder, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SPWhereApi - factory interface
 * @export
 */
export const SPWhereApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SPWhereApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhereGet(options?: any): AxiosPromise<PagedSPWhere> {
            return localVarFp.sPWhereGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhereSortOrderGet(sortOrder: number, options?: any): AxiosPromise<SPWhere> {
            return localVarFp.sPWhereSortOrderGet(sortOrder, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhere} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhereSortOrderPatch(sortOrder: number, body: SPWhere, options?: any): AxiosPromise<void> {
            return localVarFp.sPWhereSortOrderPatch(sortOrder, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sortOrder 
         * @param {SPWhere} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sPWhereSortOrderPut(sortOrder: number, body: SPWhere, options?: any): AxiosPromise<void> {
            return localVarFp.sPWhereSortOrderPut(sortOrder, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SPWhereApi - interface
 * @export
 * @interface SPWhereApi
 */
export interface SPWhereApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhereApiInterface
     */
    sPWhereGet(options?: AxiosRequestConfig): AxiosPromise<PagedSPWhere>;

    /**
     * 
     * @param {number} sortOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhereApiInterface
     */
    sPWhereSortOrderGet(sortOrder: number, options?: AxiosRequestConfig): AxiosPromise<SPWhere>;

    /**
     * 
     * @param {number} sortOrder 
     * @param {SPWhere} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhereApiInterface
     */
    sPWhereSortOrderPatch(sortOrder: number, body: SPWhere, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} sortOrder 
     * @param {SPWhere} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhereApiInterface
     */
    sPWhereSortOrderPut(sortOrder: number, body: SPWhere, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * SPWhereApi - object-oriented interface
 * @export
 * @class SPWhereApi
 * @extends {BaseAPI}
 */
export class SPWhereApi extends BaseAPI implements SPWhereApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhereApi
     */
    public sPWhereGet(options?: AxiosRequestConfig) {
        return SPWhereApiFp(this.configuration).sPWhereGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sortOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhereApi
     */
    public sPWhereSortOrderGet(sortOrder: number, options?: AxiosRequestConfig) {
        return SPWhereApiFp(this.configuration).sPWhereSortOrderGet(sortOrder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sortOrder 
     * @param {SPWhere} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhereApi
     */
    public sPWhereSortOrderPatch(sortOrder: number, body: SPWhere, options?: AxiosRequestConfig) {
        return SPWhereApiFp(this.configuration).sPWhereSortOrderPatch(sortOrder, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sortOrder 
     * @param {SPWhere} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SPWhereApi
     */
    public sPWhereSortOrderPut(sortOrder: number, body: SPWhere, options?: AxiosRequestConfig) {
        return SPWhereApiFp(this.configuration).sPWhereSortOrderPut(sortOrder, body, options).then((request) => request(this.axios, this.basePath));
    }
}
