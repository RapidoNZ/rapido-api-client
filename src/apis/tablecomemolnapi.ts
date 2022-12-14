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
import { PagedTABLECOMEMOLN } from '../models';
// @ts-ignore
import { TABLECOMEMOLN } from '../models';
/**
 * TABLECOMEMOLNApi - axios parameter creator
 * @export
 */
export const TABLECOMEMOLNApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOMEMOLNGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_COMEMOLN`;
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
        tABLECOMEMOLNMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('tABLECOMEMOLNMemoIDGet', 'memoID', memoID)
            const localVarPath = `/TABLE_COMEMOLN('{MemoID}')`
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
 * TABLECOMEMOLNApi - functional programming interface
 * @export
 */
export const TABLECOMEMOLNApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECOMEMOLNApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOMEMOLNGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECOMEMOLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOMEMOLNGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECOMEMOLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOMEMOLNMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECOMEMOLNApi - factory interface
 * @export
 */
export const TABLECOMEMOLNApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECOMEMOLNApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOMEMOLNGet(options?: any): AxiosPromise<PagedTABLECOMEMOLN> {
            return localVarFp.tABLECOMEMOLNGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOMEMOLNMemoIDGet(memoID: number, options?: any): AxiosPromise<TABLECOMEMOLN> {
            return localVarFp.tABLECOMEMOLNMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECOMEMOLNApi - interface
 * @export
 * @interface TABLECOMEMOLNApi
 */
export interface TABLECOMEMOLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOMEMOLNApiInterface
     */
    tABLECOMEMOLNGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECOMEMOLN>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOMEMOLNApiInterface
     */
    tABLECOMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECOMEMOLN>;

}

/**
 * TABLECOMEMOLNApi - object-oriented interface
 * @export
 * @class TABLECOMEMOLNApi
 * @extends {BaseAPI}
 */
export class TABLECOMEMOLNApi extends BaseAPI implements TABLECOMEMOLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOMEMOLNApi
     */
    public tABLECOMEMOLNGet(options?: AxiosRequestConfig) {
        return TABLECOMEMOLNApiFp(this.configuration).tABLECOMEMOLNGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOMEMOLNApi
     */
    public tABLECOMEMOLNMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return TABLECOMEMOLNApiFp(this.configuration).tABLECOMEMOLNMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }
}
