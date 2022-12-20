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
import { PagedTABLEARAREA } from '../models';
// @ts-ignore
import { TABLEARAREA } from '../models';
/**
 * TABLEARAREAApi - axios parameter creator
 * @export
 */
export const TABLEARAREAApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARAREAGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ARAREA`;
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
        tABLEARAREASalesAreaCodeGet: async (salesAreaCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'salesAreaCode' is not null or undefined
            assertParamExists('tABLEARAREASalesAreaCodeGet', 'salesAreaCode', salesAreaCode)
            const localVarPath = `/TABLE_ARAREA('{SalesAreaCode}')`
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
 * TABLEARAREAApi - functional programming interface
 * @export
 */
export const TABLEARAREAApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEARAREAApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARAREAGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEARAREA>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARAREAGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} salesAreaCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARAREASalesAreaCodeGet(salesAreaCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEARAREA>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARAREASalesAreaCodeGet(salesAreaCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEARAREAApi - factory interface
 * @export
 */
export const TABLEARAREAApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEARAREAApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARAREAGet(options?: any): AxiosPromise<PagedTABLEARAREA> {
            return localVarFp.tABLEARAREAGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} salesAreaCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARAREASalesAreaCodeGet(salesAreaCode: string, options?: any): AxiosPromise<TABLEARAREA> {
            return localVarFp.tABLEARAREASalesAreaCodeGet(salesAreaCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEARAREAApi - interface
 * @export
 * @interface TABLEARAREAApi
 */
export interface TABLEARAREAApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARAREAApiInterface
     */
    tABLEARAREAGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEARAREA>;

    /**
     * 
     * @param {string} salesAreaCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARAREAApiInterface
     */
    tABLEARAREASalesAreaCodeGet(salesAreaCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEARAREA>;

}

/**
 * TABLEARAREAApi - object-oriented interface
 * @export
 * @class TABLEARAREAApi
 * @extends {BaseAPI}
 */
export class TABLEARAREAApi extends BaseAPI implements TABLEARAREAApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARAREAApi
     */
    public tABLEARAREAGet(options?: AxiosRequestConfig) {
        return TABLEARAREAApiFp(this.configuration).tABLEARAREAGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} salesAreaCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARAREAApi
     */
    public tABLEARAREASalesAreaCodeGet(salesAreaCode: string, options?: AxiosRequestConfig) {
        return TABLEARAREAApiFp(this.configuration).tABLEARAREASalesAreaCodeGet(salesAreaCode, options).then((request) => request(this.axios, this.basePath));
    }
}