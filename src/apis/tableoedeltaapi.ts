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
import { PagedTABLEOEDELTA } from '../models';
// @ts-ignore
import { TABLEOEDELTA } from '../models';
/**
 * TABLEOEDELTAApi - axios parameter creator
 * @export
 */
export const TABLEOEDELTAApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOEDELTADeltaIDGet: async (deltaID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deltaID' is not null or undefined
            assertParamExists('tABLEOEDELTADeltaIDGet', 'deltaID', deltaID)
            const localVarPath = `/TABLE_OEDELTA('{DeltaID}')`
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
        tABLEOEDELTAGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_OEDELTA`;
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
 * TABLEOEDELTAApi - functional programming interface
 * @export
 */
export const TABLEOEDELTAApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEOEDELTAApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEOEDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEOEDELTA>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEOEDELTADeltaIDGet(deltaID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEOEDELTAGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEOEDELTA>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEOEDELTAGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEOEDELTAApi - factory interface
 * @export
 */
export const TABLEOEDELTAApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEOEDELTAApiFp(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOEDELTADeltaIDGet(deltaID: number, options?: any): AxiosPromise<TABLEOEDELTA> {
            return localVarFp.tABLEOEDELTADeltaIDGet(deltaID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOEDELTAGet(options?: any): AxiosPromise<PagedTABLEOEDELTA> {
            return localVarFp.tABLEOEDELTAGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEOEDELTAApi - interface
 * @export
 * @interface TABLEOEDELTAApi
 */
export interface TABLEOEDELTAApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOEDELTAApiInterface
     */
    tABLEOEDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEOEDELTA>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOEDELTAApiInterface
     */
    tABLEOEDELTAGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEOEDELTA>;

}

/**
 * TABLEOEDELTAApi - object-oriented interface
 * @export
 * @class TABLEOEDELTAApi
 * @extends {BaseAPI}
 */
export class TABLEOEDELTAApi extends BaseAPI implements TABLEOEDELTAApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOEDELTAApi
     */
    public tABLEOEDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig) {
        return TABLEOEDELTAApiFp(this.configuration).tABLEOEDELTADeltaIDGet(deltaID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOEDELTAApi
     */
    public tABLEOEDELTAGet(options?: AxiosRequestConfig) {
        return TABLEOEDELTAApiFp(this.configuration).tABLEOEDELTAGet(options).then((request) => request(this.axios, this.basePath));
    }
}
