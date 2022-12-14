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
import { PagedTABLEJCINV } from '../models';
// @ts-ignore
import { TABLEJCINV } from '../models';
/**
 * TABLEJCINVApi - axios parameter creator
 * @export
 */
export const TABLEJCINVApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCINVGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_JCINV`;
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
         * @param {number} sourceDocumentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCINVSourceDocumentIDGet: async (sourceDocumentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sourceDocumentID' is not null or undefined
            assertParamExists('tABLEJCINVSourceDocumentIDGet', 'sourceDocumentID', sourceDocumentID)
            const localVarPath = `/TABLE_JCINV('{SourceDocumentID}')`
                .replace(`{${"SourceDocumentID"}}`, encodeURIComponent(String(sourceDocumentID)));
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
 * TABLEJCINVApi - functional programming interface
 * @export
 */
export const TABLEJCINVApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEJCINVApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCINVGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEJCINV>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCINVGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} sourceDocumentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCINVSourceDocumentIDGet(sourceDocumentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEJCINV>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCINVSourceDocumentIDGet(sourceDocumentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEJCINVApi - factory interface
 * @export
 */
export const TABLEJCINVApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEJCINVApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCINVGet(options?: any): AxiosPromise<PagedTABLEJCINV> {
            return localVarFp.tABLEJCINVGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sourceDocumentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCINVSourceDocumentIDGet(sourceDocumentID: number, options?: any): AxiosPromise<TABLEJCINV> {
            return localVarFp.tABLEJCINVSourceDocumentIDGet(sourceDocumentID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEJCINVApi - interface
 * @export
 * @interface TABLEJCINVApi
 */
export interface TABLEJCINVApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCINVApiInterface
     */
    tABLEJCINVGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEJCINV>;

    /**
     * 
     * @param {number} sourceDocumentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCINVApiInterface
     */
    tABLEJCINVSourceDocumentIDGet(sourceDocumentID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEJCINV>;

}

/**
 * TABLEJCINVApi - object-oriented interface
 * @export
 * @class TABLEJCINVApi
 * @extends {BaseAPI}
 */
export class TABLEJCINVApi extends BaseAPI implements TABLEJCINVApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCINVApi
     */
    public tABLEJCINVGet(options?: AxiosRequestConfig) {
        return TABLEJCINVApiFp(this.configuration).tABLEJCINVGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sourceDocumentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCINVApi
     */
    public tABLEJCINVSourceDocumentIDGet(sourceDocumentID: number, options?: AxiosRequestConfig) {
        return TABLEJCINVApiFp(this.configuration).tABLEJCINVSourceDocumentIDGet(sourceDocumentID, options).then((request) => request(this.axios, this.basePath));
    }
}
