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
import { PagedTABLECBDISS } from '../models';
// @ts-ignore
import { TABLECBDISS } from '../models';
/**
 * TABLECBDISSApi - axios parameter creator
 * @export
 */
export const TABLECBDISSApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBDISSGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBDISS`;
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
        tABLECBDISSPeriodIDGet: async (periodID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'periodID' is not null or undefined
            assertParamExists('tABLECBDISSPeriodIDGet', 'periodID', periodID)
            const localVarPath = `/TABLE_CBDISS('{PeriodID}')`
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
 * TABLECBDISSApi - functional programming interface
 * @export
 */
export const TABLECBDISSApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBDISSApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBDISSGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBDISS>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBDISSGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} periodID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBDISSPeriodIDGet(periodID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBDISS>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBDISSPeriodIDGet(periodID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBDISSApi - factory interface
 * @export
 */
export const TABLECBDISSApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBDISSApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBDISSGet(options?: any): AxiosPromise<PagedTABLECBDISS> {
            return localVarFp.tABLECBDISSGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} periodID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBDISSPeriodIDGet(periodID: number, options?: any): AxiosPromise<TABLECBDISS> {
            return localVarFp.tABLECBDISSPeriodIDGet(periodID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBDISSApi - interface
 * @export
 * @interface TABLECBDISSApi
 */
export interface TABLECBDISSApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBDISSApiInterface
     */
    tABLECBDISSGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBDISS>;

    /**
     * 
     * @param {number} periodID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBDISSApiInterface
     */
    tABLECBDISSPeriodIDGet(periodID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECBDISS>;

}

/**
 * TABLECBDISSApi - object-oriented interface
 * @export
 * @class TABLECBDISSApi
 * @extends {BaseAPI}
 */
export class TABLECBDISSApi extends BaseAPI implements TABLECBDISSApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBDISSApi
     */
    public tABLECBDISSGet(options?: AxiosRequestConfig) {
        return TABLECBDISSApiFp(this.configuration).tABLECBDISSGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} periodID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBDISSApi
     */
    public tABLECBDISSPeriodIDGet(periodID: number, options?: AxiosRequestConfig) {
        return TABLECBDISSApiFp(this.configuration).tABLECBDISSPeriodIDGet(periodID, options).then((request) => request(this.axios, this.basePath));
    }
}
