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
import { PagedTABLESPRULE } from '../models';
// @ts-ignore
import { TABLESPRULE } from '../models';
/**
 * TABLESPRULEApi - axios parameter creator
 * @export
 */
export const TABLESPRULEApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPRULEGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_SPRULE`;
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
         * @param {number} ruleID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPRULERuleIDGet: async (ruleID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ruleID' is not null or undefined
            assertParamExists('tABLESPRULERuleIDGet', 'ruleID', ruleID)
            const localVarPath = `/TABLE_SPRULE('{RuleID}')`
                .replace(`{${"RuleID"}}`, encodeURIComponent(String(ruleID)));
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
 * TABLESPRULEApi - functional programming interface
 * @export
 */
export const TABLESPRULEApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLESPRULEApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLESPRULEGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLESPRULE>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLESPRULEGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} ruleID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLESPRULERuleIDGet(ruleID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLESPRULE>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLESPRULERuleIDGet(ruleID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLESPRULEApi - factory interface
 * @export
 */
export const TABLESPRULEApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLESPRULEApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPRULEGet(options?: any): AxiosPromise<PagedTABLESPRULE> {
            return localVarFp.tABLESPRULEGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} ruleID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLESPRULERuleIDGet(ruleID: number, options?: any): AxiosPromise<TABLESPRULE> {
            return localVarFp.tABLESPRULERuleIDGet(ruleID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLESPRULEApi - interface
 * @export
 * @interface TABLESPRULEApi
 */
export interface TABLESPRULEApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPRULEApiInterface
     */
    tABLESPRULEGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLESPRULE>;

    /**
     * 
     * @param {number} ruleID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPRULEApiInterface
     */
    tABLESPRULERuleIDGet(ruleID: number, options?: AxiosRequestConfig): AxiosPromise<TABLESPRULE>;

}

/**
 * TABLESPRULEApi - object-oriented interface
 * @export
 * @class TABLESPRULEApi
 * @extends {BaseAPI}
 */
export class TABLESPRULEApi extends BaseAPI implements TABLESPRULEApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPRULEApi
     */
    public tABLESPRULEGet(options?: AxiosRequestConfig) {
        return TABLESPRULEApiFp(this.configuration).tABLESPRULEGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} ruleID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLESPRULEApi
     */
    public tABLESPRULERuleIDGet(ruleID: number, options?: AxiosRequestConfig) {
        return TABLESPRULEApiFp(this.configuration).tABLESPRULERuleIDGet(ruleID, options).then((request) => request(this.axios, this.basePath));
    }
}
