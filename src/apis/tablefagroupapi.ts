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
import { PagedTABLEFAGROUP } from '../models';
// @ts-ignore
import { TABLEFAGROUP } from '../models';
/**
 * TABLEFAGROUPApi - axios parameter creator
 * @export
 */
export const TABLEFAGROUPApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} assetGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFAGROUPAssetGroupCodeGet: async (assetGroupCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assetGroupCode' is not null or undefined
            assertParamExists('tABLEFAGROUPAssetGroupCodeGet', 'assetGroupCode', assetGroupCode)
            const localVarPath = `/TABLE_FAGROUP('{AssetGroupCode}')`
                .replace(`{${"AssetGroupCode"}}`, encodeURIComponent(String(assetGroupCode)));
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
        tABLEFAGROUPGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_FAGROUP`;
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
 * TABLEFAGROUPApi - functional programming interface
 * @export
 */
export const TABLEFAGROUPApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEFAGROUPApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} assetGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFAGROUPAssetGroupCodeGet(assetGroupCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEFAGROUP>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFAGROUPAssetGroupCodeGet(assetGroupCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFAGROUPGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEFAGROUP>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFAGROUPGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEFAGROUPApi - factory interface
 * @export
 */
export const TABLEFAGROUPApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEFAGROUPApiFp(configuration)
    return {
        /**
         * 
         * @param {string} assetGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFAGROUPAssetGroupCodeGet(assetGroupCode: string, options?: any): AxiosPromise<TABLEFAGROUP> {
            return localVarFp.tABLEFAGROUPAssetGroupCodeGet(assetGroupCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFAGROUPGet(options?: any): AxiosPromise<PagedTABLEFAGROUP> {
            return localVarFp.tABLEFAGROUPGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEFAGROUPApi - interface
 * @export
 * @interface TABLEFAGROUPApi
 */
export interface TABLEFAGROUPApiInterface {
    /**
     * 
     * @param {string} assetGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFAGROUPApiInterface
     */
    tABLEFAGROUPAssetGroupCodeGet(assetGroupCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEFAGROUP>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFAGROUPApiInterface
     */
    tABLEFAGROUPGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEFAGROUP>;

}

/**
 * TABLEFAGROUPApi - object-oriented interface
 * @export
 * @class TABLEFAGROUPApi
 * @extends {BaseAPI}
 */
export class TABLEFAGROUPApi extends BaseAPI implements TABLEFAGROUPApiInterface {
    /**
     * 
     * @param {string} assetGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFAGROUPApi
     */
    public tABLEFAGROUPAssetGroupCodeGet(assetGroupCode: string, options?: AxiosRequestConfig) {
        return TABLEFAGROUPApiFp(this.configuration).tABLEFAGROUPAssetGroupCodeGet(assetGroupCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFAGROUPApi
     */
    public tABLEFAGROUPGet(options?: AxiosRequestConfig) {
        return TABLEFAGROUPApiFp(this.configuration).tABLEFAGROUPGet(options).then((request) => request(this.axios, this.basePath));
    }
}
