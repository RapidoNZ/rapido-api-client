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
import { PagedTABLEARDISS } from '../models';
// @ts-ignore
import { TABLEARDISS } from '../models';
/**
 * TABLEARDISSApi - axios parameter creator
 * @export
 */
export const TABLEARDISSApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARDISSGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ARDISS`;
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
         * @param {number} periodID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARDISSPeriodIDGet: async (periodID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'periodID' is not null or undefined
            assertParamExists('tABLEARDISSPeriodIDGet', 'periodID', periodID)
            const localVarPath = `/TABLE_ARDISS('{PeriodID}')`
                .replace(`{${"PeriodID"}}`, encodeURIComponent(String(periodID)));
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
 * TABLEARDISSApi - functional programming interface
 * @export
 */
export const TABLEARDISSApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEARDISSApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARDISSGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEARDISS>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARDISSGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} periodID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARDISSPeriodIDGet(periodID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEARDISS>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARDISSPeriodIDGet(periodID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEARDISSApi - factory interface
 * @export
 */
export const TABLEARDISSApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEARDISSApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARDISSGet(options?: any): AxiosPromise<PagedTABLEARDISS> {
            return localVarFp.tABLEARDISSGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} periodID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARDISSPeriodIDGet(periodID: number, options?: any): AxiosPromise<TABLEARDISS> {
            return localVarFp.tABLEARDISSPeriodIDGet(periodID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEARDISSApi - interface
 * @export
 * @interface TABLEARDISSApi
 */
export interface TABLEARDISSApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARDISSApiInterface
     */
    tABLEARDISSGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEARDISS>;

    /**
     * 
     * @param {number} periodID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARDISSApiInterface
     */
    tABLEARDISSPeriodIDGet(periodID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEARDISS>;

}

/**
 * TABLEARDISSApi - object-oriented interface
 * @export
 * @class TABLEARDISSApi
 * @extends {BaseAPI}
 */
export class TABLEARDISSApi extends BaseAPI implements TABLEARDISSApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARDISSApi
     */
    public tABLEARDISSGet(options?: AxiosRequestConfig) {
        return TABLEARDISSApiFp(this.configuration).tABLEARDISSGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} periodID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARDISSApi
     */
    public tABLEARDISSPeriodIDGet(periodID: number, options?: AxiosRequestConfig) {
        return TABLEARDISSApiFp(this.configuration).tABLEARDISSPeriodIDGet(periodID, options).then((request) => request(this.axios, this.basePath));
    }
}