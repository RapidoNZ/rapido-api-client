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
import { PagedTABLEICSTKHD } from '../models';
// @ts-ignore
import { TABLEICSTKHD } from '../models';
/**
 * TABLEICSTKHDApi - axios parameter creator
 * @export
 */
export const TABLEICSTKHDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICSTKHDDocumentIDGet: async (documentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('tABLEICSTKHDDocumentIDGet', 'documentID', documentID)
            const localVarPath = `/TABLE_ICSTKHD('{DocumentID}')`
                .replace(`{${"DocumentID"}}`, encodeURIComponent(String(documentID)));
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
        tABLEICSTKHDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ICSTKHD`;
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
 * TABLEICSTKHDApi - functional programming interface
 * @export
 */
export const TABLEICSTKHDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEICSTKHDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICSTKHDDocumentIDGet(documentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEICSTKHD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICSTKHDDocumentIDGet(documentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICSTKHDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEICSTKHD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICSTKHDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEICSTKHDApi - factory interface
 * @export
 */
export const TABLEICSTKHDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEICSTKHDApiFp(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICSTKHDDocumentIDGet(documentID: number, options?: any): AxiosPromise<TABLEICSTKHD> {
            return localVarFp.tABLEICSTKHDDocumentIDGet(documentID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICSTKHDGet(options?: any): AxiosPromise<PagedTABLEICSTKHD> {
            return localVarFp.tABLEICSTKHDGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEICSTKHDApi - interface
 * @export
 * @interface TABLEICSTKHDApi
 */
export interface TABLEICSTKHDApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICSTKHDApiInterface
     */
    tABLEICSTKHDDocumentIDGet(documentID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEICSTKHD>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICSTKHDApiInterface
     */
    tABLEICSTKHDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEICSTKHD>;

}

/**
 * TABLEICSTKHDApi - object-oriented interface
 * @export
 * @class TABLEICSTKHDApi
 * @extends {BaseAPI}
 */
export class TABLEICSTKHDApi extends BaseAPI implements TABLEICSTKHDApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICSTKHDApi
     */
    public tABLEICSTKHDDocumentIDGet(documentID: number, options?: AxiosRequestConfig) {
        return TABLEICSTKHDApiFp(this.configuration).tABLEICSTKHDDocumentIDGet(documentID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICSTKHDApi
     */
    public tABLEICSTKHDGet(options?: AxiosRequestConfig) {
        return TABLEICSTKHDApiFp(this.configuration).tABLEICSTKHDGet(options).then((request) => request(this.axios, this.basePath));
    }
}
