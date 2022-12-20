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
import { PagedTABLEARANWORD } from '../models';
// @ts-ignore
import { TABLEARANWORD } from '../models';
/**
 * TABLEARANWORDApi - axios parameter creator
 * @export
 */
export const TABLEARANWORDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARANWORDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ARANWORD`;
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
        tABLEARANWORDWordGet: async (word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'word' is not null or undefined
            assertParamExists('tABLEARANWORDWordGet', 'word', word)
            const localVarPath = `/TABLE_ARANWORD('{Word}')`
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
 * TABLEARANWORDApi - functional programming interface
 * @export
 */
export const TABLEARANWORDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEARANWORDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARANWORDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEARANWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARANWORDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARANWORDWordGet(word: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEARANWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARANWORDWordGet(word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEARANWORDApi - factory interface
 * @export
 */
export const TABLEARANWORDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEARANWORDApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARANWORDGet(options?: any): AxiosPromise<PagedTABLEARANWORD> {
            return localVarFp.tABLEARANWORDGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARANWORDWordGet(word: string, options?: any): AxiosPromise<TABLEARANWORD> {
            return localVarFp.tABLEARANWORDWordGet(word, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEARANWORDApi - interface
 * @export
 * @interface TABLEARANWORDApi
 */
export interface TABLEARANWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARANWORDApiInterface
     */
    tABLEARANWORDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEARANWORD>;

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARANWORDApiInterface
     */
    tABLEARANWORDWordGet(word: string, options?: AxiosRequestConfig): AxiosPromise<TABLEARANWORD>;

}

/**
 * TABLEARANWORDApi - object-oriented interface
 * @export
 * @class TABLEARANWORDApi
 * @extends {BaseAPI}
 */
export class TABLEARANWORDApi extends BaseAPI implements TABLEARANWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARANWORDApi
     */
    public tABLEARANWORDGet(options?: AxiosRequestConfig) {
        return TABLEARANWORDApiFp(this.configuration).tABLEARANWORDGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARANWORDApi
     */
    public tABLEARANWORDWordGet(word: string, options?: AxiosRequestConfig) {
        return TABLEARANWORDApiFp(this.configuration).tABLEARANWORDWordGet(word, options).then((request) => request(this.axios, this.basePath));
    }
}
