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
import { PagedTABLEJCCOST } from '../models';
// @ts-ignore
import { TABLEJCCOST } from '../models';
/**
 * TABLEJCCOSTApi - axios parameter creator
 * @export
 */
export const TABLEJCCOSTApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCCOSTAnalysisCodeGet: async (analysisCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'analysisCode' is not null or undefined
            assertParamExists('tABLEJCCOSTAnalysisCodeGet', 'analysisCode', analysisCode)
            const localVarPath = `/TABLE_JCCOST('{AnalysisCode}')`
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
        tABLEJCCOSTGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_JCCOST`;
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
 * TABLEJCCOSTApi - functional programming interface
 * @export
 */
export const TABLEJCCOSTApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEJCCOSTApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCCOSTAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEJCCOST>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCCOSTAnalysisCodeGet(analysisCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCCOSTGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEJCCOST>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCCOSTGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEJCCOSTApi - factory interface
 * @export
 */
export const TABLEJCCOSTApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEJCCOSTApiFp(configuration)
    return {
        /**
         * 
         * @param {string} analysisCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCCOSTAnalysisCodeGet(analysisCode: string, options?: any): AxiosPromise<TABLEJCCOST> {
            return localVarFp.tABLEJCCOSTAnalysisCodeGet(analysisCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCCOSTGet(options?: any): AxiosPromise<PagedTABLEJCCOST> {
            return localVarFp.tABLEJCCOSTGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEJCCOSTApi - interface
 * @export
 * @interface TABLEJCCOSTApi
 */
export interface TABLEJCCOSTApiInterface {
    /**
     * 
     * @param {string} analysisCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCCOSTApiInterface
     */
    tABLEJCCOSTAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEJCCOST>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCCOSTApiInterface
     */
    tABLEJCCOSTGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEJCCOST>;

}

/**
 * TABLEJCCOSTApi - object-oriented interface
 * @export
 * @class TABLEJCCOSTApi
 * @extends {BaseAPI}
 */
export class TABLEJCCOSTApi extends BaseAPI implements TABLEJCCOSTApiInterface {
    /**
     * 
     * @param {string} analysisCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCCOSTApi
     */
    public tABLEJCCOSTAnalysisCodeGet(analysisCode: string, options?: AxiosRequestConfig) {
        return TABLEJCCOSTApiFp(this.configuration).tABLEJCCOSTAnalysisCodeGet(analysisCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCCOSTApi
     */
    public tABLEJCCOSTGet(options?: AxiosRequestConfig) {
        return TABLEJCCOSTApiFp(this.configuration).tABLEJCCOSTGet(options).then((request) => request(this.axios, this.basePath));
    }
}
