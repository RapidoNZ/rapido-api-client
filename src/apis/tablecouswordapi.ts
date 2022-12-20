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
import { PagedTABLECOUSWORD } from '../models';
// @ts-ignore
import { TABLECOUSWORD } from '../models';
/**
 * TABLECOUSWORDApi - axios parameter creator
 * @export
 */
export const TABLECOUSWORDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOUSWORDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_COUSWORD`;
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
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOUSWORDWordGet: async (word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'word' is not null or undefined
            assertParamExists('tABLECOUSWORDWordGet', 'word', word)
            const localVarPath = `/TABLE_COUSWORD('{Word}')`
                .replace(`{${"Word"}}`, encodeURIComponent(String(word)));
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
 * TABLECOUSWORDApi - functional programming interface
 * @export
 */
export const TABLECOUSWORDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECOUSWORDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOUSWORDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECOUSWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOUSWORDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOUSWORDWordGet(word: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECOUSWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOUSWORDWordGet(word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECOUSWORDApi - factory interface
 * @export
 */
export const TABLECOUSWORDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECOUSWORDApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOUSWORDGet(options?: any): AxiosPromise<PagedTABLECOUSWORD> {
            return localVarFp.tABLECOUSWORDGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOUSWORDWordGet(word: string, options?: any): AxiosPromise<TABLECOUSWORD> {
            return localVarFp.tABLECOUSWORDWordGet(word, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECOUSWORDApi - interface
 * @export
 * @interface TABLECOUSWORDApi
 */
export interface TABLECOUSWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOUSWORDApiInterface
     */
    tABLECOUSWORDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECOUSWORD>;

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOUSWORDApiInterface
     */
    tABLECOUSWORDWordGet(word: string, options?: AxiosRequestConfig): AxiosPromise<TABLECOUSWORD>;

}

/**
 * TABLECOUSWORDApi - object-oriented interface
 * @export
 * @class TABLECOUSWORDApi
 * @extends {BaseAPI}
 */
export class TABLECOUSWORDApi extends BaseAPI implements TABLECOUSWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOUSWORDApi
     */
    public tABLECOUSWORDGet(options?: AxiosRequestConfig) {
        return TABLECOUSWORDApiFp(this.configuration).tABLECOUSWORDGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOUSWORDApi
     */
    public tABLECOUSWORDWordGet(word: string, options?: AxiosRequestConfig) {
        return TABLECOUSWORDApiFp(this.configuration).tABLECOUSWORDWordGet(word, options).then((request) => request(this.axios, this.basePath));
    }
}