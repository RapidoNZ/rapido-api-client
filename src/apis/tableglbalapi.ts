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
import { PagedTABLEGLBAL } from '../models';
// @ts-ignore
import { TABLEGLBAL } from '../models';
/**
 * TABLEGLBALApi - axios parameter creator
 * @export
 */
export const TABLEGLBALApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} accountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLBALAccountCodeGet: async (accountCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountCode' is not null or undefined
            assertParamExists('tABLEGLBALAccountCodeGet', 'accountCode', accountCode)
            const localVarPath = `/TABLE_GLBAL('{AccountCode}')`
                .replace(`{${"AccountCode"}}`, encodeURIComponent(String(accountCode)));
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
        tABLEGLBALGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_GLBAL`;
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
 * TABLEGLBALApi - functional programming interface
 * @export
 */
export const TABLEGLBALApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEGLBALApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} accountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLBALAccountCodeGet(accountCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEGLBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLBALAccountCodeGet(accountCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLBALGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEGLBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLBALGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEGLBALApi - factory interface
 * @export
 */
export const TABLEGLBALApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEGLBALApiFp(configuration)
    return {
        /**
         * 
         * @param {string} accountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLBALAccountCodeGet(accountCode: string, options?: any): AxiosPromise<TABLEGLBAL> {
            return localVarFp.tABLEGLBALAccountCodeGet(accountCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLBALGet(options?: any): AxiosPromise<PagedTABLEGLBAL> {
            return localVarFp.tABLEGLBALGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEGLBALApi - interface
 * @export
 * @interface TABLEGLBALApi
 */
export interface TABLEGLBALApiInterface {
    /**
     * 
     * @param {string} accountCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLBALApiInterface
     */
    tABLEGLBALAccountCodeGet(accountCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEGLBAL>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLBALApiInterface
     */
    tABLEGLBALGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEGLBAL>;

}

/**
 * TABLEGLBALApi - object-oriented interface
 * @export
 * @class TABLEGLBALApi
 * @extends {BaseAPI}
 */
export class TABLEGLBALApi extends BaseAPI implements TABLEGLBALApiInterface {
    /**
     * 
     * @param {string} accountCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLBALApi
     */
    public tABLEGLBALAccountCodeGet(accountCode: string, options?: AxiosRequestConfig) {
        return TABLEGLBALApiFp(this.configuration).tABLEGLBALAccountCodeGet(accountCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLBALApi
     */
    public tABLEGLBALGet(options?: AxiosRequestConfig) {
        return TABLEGLBALApiFp(this.configuration).tABLEGLBALGet(options).then((request) => request(this.axios, this.basePath));
    }
}