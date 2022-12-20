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
import { PagedTABLEGLBUDGET } from '../models';
// @ts-ignore
import { TABLEGLBUDGET } from '../models';
/**
 * TABLEGLBUDGETApi - axios parameter creator
 * @export
 */
export const TABLEGLBUDGETApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} budgetCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLBUDGETBudgetCodeGet: async (budgetCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetCode' is not null or undefined
            assertParamExists('tABLEGLBUDGETBudgetCodeGet', 'budgetCode', budgetCode)
            const localVarPath = `/TABLE_GLBUDGET('{BudgetCode}')`
                .replace(`{${"BudgetCode"}}`, encodeURIComponent(String(budgetCode)));
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
        tABLEGLBUDGETGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_GLBUDGET`;
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
 * TABLEGLBUDGETApi - functional programming interface
 * @export
 */
export const TABLEGLBUDGETApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEGLBUDGETApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} budgetCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLBUDGETBudgetCodeGet(budgetCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEGLBUDGET>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLBUDGETBudgetCodeGet(budgetCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLBUDGETGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEGLBUDGET>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLBUDGETGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEGLBUDGETApi - factory interface
 * @export
 */
export const TABLEGLBUDGETApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEGLBUDGETApiFp(configuration)
    return {
        /**
         * 
         * @param {string} budgetCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLBUDGETBudgetCodeGet(budgetCode: string, options?: any): AxiosPromise<TABLEGLBUDGET> {
            return localVarFp.tABLEGLBUDGETBudgetCodeGet(budgetCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLBUDGETGet(options?: any): AxiosPromise<PagedTABLEGLBUDGET> {
            return localVarFp.tABLEGLBUDGETGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEGLBUDGETApi - interface
 * @export
 * @interface TABLEGLBUDGETApi
 */
export interface TABLEGLBUDGETApiInterface {
    /**
     * 
     * @param {string} budgetCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLBUDGETApiInterface
     */
    tABLEGLBUDGETBudgetCodeGet(budgetCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEGLBUDGET>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLBUDGETApiInterface
     */
    tABLEGLBUDGETGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEGLBUDGET>;

}

/**
 * TABLEGLBUDGETApi - object-oriented interface
 * @export
 * @class TABLEGLBUDGETApi
 * @extends {BaseAPI}
 */
export class TABLEGLBUDGETApi extends BaseAPI implements TABLEGLBUDGETApiInterface {
    /**
     * 
     * @param {string} budgetCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLBUDGETApi
     */
    public tABLEGLBUDGETBudgetCodeGet(budgetCode: string, options?: AxiosRequestConfig) {
        return TABLEGLBUDGETApiFp(this.configuration).tABLEGLBUDGETBudgetCodeGet(budgetCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLBUDGETApi
     */
    public tABLEGLBUDGETGet(options?: AxiosRequestConfig) {
        return TABLEGLBUDGETApiFp(this.configuration).tABLEGLBUDGETGet(options).then((request) => request(this.axios, this.basePath));
    }
}
