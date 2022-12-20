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
import { PagedTABLECBDELTA } from '../models';
// @ts-ignore
import { TABLECBDELTA } from '../models';
/**
 * TABLECBDELTAApi - axios parameter creator
 * @export
 */
export const TABLECBDELTAApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBDELTADeltaIDGet: async (deltaID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deltaID' is not null or undefined
            assertParamExists('tABLECBDELTADeltaIDGet', 'deltaID', deltaID)
            const localVarPath = `/TABLE_CBDELTA('{DeltaID}')`
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
        tABLECBDELTAGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBDELTA`;
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
 * TABLECBDELTAApi - functional programming interface
 * @export
 */
export const TABLECBDELTAApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBDELTAApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBDELTA>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBDELTADeltaIDGet(deltaID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBDELTAGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBDELTA>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBDELTAGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBDELTAApi - factory interface
 * @export
 */
export const TABLECBDELTAApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBDELTAApiFp(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBDELTADeltaIDGet(deltaID: number, options?: any): AxiosPromise<TABLECBDELTA> {
            return localVarFp.tABLECBDELTADeltaIDGet(deltaID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBDELTAGet(options?: any): AxiosPromise<PagedTABLECBDELTA> {
            return localVarFp.tABLECBDELTAGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBDELTAApi - interface
 * @export
 * @interface TABLECBDELTAApi
 */
export interface TABLECBDELTAApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBDELTAApiInterface
     */
    tABLECBDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECBDELTA>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBDELTAApiInterface
     */
    tABLECBDELTAGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBDELTA>;

}

/**
 * TABLECBDELTAApi - object-oriented interface
 * @export
 * @class TABLECBDELTAApi
 * @extends {BaseAPI}
 */
export class TABLECBDELTAApi extends BaseAPI implements TABLECBDELTAApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBDELTAApi
     */
    public tABLECBDELTADeltaIDGet(deltaID: number, options?: AxiosRequestConfig) {
        return TABLECBDELTAApiFp(this.configuration).tABLECBDELTADeltaIDGet(deltaID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBDELTAApi
     */
    public tABLECBDELTAGet(options?: AxiosRequestConfig) {
        return TABLECBDELTAApiFp(this.configuration).tABLECBDELTAGet(options).then((request) => request(this.axios, this.basePath));
    }
}
