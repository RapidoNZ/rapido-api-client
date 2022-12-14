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
import { PagedTABLEGLTRAN } from '../models';
// @ts-ignore
import { TABLEGLTRAN } from '../models';
/**
 * TABLEGLTRANApi - axios parameter creator
 * @export
 */
export const TABLEGLTRANApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLTRANGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_GLTRAN`;
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
        tABLEGLTRANTransactionIDGet: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('tABLEGLTRANTransactionIDGet', 'transactionID', transactionID)
            const localVarPath = `/TABLE_GLTRAN('{TransactionID}')`
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
 * TABLEGLTRANApi - functional programming interface
 * @export
 */
export const TABLEGLTRANApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEGLTRANApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLTRANGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEGLTRAN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLTRANGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLTRANTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEGLTRAN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLTRANTransactionIDGet(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEGLTRANApi - factory interface
 * @export
 */
export const TABLEGLTRANApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEGLTRANApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLTRANGet(options?: any): AxiosPromise<PagedTABLEGLTRAN> {
            return localVarFp.tABLEGLTRANGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLTRANTransactionIDGet(transactionID: number, options?: any): AxiosPromise<TABLEGLTRAN> {
            return localVarFp.tABLEGLTRANTransactionIDGet(transactionID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEGLTRANApi - interface
 * @export
 * @interface TABLEGLTRANApi
 */
export interface TABLEGLTRANApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLTRANApiInterface
     */
    tABLEGLTRANGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEGLTRAN>;

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLTRANApiInterface
     */
    tABLEGLTRANTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEGLTRAN>;

}

/**
 * TABLEGLTRANApi - object-oriented interface
 * @export
 * @class TABLEGLTRANApi
 * @extends {BaseAPI}
 */
export class TABLEGLTRANApi extends BaseAPI implements TABLEGLTRANApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLTRANApi
     */
    public tABLEGLTRANGet(options?: AxiosRequestConfig) {
        return TABLEGLTRANApiFp(this.configuration).tABLEGLTRANGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLTRANApi
     */
    public tABLEGLTRANTransactionIDGet(transactionID: number, options?: AxiosRequestConfig) {
        return TABLEGLTRANApiFp(this.configuration).tABLEGLTRANTransactionIDGet(transactionID, options).then((request) => request(this.axios, this.basePath));
    }
}
