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
import { PagedTABLEGLDELTA } from '../models';
// @ts-ignore
import { TABLEGLDELTA } from '../models';
/**
 * TABLEGLDELTAApi - axios parameter creator
 * @export
 */
export const TABLEGLDELTAApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLDELTADeltaIDGet: async (deltaID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deltaID' is not null or undefined
            assertParamExists('tABLEGLDELTADeltaIDGet', 'deltaID', deltaID)
            const localVarPath = `/TABLE_GLDELTA('{DeltaID}')`
                .replace(`{${"DeltaID"}}`, encodeURIComponent(String(deltaID)));
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
        tABLEGLDELTAGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_GLDELTA`;
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
 * TABLEGLDELTAApi - functional programming interface
 * @export
 */
export const TABLEGLDELTAApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEGLDELTAApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEGLDELTA>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLDELTADeltaIDGet(deltaID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLDELTAGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEGLDELTA>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLDELTAGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEGLDELTAApi - factory interface
 * @export
 */
export const TABLEGLDELTAApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEGLDELTAApiFp(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLDELTADeltaIDGet(deltaID: number, options?: any): AxiosPromise<TABLEGLDELTA> {
            return localVarFp.tABLEGLDELTADeltaIDGet(deltaID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLDELTAGet(options?: any): AxiosPromise<PagedTABLEGLDELTA> {
            return localVarFp.tABLEGLDELTAGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEGLDELTAApi - interface
 * @export
 * @interface TABLEGLDELTAApi
 */
export interface TABLEGLDELTAApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLDELTAApiInterface
     */
    tABLEGLDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEGLDELTA>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLDELTAApiInterface
     */
    tABLEGLDELTAGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEGLDELTA>;

}

/**
 * TABLEGLDELTAApi - object-oriented interface
 * @export
 * @class TABLEGLDELTAApi
 * @extends {BaseAPI}
 */
export class TABLEGLDELTAApi extends BaseAPI implements TABLEGLDELTAApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLDELTAApi
     */
    public tABLEGLDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig) {
        return TABLEGLDELTAApiFp(this.configuration).tABLEGLDELTADeltaIDGet(deltaID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLDELTAApi
     */
    public tABLEGLDELTAGet(options?: AxiosRequestConfig) {
        return TABLEGLDELTAApiFp(this.configuration).tABLEGLDELTAGet(options).then((request) => request(this.axios, this.basePath));
    }
}
