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
import { PagedTABLEGSRTLN } from '../models';
// @ts-ignore
import { TABLEGSRTLN } from '../models';
/**
 * TABLEGSRTLNApi - axios parameter creator
 * @export
 */
export const TABLEGSRTLNApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGSRTLNGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_GSRTLN`;
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
         * @param {number} returnID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGSRTLNReturnIDGet: async (returnID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'returnID' is not null or undefined
            assertParamExists('tABLEGSRTLNReturnIDGet', 'returnID', returnID)
            const localVarPath = `/TABLE_GSRTLN('{ReturnID}')`
                .replace(`{${"ReturnID"}}`, encodeURIComponent(String(returnID)));
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
 * TABLEGSRTLNApi - functional programming interface
 * @export
 */
export const TABLEGSRTLNApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEGSRTLNApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGSRTLNGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEGSRTLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGSRTLNGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} returnID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGSRTLNReturnIDGet(returnID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEGSRTLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGSRTLNReturnIDGet(returnID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEGSRTLNApi - factory interface
 * @export
 */
export const TABLEGSRTLNApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEGSRTLNApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGSRTLNGet(options?: any): AxiosPromise<PagedTABLEGSRTLN> {
            return localVarFp.tABLEGSRTLNGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} returnID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGSRTLNReturnIDGet(returnID: number, options?: any): AxiosPromise<TABLEGSRTLN> {
            return localVarFp.tABLEGSRTLNReturnIDGet(returnID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEGSRTLNApi - interface
 * @export
 * @interface TABLEGSRTLNApi
 */
export interface TABLEGSRTLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGSRTLNApiInterface
     */
    tABLEGSRTLNGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEGSRTLN>;

    /**
     * 
     * @param {number} returnID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGSRTLNApiInterface
     */
    tABLEGSRTLNReturnIDGet(returnID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEGSRTLN>;

}

/**
 * TABLEGSRTLNApi - object-oriented interface
 * @export
 * @class TABLEGSRTLNApi
 * @extends {BaseAPI}
 */
export class TABLEGSRTLNApi extends BaseAPI implements TABLEGSRTLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGSRTLNApi
     */
    public tABLEGSRTLNGet(options?: AxiosRequestConfig) {
        return TABLEGSRTLNApiFp(this.configuration).tABLEGSRTLNGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} returnID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGSRTLNApi
     */
    public tABLEGSRTLNReturnIDGet(returnID: number, options?: AxiosRequestConfig) {
        return TABLEGSRTLNApiFp(this.configuration).tABLEGSRTLNReturnIDGet(returnID, options).then((request) => request(this.axios, this.basePath));
    }
}
