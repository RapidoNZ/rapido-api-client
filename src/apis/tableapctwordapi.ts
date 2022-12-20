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
import { PagedTABLEAPCTWORD } from '../models';
// @ts-ignore
import { TABLEAPCTWORD } from '../models';
/**
 * TABLEAPCTWORDApi - axios parameter creator
 * @export
 */
export const TABLEAPCTWORDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCTWORDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APCTWORD`;
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
        tABLEAPCTWORDWordGet: async (word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'word' is not null or undefined
            assertParamExists('tABLEAPCTWORDWordGet', 'word', word)
            const localVarPath = `/TABLE_APCTWORD('{Word}')`
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
 * TABLEAPCTWORDApi - functional programming interface
 * @export
 */
export const TABLEAPCTWORDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPCTWORDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPCTWORDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPCTWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPCTWORDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPCTWORDWordGet(word: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPCTWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPCTWORDWordGet(word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPCTWORDApi - factory interface
 * @export
 */
export const TABLEAPCTWORDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPCTWORDApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCTWORDGet(options?: any): AxiosPromise<PagedTABLEAPCTWORD> {
            return localVarFp.tABLEAPCTWORDGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCTWORDWordGet(word: string, options?: any): AxiosPromise<TABLEAPCTWORD> {
            return localVarFp.tABLEAPCTWORDWordGet(word, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPCTWORDApi - interface
 * @export
 * @interface TABLEAPCTWORDApi
 */
export interface TABLEAPCTWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCTWORDApiInterface
     */
    tABLEAPCTWORDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPCTWORD>;

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCTWORDApiInterface
     */
    tABLEAPCTWORDWordGet(word: string, options?: AxiosRequestConfig): AxiosPromise<TABLEAPCTWORD>;

}

/**
 * TABLEAPCTWORDApi - object-oriented interface
 * @export
 * @class TABLEAPCTWORDApi
 * @extends {BaseAPI}
 */
export class TABLEAPCTWORDApi extends BaseAPI implements TABLEAPCTWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCTWORDApi
     */
    public tABLEAPCTWORDGet(options?: AxiosRequestConfig) {
        return TABLEAPCTWORDApiFp(this.configuration).tABLEAPCTWORDGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCTWORDApi
     */
    public tABLEAPCTWORDWordGet(word: string, options?: AxiosRequestConfig) {
        return TABLEAPCTWORDApiFp(this.configuration).tABLEAPCTWORDWordGet(word, options).then((request) => request(this.axios, this.basePath));
    }
}