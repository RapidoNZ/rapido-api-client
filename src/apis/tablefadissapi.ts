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
import { PagedTABLEFADISS } from '../models';
// @ts-ignore
import { TABLEFADISS } from '../models';
/**
 * TABLEFADISSApi - axios parameter creator
 * @export
 */
export const TABLEFADISSApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} dissectionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFADISSDissectionIDGet: async (dissectionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'dissectionID' is not null or undefined
            assertParamExists('tABLEFADISSDissectionIDGet', 'dissectionID', dissectionID)
            const localVarPath = `/TABLE_FADISS('{DissectionID}')`
                .replace(`{${"DissectionID"}}`, encodeURIComponent(String(dissectionID)));
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFADISSGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_FADISS`;
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
 * TABLEFADISSApi - functional programming interface
 * @export
 */
export const TABLEFADISSApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEFADISSApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} dissectionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFADISSDissectionIDGet(dissectionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEFADISS>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFADISSDissectionIDGet(dissectionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFADISSGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEFADISS>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFADISSGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEFADISSApi - factory interface
 * @export
 */
export const TABLEFADISSApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEFADISSApiFp(configuration)
    return {
        /**
         * 
         * @param {number} dissectionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFADISSDissectionIDGet(dissectionID: number, options?: any): AxiosPromise<TABLEFADISS> {
            return localVarFp.tABLEFADISSDissectionIDGet(dissectionID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFADISSGet(options?: any): AxiosPromise<PagedTABLEFADISS> {
            return localVarFp.tABLEFADISSGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEFADISSApi - interface
 * @export
 * @interface TABLEFADISSApi
 */
export interface TABLEFADISSApiInterface {
    /**
     * 
     * @param {number} dissectionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFADISSApiInterface
     */
    tABLEFADISSDissectionIDGet(dissectionID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEFADISS>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFADISSApiInterface
     */
    tABLEFADISSGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEFADISS>;

}

/**
 * TABLEFADISSApi - object-oriented interface
 * @export
 * @class TABLEFADISSApi
 * @extends {BaseAPI}
 */
export class TABLEFADISSApi extends BaseAPI implements TABLEFADISSApiInterface {
    /**
     * 
     * @param {number} dissectionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFADISSApi
     */
    public tABLEFADISSDissectionIDGet(dissectionID: number, options?: AxiosRequestConfig) {
        return TABLEFADISSApiFp(this.configuration).tABLEFADISSDissectionIDGet(dissectionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFADISSApi
     */
    public tABLEFADISSGet(options?: AxiosRequestConfig) {
        return TABLEFADISSApiFp(this.configuration).tABLEFADISSGet(options).then((request) => request(this.axios, this.basePath));
    }
}
