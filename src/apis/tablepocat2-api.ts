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
import { PagedTABLEPOCAT2 } from '../models';
// @ts-ignore
import { TABLEPOCAT2 } from '../models';
/**
 * TABLEPOCAT2Api - axios parameter creator
 * @export
 */
export const TABLEPOCAT2ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOCAT2CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('tABLEPOCAT2CodeGet', 'code', code)
            const localVarPath = `/TABLE_POCAT2('{Code}')`
                .replace(`{${"Code"}}`, encodeURIComponent(String(code)));
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
        tABLEPOCAT2Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_POCAT2`;
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
 * TABLEPOCAT2Api - functional programming interface
 * @export
 */
export const TABLEPOCAT2ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEPOCAT2ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEPOCAT2CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEPOCAT2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEPOCAT2CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEPOCAT2Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEPOCAT2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEPOCAT2Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEPOCAT2Api - factory interface
 * @export
 */
export const TABLEPOCAT2ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEPOCAT2ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOCAT2CodeGet(code: string, options?: any): AxiosPromise<TABLEPOCAT2> {
            return localVarFp.tABLEPOCAT2CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOCAT2Get(options?: any): AxiosPromise<PagedTABLEPOCAT2> {
            return localVarFp.tABLEPOCAT2Get(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEPOCAT2Api - interface
 * @export
 * @interface TABLEPOCAT2Api
 */
export interface TABLEPOCAT2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOCAT2ApiInterface
     */
    tABLEPOCAT2CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<TABLEPOCAT2>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOCAT2ApiInterface
     */
    tABLEPOCAT2Get(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEPOCAT2>;

}

/**
 * TABLEPOCAT2Api - object-oriented interface
 * @export
 * @class TABLEPOCAT2Api
 * @extends {BaseAPI}
 */
export class TABLEPOCAT2Api extends BaseAPI implements TABLEPOCAT2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOCAT2Api
     */
    public tABLEPOCAT2CodeGet(code: string, options?: AxiosRequestConfig) {
        return TABLEPOCAT2ApiFp(this.configuration).tABLEPOCAT2CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOCAT2Api
     */
    public tABLEPOCAT2Get(options?: AxiosRequestConfig) {
        return TABLEPOCAT2ApiFp(this.configuration).tABLEPOCAT2Get(options).then((request) => request(this.axios, this.basePath));
    }
}
