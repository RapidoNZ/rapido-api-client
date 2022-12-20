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
import { PagedTABLEARPERBAL } from '../models';
// @ts-ignore
import { TABLEARPERBAL } from '../models';
/**
 * TABLEARPERBALApi - axios parameter creator
 * @export
 */
export const TABLEARPERBALApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARPERBALGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ARPERBAL`;
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
         * @param {string} salesPersonCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARPERBALSalesPersonCodeGet: async (salesPersonCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'salesPersonCode' is not null or undefined
            assertParamExists('tABLEARPERBALSalesPersonCodeGet', 'salesPersonCode', salesPersonCode)
            const localVarPath = `/TABLE_ARPERBAL('{SalesPersonCode}')`
                .replace(`{${"SalesPersonCode"}}`, encodeURIComponent(String(salesPersonCode)));
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
 * TABLEARPERBALApi - functional programming interface
 * @export
 */
export const TABLEARPERBALApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEARPERBALApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARPERBALGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEARPERBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARPERBALGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} salesPersonCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARPERBALSalesPersonCodeGet(salesPersonCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEARPERBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARPERBALSalesPersonCodeGet(salesPersonCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEARPERBALApi - factory interface
 * @export
 */
export const TABLEARPERBALApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEARPERBALApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARPERBALGet(options?: any): AxiosPromise<PagedTABLEARPERBAL> {
            return localVarFp.tABLEARPERBALGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} salesPersonCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARPERBALSalesPersonCodeGet(salesPersonCode: string, options?: any): AxiosPromise<TABLEARPERBAL> {
            return localVarFp.tABLEARPERBALSalesPersonCodeGet(salesPersonCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEARPERBALApi - interface
 * @export
 * @interface TABLEARPERBALApi
 */
export interface TABLEARPERBALApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARPERBALApiInterface
     */
    tABLEARPERBALGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEARPERBAL>;

    /**
     * 
     * @param {string} salesPersonCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARPERBALApiInterface
     */
    tABLEARPERBALSalesPersonCodeGet(salesPersonCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEARPERBAL>;

}

/**
 * TABLEARPERBALApi - object-oriented interface
 * @export
 * @class TABLEARPERBALApi
 * @extends {BaseAPI}
 */
export class TABLEARPERBALApi extends BaseAPI implements TABLEARPERBALApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARPERBALApi
     */
    public tABLEARPERBALGet(options?: AxiosRequestConfig) {
        return TABLEARPERBALApiFp(this.configuration).tABLEARPERBALGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} salesPersonCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARPERBALApi
     */
    public tABLEARPERBALSalesPersonCodeGet(salesPersonCode: string, options?: AxiosRequestConfig) {
        return TABLEARPERBALApiFp(this.configuration).tABLEARPERBALSalesPersonCodeGet(salesPersonCode, options).then((request) => request(this.axios, this.basePath));
    }
}