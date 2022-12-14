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
import { PagedTABLEPOAUTHOR } from '../models';
// @ts-ignore
import { TABLEPOAUTHOR } from '../models';
/**
 * TABLEPOAUTHORApi - axios parameter creator
 * @export
 */
export const TABLEPOAUTHORApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOAUTHORAuthorCodeGet: async (authorCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorCode' is not null or undefined
            assertParamExists('tABLEPOAUTHORAuthorCodeGet', 'authorCode', authorCode)
            const localVarPath = `/TABLE_POAUTHOR('{AuthorCode}')`
                .replace(`{${"AuthorCode"}}`, encodeURIComponent(String(authorCode)));
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
        tABLEPOAUTHORGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_POAUTHOR`;
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
 * TABLEPOAUTHORApi - functional programming interface
 * @export
 */
export const TABLEPOAUTHORApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEPOAUTHORApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEPOAUTHORAuthorCodeGet(authorCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEPOAUTHOR>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEPOAUTHORAuthorCodeGet(authorCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEPOAUTHORGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEPOAUTHOR>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEPOAUTHORGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEPOAUTHORApi - factory interface
 * @export
 */
export const TABLEPOAUTHORApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEPOAUTHORApiFp(configuration)
    return {
        /**
         * 
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOAUTHORAuthorCodeGet(authorCode: string, options?: any): AxiosPromise<TABLEPOAUTHOR> {
            return localVarFp.tABLEPOAUTHORAuthorCodeGet(authorCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOAUTHORGet(options?: any): AxiosPromise<PagedTABLEPOAUTHOR> {
            return localVarFp.tABLEPOAUTHORGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEPOAUTHORApi - interface
 * @export
 * @interface TABLEPOAUTHORApi
 */
export interface TABLEPOAUTHORApiInterface {
    /**
     * 
     * @param {string} authorCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOAUTHORApiInterface
     */
    tABLEPOAUTHORAuthorCodeGet(authorCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEPOAUTHOR>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOAUTHORApiInterface
     */
    tABLEPOAUTHORGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEPOAUTHOR>;

}

/**
 * TABLEPOAUTHORApi - object-oriented interface
 * @export
 * @class TABLEPOAUTHORApi
 * @extends {BaseAPI}
 */
export class TABLEPOAUTHORApi extends BaseAPI implements TABLEPOAUTHORApiInterface {
    /**
     * 
     * @param {string} authorCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOAUTHORApi
     */
    public tABLEPOAUTHORAuthorCodeGet(authorCode: string, options?: AxiosRequestConfig) {
        return TABLEPOAUTHORApiFp(this.configuration).tABLEPOAUTHORAuthorCodeGet(authorCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOAUTHORApi
     */
    public tABLEPOAUTHORGet(options?: AxiosRequestConfig) {
        return TABLEPOAUTHORApiFp(this.configuration).tABLEPOAUTHORGet(options).then((request) => request(this.axios, this.basePath));
    }
}
