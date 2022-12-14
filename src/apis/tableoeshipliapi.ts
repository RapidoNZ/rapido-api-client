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
import { PagedTABLEOESHIPLI } from '../models';
// @ts-ignore
import { TABLEOESHIPLI } from '../models';
/**
 * TABLEOESHIPLIApi - axios parameter creator
 * @export
 */
export const TABLEOESHIPLIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOESHIPLIGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_OESHIPLI`;
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
         * @param {number} lineID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOESHIPLILineIDGet: async (lineID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'lineID' is not null or undefined
            assertParamExists('tABLEOESHIPLILineIDGet', 'lineID', lineID)
            const localVarPath = `/TABLE_OESHIPLI('{LineID}')`
                .replace(`{${"LineID"}}`, encodeURIComponent(String(lineID)));
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
 * TABLEOESHIPLIApi - functional programming interface
 * @export
 */
export const TABLEOESHIPLIApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEOESHIPLIApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEOESHIPLIGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEOESHIPLI>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEOESHIPLIGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} lineID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEOESHIPLILineIDGet(lineID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEOESHIPLI>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEOESHIPLILineIDGet(lineID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEOESHIPLIApi - factory interface
 * @export
 */
export const TABLEOESHIPLIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEOESHIPLIApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOESHIPLIGet(options?: any): AxiosPromise<PagedTABLEOESHIPLI> {
            return localVarFp.tABLEOESHIPLIGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} lineID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEOESHIPLILineIDGet(lineID: number, options?: any): AxiosPromise<TABLEOESHIPLI> {
            return localVarFp.tABLEOESHIPLILineIDGet(lineID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEOESHIPLIApi - interface
 * @export
 * @interface TABLEOESHIPLIApi
 */
export interface TABLEOESHIPLIApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOESHIPLIApiInterface
     */
    tABLEOESHIPLIGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEOESHIPLI>;

    /**
     * 
     * @param {number} lineID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOESHIPLIApiInterface
     */
    tABLEOESHIPLILineIDGet(lineID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEOESHIPLI>;

}

/**
 * TABLEOESHIPLIApi - object-oriented interface
 * @export
 * @class TABLEOESHIPLIApi
 * @extends {BaseAPI}
 */
export class TABLEOESHIPLIApi extends BaseAPI implements TABLEOESHIPLIApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOESHIPLIApi
     */
    public tABLEOESHIPLIGet(options?: AxiosRequestConfig) {
        return TABLEOESHIPLIApiFp(this.configuration).tABLEOESHIPLIGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} lineID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEOESHIPLIApi
     */
    public tABLEOESHIPLILineIDGet(lineID: number, options?: AxiosRequestConfig) {
        return TABLEOESHIPLIApiFp(this.configuration).tABLEOESHIPLILineIDGet(lineID, options).then((request) => request(this.axios, this.basePath));
    }
}
