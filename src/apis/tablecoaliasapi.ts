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
import { PagedTABLECOALIAS } from '../models';
// @ts-ignore
import { TABLECOALIAS } from '../models';
/**
 * TABLECOALIASApi - axios parameter creator
 * @export
 */
export const TABLECOALIASApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} aliasID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOALIASAliasIDGet: async (aliasID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aliasID' is not null or undefined
            assertParamExists('tABLECOALIASAliasIDGet', 'aliasID', aliasID)
            const localVarPath = `/TABLE_COALIAS('{AliasID}')`
                .replace(`{${"AliasID"}}`, encodeURIComponent(String(aliasID)));
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
        tABLECOALIASGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_COALIAS`;
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
 * TABLECOALIASApi - functional programming interface
 * @export
 */
export const TABLECOALIASApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECOALIASApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} aliasID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOALIASAliasIDGet(aliasID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECOALIAS>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOALIASAliasIDGet(aliasID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOALIASGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECOALIAS>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOALIASGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECOALIASApi - factory interface
 * @export
 */
export const TABLECOALIASApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECOALIASApiFp(configuration)
    return {
        /**
         * 
         * @param {number} aliasID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOALIASAliasIDGet(aliasID: number, options?: any): AxiosPromise<TABLECOALIAS> {
            return localVarFp.tABLECOALIASAliasIDGet(aliasID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOALIASGet(options?: any): AxiosPromise<PagedTABLECOALIAS> {
            return localVarFp.tABLECOALIASGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECOALIASApi - interface
 * @export
 * @interface TABLECOALIASApi
 */
export interface TABLECOALIASApiInterface {
    /**
     * 
     * @param {number} aliasID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOALIASApiInterface
     */
    tABLECOALIASAliasIDGet(aliasID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECOALIAS>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOALIASApiInterface
     */
    tABLECOALIASGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECOALIAS>;

}

/**
 * TABLECOALIASApi - object-oriented interface
 * @export
 * @class TABLECOALIASApi
 * @extends {BaseAPI}
 */
export class TABLECOALIASApi extends BaseAPI implements TABLECOALIASApiInterface {
    /**
     * 
     * @param {number} aliasID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOALIASApi
     */
    public tABLECOALIASAliasIDGet(aliasID: number, options?: AxiosRequestConfig) {
        return TABLECOALIASApiFp(this.configuration).tABLECOALIASAliasIDGet(aliasID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOALIASApi
     */
    public tABLECOALIASGet(options?: AxiosRequestConfig) {
        return TABLECOALIASApiFp(this.configuration).tABLECOALIASGet(options).then((request) => request(this.axios, this.basePath));
    }
}
