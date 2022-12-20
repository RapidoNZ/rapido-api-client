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
import { PagedTABLECBREVAL } from '../models';
// @ts-ignore
import { TABLECBREVAL } from '../models';
/**
 * TABLECBREVALApi - axios parameter creator
 * @export
 */
export const TABLECBREVALApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBREVALGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBREVAL`;
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
        tABLECBREVALPeriodIDGet: async (periodID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'periodID' is not null or undefined
            assertParamExists('tABLECBREVALPeriodIDGet', 'periodID', periodID)
            const localVarPath = `/TABLE_CBREVAL('{PeriodID}')`
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
 * TABLECBREVALApi - functional programming interface
 * @export
 */
export const TABLECBREVALApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBREVALApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBREVALGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBREVAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBREVALGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} periodID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBREVALPeriodIDGet(periodID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBREVAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBREVALPeriodIDGet(periodID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBREVALApi - factory interface
 * @export
 */
export const TABLECBREVALApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBREVALApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBREVALGet(options?: any): AxiosPromise<PagedTABLECBREVAL> {
            return localVarFp.tABLECBREVALGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} periodID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBREVALPeriodIDGet(periodID: number, options?: any): AxiosPromise<TABLECBREVAL> {
            return localVarFp.tABLECBREVALPeriodIDGet(periodID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBREVALApi - interface
 * @export
 * @interface TABLECBREVALApi
 */
export interface TABLECBREVALApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBREVALApiInterface
     */
    tABLECBREVALGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBREVAL>;

    /**
     * 
     * @param {number} periodID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBREVALApiInterface
     */
    tABLECBREVALPeriodIDGet(periodID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECBREVAL>;

}

/**
 * TABLECBREVALApi - object-oriented interface
 * @export
 * @class TABLECBREVALApi
 * @extends {BaseAPI}
 */
export class TABLECBREVALApi extends BaseAPI implements TABLECBREVALApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBREVALApi
     */
    public tABLECBREVALGet(options?: AxiosRequestConfig) {
        return TABLECBREVALApiFp(this.configuration).tABLECBREVALGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} periodID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBREVALApi
     */
    public tABLECBREVALPeriodIDGet(periodID: number, options?: AxiosRequestConfig) {
        return TABLECBREVALApiFp(this.configuration).tABLECBREVALPeriodIDGet(periodID, options).then((request) => request(this.axios, this.basePath));
    }
}