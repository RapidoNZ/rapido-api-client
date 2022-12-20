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
import { PagedTABLECOGSTRT } from '../models';
// @ts-ignore
import { TABLECOGSTRT } from '../models';
/**
 * TABLECOGSTRTApi - axios parameter creator
 * @export
 */
export const TABLECOGSTRTApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOGSTRTGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_COGSTRT`;
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
         * @param {number} rateID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOGSTRTRateIDGet: async (rateID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'rateID' is not null or undefined
            assertParamExists('tABLECOGSTRTRateIDGet', 'rateID', rateID)
            const localVarPath = `/TABLE_COGSTRT('{RateID}')`
                .replace(`{${"RateID"}}`, encodeURIComponent(String(rateID)));
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
 * TABLECOGSTRTApi - functional programming interface
 * @export
 */
export const TABLECOGSTRTApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECOGSTRTApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOGSTRTGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECOGSTRT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOGSTRTGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} rateID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOGSTRTRateIDGet(rateID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECOGSTRT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOGSTRTRateIDGet(rateID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECOGSTRTApi - factory interface
 * @export
 */
export const TABLECOGSTRTApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECOGSTRTApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOGSTRTGet(options?: any): AxiosPromise<PagedTABLECOGSTRT> {
            return localVarFp.tABLECOGSTRTGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} rateID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOGSTRTRateIDGet(rateID: number, options?: any): AxiosPromise<TABLECOGSTRT> {
            return localVarFp.tABLECOGSTRTRateIDGet(rateID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECOGSTRTApi - interface
 * @export
 * @interface TABLECOGSTRTApi
 */
export interface TABLECOGSTRTApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOGSTRTApiInterface
     */
    tABLECOGSTRTGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECOGSTRT>;

    /**
     * 
     * @param {number} rateID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOGSTRTApiInterface
     */
    tABLECOGSTRTRateIDGet(rateID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECOGSTRT>;

}

/**
 * TABLECOGSTRTApi - object-oriented interface
 * @export
 * @class TABLECOGSTRTApi
 * @extends {BaseAPI}
 */
export class TABLECOGSTRTApi extends BaseAPI implements TABLECOGSTRTApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOGSTRTApi
     */
    public tABLECOGSTRTGet(options?: AxiosRequestConfig) {
        return TABLECOGSTRTApiFp(this.configuration).tABLECOGSTRTGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} rateID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOGSTRTApi
     */
    public tABLECOGSTRTRateIDGet(rateID: number, options?: AxiosRequestConfig) {
        return TABLECOGSTRTApiFp(this.configuration).tABLECOGSTRTRateIDGet(rateID, options).then((request) => request(this.axios, this.basePath));
    }
}