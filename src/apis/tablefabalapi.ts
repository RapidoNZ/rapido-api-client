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
import { PagedTABLEFABAL } from '../models';
// @ts-ignore
import { TABLEFABAL } from '../models';
/**
 * TABLEFABALApi - axios parameter creator
 * @export
 */
export const TABLEFABALApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} assetCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFABALAssetCodeGet: async (assetCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assetCode' is not null or undefined
            assertParamExists('tABLEFABALAssetCodeGet', 'assetCode', assetCode)
            const localVarPath = `/TABLE_FABAL('{AssetCode}')`
                .replace(`{${"AssetCode"}}`, encodeURIComponent(String(assetCode)));
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
        tABLEFABALGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_FABAL`;
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
 * TABLEFABALApi - functional programming interface
 * @export
 */
export const TABLEFABALApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEFABALApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} assetCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFABALAssetCodeGet(assetCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEFABAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFABALAssetCodeGet(assetCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFABALGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEFABAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFABALGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEFABALApi - factory interface
 * @export
 */
export const TABLEFABALApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEFABALApiFp(configuration)
    return {
        /**
         * 
         * @param {string} assetCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFABALAssetCodeGet(assetCode: string, options?: any): AxiosPromise<TABLEFABAL> {
            return localVarFp.tABLEFABALAssetCodeGet(assetCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFABALGet(options?: any): AxiosPromise<PagedTABLEFABAL> {
            return localVarFp.tABLEFABALGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEFABALApi - interface
 * @export
 * @interface TABLEFABALApi
 */
export interface TABLEFABALApiInterface {
    /**
     * 
     * @param {string} assetCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFABALApiInterface
     */
    tABLEFABALAssetCodeGet(assetCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEFABAL>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFABALApiInterface
     */
    tABLEFABALGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEFABAL>;

}

/**
 * TABLEFABALApi - object-oriented interface
 * @export
 * @class TABLEFABALApi
 * @extends {BaseAPI}
 */
export class TABLEFABALApi extends BaseAPI implements TABLEFABALApiInterface {
    /**
     * 
     * @param {string} assetCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFABALApi
     */
    public tABLEFABALAssetCodeGet(assetCode: string, options?: AxiosRequestConfig) {
        return TABLEFABALApiFp(this.configuration).tABLEFABALAssetCodeGet(assetCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFABALApi
     */
    public tABLEFABALGet(options?: AxiosRequestConfig) {
        return TABLEFABALApiFp(this.configuration).tABLEFABALGet(options).then((request) => request(this.axios, this.basePath));
    }
}
