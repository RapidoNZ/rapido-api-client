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
import { PagedTABLEJCGROUP } from '../models';
// @ts-ignore
import { TABLEJCGROUP } from '../models';
/**
 * TABLEJCGROUPApi - axios parameter creator
 * @export
 */
export const TABLEJCGROUPApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCGROUPGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_JCGROUP`;
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
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCGROUPJobGroupCodeGet: async (jobGroupCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobGroupCode' is not null or undefined
            assertParamExists('tABLEJCGROUPJobGroupCodeGet', 'jobGroupCode', jobGroupCode)
            const localVarPath = `/TABLE_JCGROUP('{JobGroupCode}')`
                .replace(`{${"JobGroupCode"}}`, encodeURIComponent(String(jobGroupCode)));
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
 * TABLEJCGROUPApi - functional programming interface
 * @export
 */
export const TABLEJCGROUPApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEJCGROUPApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCGROUPGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEJCGROUP>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCGROUPGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCGROUPJobGroupCodeGet(jobGroupCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEJCGROUP>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCGROUPJobGroupCodeGet(jobGroupCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEJCGROUPApi - factory interface
 * @export
 */
export const TABLEJCGROUPApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEJCGROUPApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCGROUPGet(options?: any): AxiosPromise<PagedTABLEJCGROUP> {
            return localVarFp.tABLEJCGROUPGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCGROUPJobGroupCodeGet(jobGroupCode: string, options?: any): AxiosPromise<TABLEJCGROUP> {
            return localVarFp.tABLEJCGROUPJobGroupCodeGet(jobGroupCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEJCGROUPApi - interface
 * @export
 * @interface TABLEJCGROUPApi
 */
export interface TABLEJCGROUPApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCGROUPApiInterface
     */
    tABLEJCGROUPGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEJCGROUP>;

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCGROUPApiInterface
     */
    tABLEJCGROUPJobGroupCodeGet(jobGroupCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEJCGROUP>;

}

/**
 * TABLEJCGROUPApi - object-oriented interface
 * @export
 * @class TABLEJCGROUPApi
 * @extends {BaseAPI}
 */
export class TABLEJCGROUPApi extends BaseAPI implements TABLEJCGROUPApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCGROUPApi
     */
    public tABLEJCGROUPGet(options?: AxiosRequestConfig) {
        return TABLEJCGROUPApiFp(this.configuration).tABLEJCGROUPGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCGROUPApi
     */
    public tABLEJCGROUPJobGroupCodeGet(jobGroupCode: string, options?: AxiosRequestConfig) {
        return TABLEJCGROUPApiFp(this.configuration).tABLEJCGROUPJobGroupCodeGet(jobGroupCode, options).then((request) => request(this.axios, this.basePath));
    }
}