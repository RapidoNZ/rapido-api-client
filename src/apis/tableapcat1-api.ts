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
import { PagedTABLEAPCAT1 } from '../models';
// @ts-ignore
import { TABLEAPCAT1 } from '../models';
/**
 * TABLEAPCAT1Api - axios parameter creator
 * @export
 */
export const TABLEAPCAT1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCAT1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('tABLEAPCAT1CodeGet', 'code', code)
            const localVarPath = `/TABLE_APCAT1('{Code}')`
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
        tABLEAPCAT1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APCAT1`;
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
 * TABLEAPCAT1Api - functional programming interface
 * @export
 */
export const TABLEAPCAT1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPCAT1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPCAT1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPCAT1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPCAT1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPCAT1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPCAT1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPCAT1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPCAT1Api - factory interface
 * @export
 */
export const TABLEAPCAT1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPCAT1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCAT1CodeGet(code: string, options?: any): AxiosPromise<TABLEAPCAT1> {
            return localVarFp.tABLEAPCAT1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCAT1Get(options?: any): AxiosPromise<PagedTABLEAPCAT1> {
            return localVarFp.tABLEAPCAT1Get(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPCAT1Api - interface
 * @export
 * @interface TABLEAPCAT1Api
 */
export interface TABLEAPCAT1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCAT1ApiInterface
     */
    tABLEAPCAT1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<TABLEAPCAT1>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCAT1ApiInterface
     */
    tABLEAPCAT1Get(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPCAT1>;

}

/**
 * TABLEAPCAT1Api - object-oriented interface
 * @export
 * @class TABLEAPCAT1Api
 * @extends {BaseAPI}
 */
export class TABLEAPCAT1Api extends BaseAPI implements TABLEAPCAT1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCAT1Api
     */
    public tABLEAPCAT1CodeGet(code: string, options?: AxiosRequestConfig) {
        return TABLEAPCAT1ApiFp(this.configuration).tABLEAPCAT1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCAT1Api
     */
    public tABLEAPCAT1Get(options?: AxiosRequestConfig) {
        return TABLEAPCAT1ApiFp(this.configuration).tABLEAPCAT1Get(options).then((request) => request(this.axios, this.basePath));
    }
}
