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
import { PagedTABLEARAREBAL } from '../models';
// @ts-ignore
import { TABLEARAREBAL } from '../models';
/**
 * TABLEARAREBALApi - axios parameter creator
 * @export
 */
export const TABLEARAREBALApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARAREBALGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ARAREBAL`;
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
         * @param {string} salesAreaCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARAREBALSalesAreaCodeGet: async (salesAreaCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'salesAreaCode' is not null or undefined
            assertParamExists('tABLEARAREBALSalesAreaCodeGet', 'salesAreaCode', salesAreaCode)
            const localVarPath = `/TABLE_ARAREBAL('{SalesAreaCode}')`
                .replace(`{${"SalesAreaCode"}}`, encodeURIComponent(String(salesAreaCode)));
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
 * TABLEARAREBALApi - functional programming interface
 * @export
 */
export const TABLEARAREBALApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEARAREBALApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARAREBALGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEARAREBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARAREBALGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} salesAreaCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARAREBALSalesAreaCodeGet(salesAreaCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEARAREBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARAREBALSalesAreaCodeGet(salesAreaCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEARAREBALApi - factory interface
 * @export
 */
export const TABLEARAREBALApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEARAREBALApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARAREBALGet(options?: any): AxiosPromise<PagedTABLEARAREBAL> {
            return localVarFp.tABLEARAREBALGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} salesAreaCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARAREBALSalesAreaCodeGet(salesAreaCode: string, options?: any): AxiosPromise<TABLEARAREBAL> {
            return localVarFp.tABLEARAREBALSalesAreaCodeGet(salesAreaCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEARAREBALApi - interface
 * @export
 * @interface TABLEARAREBALApi
 */
export interface TABLEARAREBALApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARAREBALApiInterface
     */
    tABLEARAREBALGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEARAREBAL>;

    /**
     * 
     * @param {string} salesAreaCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARAREBALApiInterface
     */
    tABLEARAREBALSalesAreaCodeGet(salesAreaCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEARAREBAL>;

}

/**
 * TABLEARAREBALApi - object-oriented interface
 * @export
 * @class TABLEARAREBALApi
 * @extends {BaseAPI}
 */
export class TABLEARAREBALApi extends BaseAPI implements TABLEARAREBALApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARAREBALApi
     */
    public tABLEARAREBALGet(options?: AxiosRequestConfig) {
        return TABLEARAREBALApiFp(this.configuration).tABLEARAREBALGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} salesAreaCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARAREBALApi
     */
    public tABLEARAREBALSalesAreaCodeGet(salesAreaCode: string, options?: AxiosRequestConfig) {
        return TABLEARAREBALApiFp(this.configuration).tABLEARAREBALSalesAreaCodeGet(salesAreaCode, options).then((request) => request(this.axios, this.basePath));
    }
}
