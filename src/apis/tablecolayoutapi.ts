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
import { PagedTABLECOLAYOUT } from '../models';
// @ts-ignore
import { TABLECOLAYOUT } from '../models';
/**
 * TABLECOLAYOUTApi - axios parameter creator
 * @export
 */
export const TABLECOLAYOUTApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOLAYOUTGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_COLAYOUT`;
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
        tABLECOLAYOUTLayoutIDGet: async (layoutID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'layoutID' is not null or undefined
            assertParamExists('tABLECOLAYOUTLayoutIDGet', 'layoutID', layoutID)
            const localVarPath = `/TABLE_COLAYOUT('{LayoutID}')`
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
 * TABLECOLAYOUTApi - functional programming interface
 * @export
 */
export const TABLECOLAYOUTApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECOLAYOUTApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOLAYOUTGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECOLAYOUT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOLAYOUTGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} layoutID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECOLAYOUTLayoutIDGet(layoutID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECOLAYOUT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECOLAYOUTLayoutIDGet(layoutID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECOLAYOUTApi - factory interface
 * @export
 */
export const TABLECOLAYOUTApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECOLAYOUTApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOLAYOUTGet(options?: any): AxiosPromise<PagedTABLECOLAYOUT> {
            return localVarFp.tABLECOLAYOUTGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} layoutID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECOLAYOUTLayoutIDGet(layoutID: number, options?: any): AxiosPromise<TABLECOLAYOUT> {
            return localVarFp.tABLECOLAYOUTLayoutIDGet(layoutID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECOLAYOUTApi - interface
 * @export
 * @interface TABLECOLAYOUTApi
 */
export interface TABLECOLAYOUTApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOLAYOUTApiInterface
     */
    tABLECOLAYOUTGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECOLAYOUT>;

    /**
     * 
     * @param {number} layoutID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOLAYOUTApiInterface
     */
    tABLECOLAYOUTLayoutIDGet(layoutID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECOLAYOUT>;

}

/**
 * TABLECOLAYOUTApi - object-oriented interface
 * @export
 * @class TABLECOLAYOUTApi
 * @extends {BaseAPI}
 */
export class TABLECOLAYOUTApi extends BaseAPI implements TABLECOLAYOUTApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOLAYOUTApi
     */
    public tABLECOLAYOUTGet(options?: AxiosRequestConfig) {
        return TABLECOLAYOUTApiFp(this.configuration).tABLECOLAYOUTGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} layoutID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECOLAYOUTApi
     */
    public tABLECOLAYOUTLayoutIDGet(layoutID: number, options?: AxiosRequestConfig) {
        return TABLECOLAYOUTApiFp(this.configuration).tABLECOLAYOUTLayoutIDGet(layoutID, options).then((request) => request(this.axios, this.basePath));
    }
}
