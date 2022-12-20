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
import { PagedTABLEICSELL } from '../models';
// @ts-ignore
import { TABLEICSELL } from '../models';
/**
 * TABLEICSELLApi - axios parameter creator
 * @export
 */
export const TABLEICSELLApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICSELLGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ICSELL`;
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
         * @param {string} priceCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICSELLPriceCodeGet: async (priceCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'priceCode' is not null or undefined
            assertParamExists('tABLEICSELLPriceCodeGet', 'priceCode', priceCode)
            const localVarPath = `/TABLE_ICSELL('{PriceCode}')`
                .replace(`{${"PriceCode"}}`, encodeURIComponent(String(priceCode)));
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
 * TABLEICSELLApi - functional programming interface
 * @export
 */
export const TABLEICSELLApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEICSELLApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICSELLGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEICSELL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICSELLGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} priceCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICSELLPriceCodeGet(priceCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEICSELL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICSELLPriceCodeGet(priceCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEICSELLApi - factory interface
 * @export
 */
export const TABLEICSELLApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEICSELLApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICSELLGet(options?: any): AxiosPromise<PagedTABLEICSELL> {
            return localVarFp.tABLEICSELLGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} priceCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICSELLPriceCodeGet(priceCode: string, options?: any): AxiosPromise<TABLEICSELL> {
            return localVarFp.tABLEICSELLPriceCodeGet(priceCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEICSELLApi - interface
 * @export
 * @interface TABLEICSELLApi
 */
export interface TABLEICSELLApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICSELLApiInterface
     */
    tABLEICSELLGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEICSELL>;

    /**
     * 
     * @param {string} priceCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICSELLApiInterface
     */
    tABLEICSELLPriceCodeGet(priceCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEICSELL>;

}

/**
 * TABLEICSELLApi - object-oriented interface
 * @export
 * @class TABLEICSELLApi
 * @extends {BaseAPI}
 */
export class TABLEICSELLApi extends BaseAPI implements TABLEICSELLApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICSELLApi
     */
    public tABLEICSELLGet(options?: AxiosRequestConfig) {
        return TABLEICSELLApiFp(this.configuration).tABLEICSELLGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} priceCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICSELLApi
     */
    public tABLEICSELLPriceCodeGet(priceCode: string, options?: AxiosRequestConfig) {
        return TABLEICSELLApiFp(this.configuration).tABLEICSELLPriceCodeGet(priceCode, options).then((request) => request(this.axios, this.basePath));
    }
}