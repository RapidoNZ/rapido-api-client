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
import { PagedTABLEAPWORD } from '../models';
// @ts-ignore
import { TABLEAPWORD } from '../models';
/**
 * TABLEAPWORDApi - axios parameter creator
 * @export
 */
export const TABLEAPWORDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPWORDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APWORD`;
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
        tABLEAPWORDWordGet: async (word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'word' is not null or undefined
            assertParamExists('tABLEAPWORDWordGet', 'word', word)
            const localVarPath = `/TABLE_APWORD('{Word}')`
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
 * TABLEAPWORDApi - functional programming interface
 * @export
 */
export const TABLEAPWORDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPWORDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPWORDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPWORDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPWORDWordGet(word: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPWORDWordGet(word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPWORDApi - factory interface
 * @export
 */
export const TABLEAPWORDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPWORDApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPWORDGet(options?: any): AxiosPromise<PagedTABLEAPWORD> {
            return localVarFp.tABLEAPWORDGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPWORDWordGet(word: string, options?: any): AxiosPromise<TABLEAPWORD> {
            return localVarFp.tABLEAPWORDWordGet(word, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPWORDApi - interface
 * @export
 * @interface TABLEAPWORDApi
 */
export interface TABLEAPWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPWORDApiInterface
     */
    tABLEAPWORDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPWORD>;

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPWORDApiInterface
     */
    tABLEAPWORDWordGet(word: string, options?: AxiosRequestConfig): AxiosPromise<TABLEAPWORD>;

}

/**
 * TABLEAPWORDApi - object-oriented interface
 * @export
 * @class TABLEAPWORDApi
 * @extends {BaseAPI}
 */
export class TABLEAPWORDApi extends BaseAPI implements TABLEAPWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPWORDApi
     */
    public tABLEAPWORDGet(options?: AxiosRequestConfig) {
        return TABLEAPWORDApiFp(this.configuration).tABLEAPWORDGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPWORDApi
     */
    public tABLEAPWORDWordGet(word: string, options?: AxiosRequestConfig) {
        return TABLEAPWORDApiFp(this.configuration).tABLEAPWORDWordGet(word, options).then((request) => request(this.axios, this.basePath));
    }
}
