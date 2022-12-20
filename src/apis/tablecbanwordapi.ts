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
import { PagedTABLECBANWORD } from '../models';
// @ts-ignore
import { TABLECBANWORD } from '../models';
/**
 * TABLECBANWORDApi - axios parameter creator
 * @export
 */
export const TABLECBANWORDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBANWORDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBANWORD`;
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
        tABLECBANWORDWordGet: async (word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'word' is not null or undefined
            assertParamExists('tABLECBANWORDWordGet', 'word', word)
            const localVarPath = `/TABLE_CBANWORD('{Word}')`
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
 * TABLECBANWORDApi - functional programming interface
 * @export
 */
export const TABLECBANWORDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBANWORDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBANWORDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBANWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBANWORDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBANWORDWordGet(word: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBANWORD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBANWORDWordGet(word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBANWORDApi - factory interface
 * @export
 */
export const TABLECBANWORDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBANWORDApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBANWORDGet(options?: any): AxiosPromise<PagedTABLECBANWORD> {
            return localVarFp.tABLECBANWORDGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} word 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBANWORDWordGet(word: string, options?: any): AxiosPromise<TABLECBANWORD> {
            return localVarFp.tABLECBANWORDWordGet(word, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBANWORDApi - interface
 * @export
 * @interface TABLECBANWORDApi
 */
export interface TABLECBANWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBANWORDApiInterface
     */
    tABLECBANWORDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBANWORD>;

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBANWORDApiInterface
     */
    tABLECBANWORDWordGet(word: string, options?: AxiosRequestConfig): AxiosPromise<TABLECBANWORD>;

}

/**
 * TABLECBANWORDApi - object-oriented interface
 * @export
 * @class TABLECBANWORDApi
 * @extends {BaseAPI}
 */
export class TABLECBANWORDApi extends BaseAPI implements TABLECBANWORDApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBANWORDApi
     */
    public tABLECBANWORDGet(options?: AxiosRequestConfig) {
        return TABLECBANWORDApiFp(this.configuration).tABLECBANWORDGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} word 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBANWORDApi
     */
    public tABLECBANWORDWordGet(word: string, options?: AxiosRequestConfig) {
        return TABLECBANWORDApiFp(this.configuration).tABLECBANWORDWordGet(word, options).then((request) => request(this.axios, this.basePath));
    }
}
