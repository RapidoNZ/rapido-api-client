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
import { PagedTABLECBCAT1 } from '../models';
// @ts-ignore
import { TABLECBCAT1 } from '../models';
/**
 * TABLECBCAT1Api - axios parameter creator
 * @export
 */
export const TABLECBCAT1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBCAT1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('tABLECBCAT1CodeGet', 'code', code)
            const localVarPath = `/TABLE_CBCAT1('{Code}')`
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
        tABLECBCAT1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBCAT1`;
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
 * TABLECBCAT1Api - functional programming interface
 * @export
 */
export const TABLECBCAT1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBCAT1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBCAT1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBCAT1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBCAT1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBCAT1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBCAT1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBCAT1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBCAT1Api - factory interface
 * @export
 */
export const TABLECBCAT1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBCAT1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBCAT1CodeGet(code: string, options?: any): AxiosPromise<TABLECBCAT1> {
            return localVarFp.tABLECBCAT1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBCAT1Get(options?: any): AxiosPromise<PagedTABLECBCAT1> {
            return localVarFp.tABLECBCAT1Get(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBCAT1Api - interface
 * @export
 * @interface TABLECBCAT1Api
 */
export interface TABLECBCAT1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBCAT1ApiInterface
     */
    tABLECBCAT1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<TABLECBCAT1>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBCAT1ApiInterface
     */
    tABLECBCAT1Get(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBCAT1>;

}

/**
 * TABLECBCAT1Api - object-oriented interface
 * @export
 * @class TABLECBCAT1Api
 * @extends {BaseAPI}
 */
export class TABLECBCAT1Api extends BaseAPI implements TABLECBCAT1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBCAT1Api
     */
    public tABLECBCAT1CodeGet(code: string, options?: AxiosRequestConfig) {
        return TABLECBCAT1ApiFp(this.configuration).tABLECBCAT1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBCAT1Api
     */
    public tABLECBCAT1Get(options?: AxiosRequestConfig) {
        return TABLECBCAT1ApiFp(this.configuration).tABLECBCAT1Get(options).then((request) => request(this.axios, this.basePath));
    }
}