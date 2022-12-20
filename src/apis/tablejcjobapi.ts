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
import { PagedTABLEJCJOB } from '../models';
// @ts-ignore
import { TABLEJCJOB } from '../models';
/**
 * TABLEJCJOBApi - axios parameter creator
 * @export
 */
export const TABLEJCJOBApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCJOBGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_JCJOB`;
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
         * @param {string} jobCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCJOBJobCodeGet: async (jobCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobCode' is not null or undefined
            assertParamExists('tABLEJCJOBJobCodeGet', 'jobCode', jobCode)
            const localVarPath = `/TABLE_JCJOB('{JobCode}')`
                .replace(`{${"JobCode"}}`, encodeURIComponent(String(jobCode)));
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
 * TABLEJCJOBApi - functional programming interface
 * @export
 */
export const TABLEJCJOBApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEJCJOBApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCJOBGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEJCJOB>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCJOBGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} jobCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCJOBJobCodeGet(jobCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEJCJOB>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCJOBJobCodeGet(jobCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEJCJOBApi - factory interface
 * @export
 */
export const TABLEJCJOBApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEJCJOBApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCJOBGet(options?: any): AxiosPromise<PagedTABLEJCJOB> {
            return localVarFp.tABLEJCJOBGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} jobCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCJOBJobCodeGet(jobCode: string, options?: any): AxiosPromise<TABLEJCJOB> {
            return localVarFp.tABLEJCJOBJobCodeGet(jobCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEJCJOBApi - interface
 * @export
 * @interface TABLEJCJOBApi
 */
export interface TABLEJCJOBApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCJOBApiInterface
     */
    tABLEJCJOBGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEJCJOB>;

    /**
     * 
     * @param {string} jobCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCJOBApiInterface
     */
    tABLEJCJOBJobCodeGet(jobCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEJCJOB>;

}

/**
 * TABLEJCJOBApi - object-oriented interface
 * @export
 * @class TABLEJCJOBApi
 * @extends {BaseAPI}
 */
export class TABLEJCJOBApi extends BaseAPI implements TABLEJCJOBApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCJOBApi
     */
    public tABLEJCJOBGet(options?: AxiosRequestConfig) {
        return TABLEJCJOBApiFp(this.configuration).tABLEJCJOBGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} jobCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCJOBApi
     */
    public tABLEJCJOBJobCodeGet(jobCode: string, options?: AxiosRequestConfig) {
        return TABLEJCJOBApiFp(this.configuration).tABLEJCJOBJobCodeGet(jobCode, options).then((request) => request(this.axios, this.basePath));
    }
}