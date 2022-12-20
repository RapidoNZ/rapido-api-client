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
import { PagedTABLECOLAYLN } from '../models';
// @ts-ignore
import { TABLECOLAYLN } from '../models';
/**
 * TABLECOLAYLNApi - axios parameter creator
 * @export
 */
export const TABLECOLAYLNApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOLAYLNGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_COLAYLN`;
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
         * @param {number} layoutID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOLAYLNLayoutIDGet: async (layoutID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'layoutID' is not null or undefined
            assertParamExists('tABLECOLAYLNLayoutIDGet', 'layoutID', layoutID)
            const localVarPath = `/TABLE_COLAYLN('{LayoutID}')`
                .replace(`{${"LayoutID"}}`, encodeURIComponent(String(layoutID)));
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
 * TABLECOLAYLNApi - functional programming interface
 * @export
 */
export const TABLECOLAYLNApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECOLAYLNApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOLAYLNGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECOLAYLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOLAYLNGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} layoutID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOLAYLNLayoutIDGet(layoutID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECOLAYLN>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOLAYLNLayoutIDGet(layoutID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECOLAYLNApi - factory interface
 * @export
 */
export const TABLECOLAYLNApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECOLAYLNApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOLAYLNGet(options?: any): AxiosPromise<PagedTABLECOLAYLN> {
            return localVarFp.tABLECOLAYLNGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} layoutID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOLAYLNLayoutIDGet(layoutID: number, options?: any): AxiosPromise<TABLECOLAYLN> {
            return localVarFp.tABLECOLAYLNLayoutIDGet(layoutID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECOLAYLNApi - interface
 * @export
 * @interface TABLECOLAYLNApi
 */
export interface TABLECOLAYLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOLAYLNApiInterface
     */
    tABLECOLAYLNGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECOLAYLN>;

    /**
     * 
     * @param {number} layoutID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOLAYLNApiInterface
     */
    tABLECOLAYLNLayoutIDGet(layoutID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECOLAYLN>;

}

/**
 * TABLECOLAYLNApi - object-oriented interface
 * @export
 * @class TABLECOLAYLNApi
 * @extends {BaseAPI}
 */
export class TABLECOLAYLNApi extends BaseAPI implements TABLECOLAYLNApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOLAYLNApi
     */
    public tABLECOLAYLNGet(options?: AxiosRequestConfig) {
        return TABLECOLAYLNApiFp(this.configuration).tABLECOLAYLNGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} layoutID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOLAYLNApi
     */
    public tABLECOLAYLNLayoutIDGet(layoutID: number, options?: AxiosRequestConfig) {
        return TABLECOLAYLNApiFp(this.configuration).tABLECOLAYLNLayoutIDGet(layoutID, options).then((request) => request(this.axios, this.basePath));
    }
}