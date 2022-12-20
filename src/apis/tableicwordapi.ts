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
import { PagedTABLEICWORD } from '../models';
// @ts-ignore
import { TABLEICWORD } from '../models';
/**
 * TABLEICWORDApi - axios parameter creator
 * @export
 */
export const TABLEICWORDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICWORDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ICWORD`;
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
        tABLEICWORDWordGet: async (word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'word' is not null or undefined
            assertParamExists('tABLEICWORDWordGet', 'word', word)
            const localVarPath = `/TABLE_ICWORD('{Word}')`
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
 * TABLEICWORDApi - functional programming interface
 * @export
 */
export const TABLEICWORDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEICWORDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICWORDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEICWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICWORDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICWORDWordGet(word: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEICWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICWORDWordGet(word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEICWORDApi - factory interface
 * @export
 */
export const TABLEICWORDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEICWORDApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICWORDGet(options?: any): AxiosPromise<PagedTABLEICWORD> {
            return localVarFp.tABLEICWORDGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICWORDWordGet(word: string, options?: any): AxiosPromise<TABLEICWORD> {
            return localVarFp.tABLEICWORDWordGet(word, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEICWORDApi - interface
 * @export
 * @interface TABLEICWORDApi
 */
export interface TABLEICWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICWORDApiInterface
     */
    tABLEICWORDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEICWORD>;

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICWORDApiInterface
     */
    tABLEICWORDWordGet(word: string, options?: AxiosRequestConfig): AxiosPromise<TABLEICWORD>;

}

/**
 * TABLEICWORDApi - object-oriented interface
 * @export
 * @class TABLEICWORDApi
 * @extends {BaseAPI}
 */
export class TABLEICWORDApi extends BaseAPI implements TABLEICWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICWORDApi
     */
    public tABLEICWORDGet(options?: AxiosRequestConfig) {
        return TABLEICWORDApiFp(this.configuration).tABLEICWORDGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICWORDApi
     */
    public tABLEICWORDWordGet(word: string, options?: AxiosRequestConfig) {
        return TABLEICWORDApiFp(this.configuration).tABLEICWORDWordGet(word, options).then((request) => request(this.axios, this.basePath));
    }
}