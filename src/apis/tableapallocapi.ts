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
import { PagedTABLEAPALLOC } from '../models';
// @ts-ignore
import { TABLEAPALLOC } from '../models';
/**
 * TABLEAPALLOCApi - axios parameter creator
 * @export
 */
export const TABLEAPALLOCApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} allocationID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPALLOCAllocationIDGet: async (allocationID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'allocationID' is not null or undefined
            assertParamExists('tABLEAPALLOCAllocationIDGet', 'allocationID', allocationID)
            const localVarPath = `/TABLE_APALLOC('{AllocationID}')`
                .replace(`{${"AllocationID"}}`, encodeURIComponent(String(allocationID)));
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
        tABLEAPALLOCGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APALLOC`;
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
 * TABLEAPALLOCApi - functional programming interface
 * @export
 */
export const TABLEAPALLOCApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPALLOCApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} allocationID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPALLOCAllocationIDGet(allocationID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPALLOC>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPALLOCAllocationIDGet(allocationID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPALLOCGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPALLOC>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPALLOCGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPALLOCApi - factory interface
 * @export
 */
export const TABLEAPALLOCApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPALLOCApiFp(configuration)
    return {
        /**
         * 
         * @param {number} allocationID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPALLOCAllocationIDGet(allocationID: number, options?: any): AxiosPromise<TABLEAPALLOC> {
            return localVarFp.tABLEAPALLOCAllocationIDGet(allocationID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPALLOCGet(options?: any): AxiosPromise<PagedTABLEAPALLOC> {
            return localVarFp.tABLEAPALLOCGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPALLOCApi - interface
 * @export
 * @interface TABLEAPALLOCApi
 */
export interface TABLEAPALLOCApiInterface {
    /**
     * 
     * @param {number} allocationID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPALLOCApiInterface
     */
    tABLEAPALLOCAllocationIDGet(allocationID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEAPALLOC>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPALLOCApiInterface
     */
    tABLEAPALLOCGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPALLOC>;

}

/**
 * TABLEAPALLOCApi - object-oriented interface
 * @export
 * @class TABLEAPALLOCApi
 * @extends {BaseAPI}
 */
export class TABLEAPALLOCApi extends BaseAPI implements TABLEAPALLOCApiInterface {
    /**
     * 
     * @param {number} allocationID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPALLOCApi
     */
    public tABLEAPALLOCAllocationIDGet(allocationID: number, options?: AxiosRequestConfig) {
        return TABLEAPALLOCApiFp(this.configuration).tABLEAPALLOCAllocationIDGet(allocationID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPALLOCApi
     */
    public tABLEAPALLOCGet(options?: AxiosRequestConfig) {
        return TABLEAPALLOCApiFp(this.configuration).tABLEAPALLOCGet(options).then((request) => request(this.axios, this.basePath));
    }
}
