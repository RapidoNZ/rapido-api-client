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
import { PagedTABLEAPSHCAT1 } from '../models';
// @ts-ignore
import { TABLEAPSHCAT1 } from '../models';
/**
 * TABLEAPSHCAT1Api - axios parameter creator
 * @export
 */
export const TABLEAPSHCAT1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPSHCAT1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('tABLEAPSHCAT1CodeGet', 'code', code)
            const localVarPath = `/TABLE_APSHCAT1('{Code}')`
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
        tABLEAPSHCAT1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APSHCAT1`;
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
 * TABLEAPSHCAT1Api - functional programming interface
 * @export
 */
export const TABLEAPSHCAT1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPSHCAT1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPSHCAT1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPSHCAT1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPSHCAT1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPSHCAT1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPSHCAT1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPSHCAT1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPSHCAT1Api - factory interface
 * @export
 */
export const TABLEAPSHCAT1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPSHCAT1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPSHCAT1CodeGet(code: string, options?: any): AxiosPromise<TABLEAPSHCAT1> {
            return localVarFp.tABLEAPSHCAT1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPSHCAT1Get(options?: any): AxiosPromise<PagedTABLEAPSHCAT1> {
            return localVarFp.tABLEAPSHCAT1Get(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPSHCAT1Api - interface
 * @export
 * @interface TABLEAPSHCAT1Api
 */
export interface TABLEAPSHCAT1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPSHCAT1ApiInterface
     */
    tABLEAPSHCAT1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<TABLEAPSHCAT1>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPSHCAT1ApiInterface
     */
    tABLEAPSHCAT1Get(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPSHCAT1>;

}

/**
 * TABLEAPSHCAT1Api - object-oriented interface
 * @export
 * @class TABLEAPSHCAT1Api
 * @extends {BaseAPI}
 */
export class TABLEAPSHCAT1Api extends BaseAPI implements TABLEAPSHCAT1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPSHCAT1Api
     */
    public tABLEAPSHCAT1CodeGet(code: string, options?: AxiosRequestConfig) {
        return TABLEAPSHCAT1ApiFp(this.configuration).tABLEAPSHCAT1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPSHCAT1Api
     */
    public tABLEAPSHCAT1Get(options?: AxiosRequestConfig) {
        return TABLEAPSHCAT1ApiFp(this.configuration).tABLEAPSHCAT1Get(options).then((request) => request(this.axios, this.basePath));
    }
}
