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
import { PagedTABLEOECTRL } from '../models';
// @ts-ignore
import { TABLEOECTRL } from '../models';
/**
 * TABLEOECTRLApi - axios parameter creator
 * @export
 */
export const TABLEOECTRLApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOECTRLGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_OECTRL`;
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
         * @param {string} userCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOECTRLUserCodeGet: async (userCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userCode' is not null or undefined
            assertParamExists('tABLEOECTRLUserCodeGet', 'userCode', userCode)
            const localVarPath = `/TABLE_OECTRL('{UserCode}')`
                .replace(`{${"UserCode"}}`, encodeURIComponent(String(userCode)));
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
 * TABLEOECTRLApi - functional programming interface
 * @export
 */
export const TABLEOECTRLApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEOECTRLApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEOECTRLGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEOECTRL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEOECTRLGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} userCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEOECTRLUserCodeGet(userCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEOECTRL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEOECTRLUserCodeGet(userCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEOECTRLApi - factory interface
 * @export
 */
export const TABLEOECTRLApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEOECTRLApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOECTRLGet(options?: any): AxiosPromise<PagedTABLEOECTRL> {
            return localVarFp.tABLEOECTRLGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} userCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOECTRLUserCodeGet(userCode: string, options?: any): AxiosPromise<TABLEOECTRL> {
            return localVarFp.tABLEOECTRLUserCodeGet(userCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEOECTRLApi - interface
 * @export
 * @interface TABLEOECTRLApi
 */
export interface TABLEOECTRLApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOECTRLApiInterface
     */
    tABLEOECTRLGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEOECTRL>;

    /**
     * 
     * @param {string} userCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOECTRLApiInterface
     */
    tABLEOECTRLUserCodeGet(userCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEOECTRL>;

}

/**
 * TABLEOECTRLApi - object-oriented interface
 * @export
 * @class TABLEOECTRLApi
 * @extends {BaseAPI}
 */
export class TABLEOECTRLApi extends BaseAPI implements TABLEOECTRLApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOECTRLApi
     */
    public tABLEOECTRLGet(options?: AxiosRequestConfig) {
        return TABLEOECTRLApiFp(this.configuration).tABLEOECTRLGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} userCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOECTRLApi
     */
    public tABLEOECTRLUserCodeGet(userCode: string, options?: AxiosRequestConfig) {
        return TABLEOECTRLApiFp(this.configuration).tABLEOECTRLUserCodeGet(userCode, options).then((request) => request(this.axios, this.basePath));
    }
}
