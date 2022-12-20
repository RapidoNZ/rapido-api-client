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
import { PagedTABLEINCAT2 } from '../models';
// @ts-ignore
import { TABLEINCAT2 } from '../models';
/**
 * TABLEINCAT2Api - axios parameter creator
 * @export
 */
export const TABLEINCAT2ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINCAT2CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('tABLEINCAT2CodeGet', 'code', code)
            const localVarPath = `/TABLE_INCAT2('{Code}')`
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
        tABLEINCAT2Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_INCAT2`;
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
 * TABLEINCAT2Api - functional programming interface
 * @export
 */
export const TABLEINCAT2ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEINCAT2ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEINCAT2CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEINCAT2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEINCAT2CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEINCAT2Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEINCAT2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEINCAT2Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEINCAT2Api - factory interface
 * @export
 */
export const TABLEINCAT2ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEINCAT2ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINCAT2CodeGet(code: string, options?: any): AxiosPromise<TABLEINCAT2> {
            return localVarFp.tABLEINCAT2CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEINCAT2Get(options?: any): AxiosPromise<PagedTABLEINCAT2> {
            return localVarFp.tABLEINCAT2Get(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEINCAT2Api - interface
 * @export
 * @interface TABLEINCAT2Api
 */
export interface TABLEINCAT2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINCAT2ApiInterface
     */
    tABLEINCAT2CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<TABLEINCAT2>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINCAT2ApiInterface
     */
    tABLEINCAT2Get(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEINCAT2>;

}

/**
 * TABLEINCAT2Api - object-oriented interface
 * @export
 * @class TABLEINCAT2Api
 * @extends {BaseAPI}
 */
export class TABLEINCAT2Api extends BaseAPI implements TABLEINCAT2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINCAT2Api
     */
    public tABLEINCAT2CodeGet(code: string, options?: AxiosRequestConfig) {
        return TABLEINCAT2ApiFp(this.configuration).tABLEINCAT2CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEINCAT2Api
     */
    public tABLEINCAT2Get(options?: AxiosRequestConfig) {
        return TABLEINCAT2ApiFp(this.configuration).tABLEINCAT2Get(options).then((request) => request(this.axios, this.basePath));
    }
}
