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
import { PagedTABLEARANLTX } from '../models';
// @ts-ignore
import { TABLEARANLTX } from '../models';
/**
 * TABLEARANLTXApi - axios parameter creator
 * @export
 */
export const TABLEARANLTXApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARANLTXGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ARANLTX`;
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
         * @param {string} regimeCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARANLTXRegimeCodeGet: async (regimeCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'regimeCode' is not null or undefined
            assertParamExists('tABLEARANLTXRegimeCodeGet', 'regimeCode', regimeCode)
            const localVarPath = `/TABLE_ARANLTX('{RegimeCode}')`
                .replace(`{${"RegimeCode"}}`, encodeURIComponent(String(regimeCode)));
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
 * TABLEARANLTXApi - functional programming interface
 * @export
 */
export const TABLEARANLTXApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEARANLTXApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARANLTXGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEARANLTX>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARANLTXGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} regimeCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARANLTXRegimeCodeGet(regimeCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEARANLTX>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARANLTXRegimeCodeGet(regimeCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEARANLTXApi - factory interface
 * @export
 */
export const TABLEARANLTXApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEARANLTXApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARANLTXGet(options?: any): AxiosPromise<PagedTABLEARANLTX> {
            return localVarFp.tABLEARANLTXGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} regimeCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARANLTXRegimeCodeGet(regimeCode: string, options?: any): AxiosPromise<TABLEARANLTX> {
            return localVarFp.tABLEARANLTXRegimeCodeGet(regimeCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEARANLTXApi - interface
 * @export
 * @interface TABLEARANLTXApi
 */
export interface TABLEARANLTXApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARANLTXApiInterface
     */
    tABLEARANLTXGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEARANLTX>;

    /**
     * 
     * @param {string} regimeCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARANLTXApiInterface
     */
    tABLEARANLTXRegimeCodeGet(regimeCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEARANLTX>;

}

/**
 * TABLEARANLTXApi - object-oriented interface
 * @export
 * @class TABLEARANLTXApi
 * @extends {BaseAPI}
 */
export class TABLEARANLTXApi extends BaseAPI implements TABLEARANLTXApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARANLTXApi
     */
    public tABLEARANLTXGet(options?: AxiosRequestConfig) {
        return TABLEARANLTXApiFp(this.configuration).tABLEARANLTXGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} regimeCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARANLTXApi
     */
    public tABLEARANLTXRegimeCodeGet(regimeCode: string, options?: AxiosRequestConfig) {
        return TABLEARANLTXApiFp(this.configuration).tABLEARANLTXRegimeCodeGet(regimeCode, options).then((request) => request(this.axios, this.basePath));
    }
}
