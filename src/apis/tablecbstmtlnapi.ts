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
import { PagedTABLECBSTMTLN } from '../models';
// @ts-ignore
import { TABLECBSTMTLN } from '../models';
/**
 * TABLECBSTMTLNApi - axios parameter creator
 * @export
 */
export const TABLECBSTMTLNApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBSTMTLNGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBSTMTLN`;
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
         * @param {number} statementID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBSTMTLNStatementIDGet: async (statementID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'statementID' is not null or undefined
            assertParamExists('tABLECBSTMTLNStatementIDGet', 'statementID', statementID)
            const localVarPath = `/TABLE_CBSTMTLN('{StatementID}')`
                .replace(`{${"StatementID"}}`, encodeURIComponent(String(statementID)));
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
 * TABLECBSTMTLNApi - functional programming interface
 * @export
 */
export const TABLECBSTMTLNApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBSTMTLNApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBSTMTLNGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBSTMTLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBSTMTLNGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} statementID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBSTMTLNStatementIDGet(statementID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBSTMTLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBSTMTLNStatementIDGet(statementID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBSTMTLNApi - factory interface
 * @export
 */
export const TABLECBSTMTLNApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBSTMTLNApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBSTMTLNGet(options?: any): AxiosPromise<PagedTABLECBSTMTLN> {
            return localVarFp.tABLECBSTMTLNGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} statementID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBSTMTLNStatementIDGet(statementID: number, options?: any): AxiosPromise<TABLECBSTMTLN> {
            return localVarFp.tABLECBSTMTLNStatementIDGet(statementID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBSTMTLNApi - interface
 * @export
 * @interface TABLECBSTMTLNApi
 */
export interface TABLECBSTMTLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBSTMTLNApiInterface
     */
    tABLECBSTMTLNGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBSTMTLN>;

    /**
     * 
     * @param {number} statementID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBSTMTLNApiInterface
     */
    tABLECBSTMTLNStatementIDGet(statementID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECBSTMTLN>;

}

/**
 * TABLECBSTMTLNApi - object-oriented interface
 * @export
 * @class TABLECBSTMTLNApi
 * @extends {BaseAPI}
 */
export class TABLECBSTMTLNApi extends BaseAPI implements TABLECBSTMTLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBSTMTLNApi
     */
    public tABLECBSTMTLNGet(options?: AxiosRequestConfig) {
        return TABLECBSTMTLNApiFp(this.configuration).tABLECBSTMTLNGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} statementID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBSTMTLNApi
     */
    public tABLECBSTMTLNStatementIDGet(statementID: number, options?: AxiosRequestConfig) {
        return TABLECBSTMTLNApiFp(this.configuration).tABLECBSTMTLNStatementIDGet(statementID, options).then((request) => request(this.axios, this.basePath));
    }
}
