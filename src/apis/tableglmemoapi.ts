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
import { PagedTABLEGLMEMO } from '../models';
// @ts-ignore
import { TABLEGLMEMO } from '../models';
/**
 * TABLEGLMEMOApi - axios parameter creator
 * @export
 */
export const TABLEGLMEMOApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLMEMOGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_GLMEMO`;
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
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLMEMOMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('tABLEGLMEMOMemoIDGet', 'memoID', memoID)
            const localVarPath = `/TABLE_GLMEMO('{MemoID}')`
                .replace(`{${"MemoID"}}`, encodeURIComponent(String(memoID)));
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
 * TABLEGLMEMOApi - functional programming interface
 * @export
 */
export const TABLEGLMEMOApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEGLMEMOApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLMEMOGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEGLMEMO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLMEMOGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLMEMOMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEGLMEMO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLMEMOMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEGLMEMOApi - factory interface
 * @export
 */
export const TABLEGLMEMOApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEGLMEMOApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLMEMOGet(options?: any): AxiosPromise<PagedTABLEGLMEMO> {
            return localVarFp.tABLEGLMEMOGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLMEMOMemoIDGet(memoID: number, options?: any): AxiosPromise<TABLEGLMEMO> {
            return localVarFp.tABLEGLMEMOMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEGLMEMOApi - interface
 * @export
 * @interface TABLEGLMEMOApi
 */
export interface TABLEGLMEMOApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLMEMOApiInterface
     */
    tABLEGLMEMOGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEGLMEMO>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLMEMOApiInterface
     */
    tABLEGLMEMOMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEGLMEMO>;

}

/**
 * TABLEGLMEMOApi - object-oriented interface
 * @export
 * @class TABLEGLMEMOApi
 * @extends {BaseAPI}
 */
export class TABLEGLMEMOApi extends BaseAPI implements TABLEGLMEMOApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLMEMOApi
     */
    public tABLEGLMEMOGet(options?: AxiosRequestConfig) {
        return TABLEGLMEMOApiFp(this.configuration).tABLEGLMEMOGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLMEMOApi
     */
    public tABLEGLMEMOMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return TABLEGLMEMOApiFp(this.configuration).tABLEGLMEMOMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }
}
