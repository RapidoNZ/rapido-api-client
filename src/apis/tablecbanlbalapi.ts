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
import { PagedTABLECBANLBAL } from '../models';
// @ts-ignore
import { TABLECBANLBAL } from '../models';
/**
 * TABLECBANLBALApi - axios parameter creator
 * @export
 */
export const TABLECBANLBALApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBANLBALAnalysisCodeGet: async (analysisCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'analysisCode' is not null or undefined
            assertParamExists('tABLECBANLBALAnalysisCodeGet', 'analysisCode', analysisCode)
            const localVarPath = `/TABLE_CBANLBAL('{AnalysisCode}')`
                .replace(`{${"AnalysisCode"}}`, encodeURIComponent(String(analysisCode)));
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBANLBALGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBANLBAL`;
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
 * TABLECBANLBALApi - functional programming interface
 * @export
 */
export const TABLECBANLBALApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBANLBALApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBANLBALAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBANLBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBANLBALAnalysisCodeGet(analysisCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBANLBALGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBANLBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBANLBALGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBANLBALApi - factory interface
 * @export
 */
export const TABLECBANLBALApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBANLBALApiFp(configuration)
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBANLBALAnalysisCodeGet(analysisCode: string, options?: any): AxiosPromise<TABLECBANLBAL> {
            return localVarFp.tABLECBANLBALAnalysisCodeGet(analysisCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBANLBALGet(options?: any): AxiosPromise<PagedTABLECBANLBAL> {
            return localVarFp.tABLECBANLBALGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBANLBALApi - interface
 * @export
 * @interface TABLECBANLBALApi
 */
export interface TABLECBANLBALApiInterface {
    /**
     * 
     * @param {string} analysisCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBANLBALApiInterface
     */
    tABLECBANLBALAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLECBANLBAL>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBANLBALApiInterface
     */
    tABLECBANLBALGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBANLBAL>;

}

/**
 * TABLECBANLBALApi - object-oriented interface
 * @export
 * @class TABLECBANLBALApi
 * @extends {BaseAPI}
 */
export class TABLECBANLBALApi extends BaseAPI implements TABLECBANLBALApiInterface {
    /**
     * 
     * @param {string} analysisCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBANLBALApi
     */
    public tABLECBANLBALAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig) {
        return TABLECBANLBALApiFp(this.configuration).tABLECBANLBALAnalysisCodeGet(analysisCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBANLBALApi
     */
    public tABLECBANLBALGet(options?: AxiosRequestConfig) {
        return TABLECBANLBALApiFp(this.configuration).tABLECBANLBALGet(options).then((request) => request(this.axios, this.basePath));
    }
}
