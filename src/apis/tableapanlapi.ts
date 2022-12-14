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
import { PagedTABLEAPANL } from '../models';
// @ts-ignore
import { TABLEAPANL } from '../models';
/**
 * TABLEAPANLApi - axios parameter creator
 * @export
 */
export const TABLEAPANLApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPANLAnalysisCodeGet: async (analysisCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'analysisCode' is not null or undefined
            assertParamExists('tABLEAPANLAnalysisCodeGet', 'analysisCode', analysisCode)
            const localVarPath = `/TABLE_APANL('{AnalysisCode}')`
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
        tABLEAPANLGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APANL`;
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
 * TABLEAPANLApi - functional programming interface
 * @export
 */
export const TABLEAPANLApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPANLApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPANLAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPANL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPANLAnalysisCodeGet(analysisCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPANLGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPANL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPANLGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPANLApi - factory interface
 * @export
 */
export const TABLEAPANLApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPANLApiFp(configuration)
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPANLAnalysisCodeGet(analysisCode: string, options?: any): AxiosPromise<TABLEAPANL> {
            return localVarFp.tABLEAPANLAnalysisCodeGet(analysisCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPANLGet(options?: any): AxiosPromise<PagedTABLEAPANL> {
            return localVarFp.tABLEAPANLGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPANLApi - interface
 * @export
 * @interface TABLEAPANLApi
 */
export interface TABLEAPANLApiInterface {
    /**
     * 
     * @param {string} analysisCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPANLApiInterface
     */
    tABLEAPANLAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEAPANL>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPANLApiInterface
     */
    tABLEAPANLGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPANL>;

}

/**
 * TABLEAPANLApi - object-oriented interface
 * @export
 * @class TABLEAPANLApi
 * @extends {BaseAPI}
 */
export class TABLEAPANLApi extends BaseAPI implements TABLEAPANLApiInterface {
    /**
     * 
     * @param {string} analysisCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPANLApi
     */
    public tABLEAPANLAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig) {
        return TABLEAPANLApiFp(this.configuration).tABLEAPANLAnalysisCodeGet(analysisCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPANLApi
     */
    public tABLEAPANLGet(options?: AxiosRequestConfig) {
        return TABLEAPANLApiFp(this.configuration).tABLEAPANLGet(options).then((request) => request(this.axios, this.basePath));
    }
}
