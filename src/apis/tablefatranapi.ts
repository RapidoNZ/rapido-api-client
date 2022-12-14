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
import { PagedTABLEFATRAN } from '../models';
// @ts-ignore
import { TABLEFATRAN } from '../models';
/**
 * TABLEFATRANApi - axios parameter creator
 * @export
 */
export const TABLEFATRANApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFATRANGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_FATRAN`;
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
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFATRANTransactionIDGet: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('tABLEFATRANTransactionIDGet', 'transactionID', transactionID)
            const localVarPath = `/TABLE_FATRAN('{TransactionID}')`
                .replace(`{${"TransactionID"}}`, encodeURIComponent(String(transactionID)));
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
 * TABLEFATRANApi - functional programming interface
 * @export
 */
export const TABLEFATRANApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEFATRANApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFATRANGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEFATRAN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFATRANGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFATRANTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEFATRAN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFATRANTransactionIDGet(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEFATRANApi - factory interface
 * @export
 */
export const TABLEFATRANApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEFATRANApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFATRANGet(options?: any): AxiosPromise<PagedTABLEFATRAN> {
            return localVarFp.tABLEFATRANGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFATRANTransactionIDGet(transactionID: number, options?: any): AxiosPromise<TABLEFATRAN> {
            return localVarFp.tABLEFATRANTransactionIDGet(transactionID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEFATRANApi - interface
 * @export
 * @interface TABLEFATRANApi
 */
export interface TABLEFATRANApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFATRANApiInterface
     */
    tABLEFATRANGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEFATRAN>;

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFATRANApiInterface
     */
    tABLEFATRANTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEFATRAN>;

}

/**
 * TABLEFATRANApi - object-oriented interface
 * @export
 * @class TABLEFATRANApi
 * @extends {BaseAPI}
 */
export class TABLEFATRANApi extends BaseAPI implements TABLEFATRANApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFATRANApi
     */
    public tABLEFATRANGet(options?: AxiosRequestConfig) {
        return TABLEFATRANApiFp(this.configuration).tABLEFATRANGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFATRANApi
     */
    public tABLEFATRANTransactionIDGet(transactionID: number, options?: AxiosRequestConfig) {
        return TABLEFATRANApiFp(this.configuration).tABLEFATRANTransactionIDGet(transactionID, options).then((request) => request(this.axios, this.basePath));
    }
}
