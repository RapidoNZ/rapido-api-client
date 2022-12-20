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
import { PagedTABLEFADTFLD } from '../models';
// @ts-ignore
import { TABLEFADTFLD } from '../models';
/**
 * TABLEFADTFLDApi - axios parameter creator
 * @export
 */
export const TABLEFADTFLDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFADTFLDDeltaIDGet: async (deltaID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deltaID' is not null or undefined
            assertParamExists('tABLEFADTFLDDeltaIDGet', 'deltaID', deltaID)
            const localVarPath = `/TABLE_FADTFLD('{DeltaID}')`
                .replace(`{${"DeltaID"}}`, encodeURIComponent(String(deltaID)));
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
        tABLEFADTFLDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_FADTFLD`;
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
 * TABLEFADTFLDApi - functional programming interface
 * @export
 */
export const TABLEFADTFLDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEFADTFLDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFADTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEFADTFLD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFADTFLDDeltaIDGet(deltaID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEFADTFLDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEFADTFLD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEFADTFLDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEFADTFLDApi - factory interface
 * @export
 */
export const TABLEFADTFLDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEFADTFLDApiFp(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFADTFLDDeltaIDGet(deltaID: number, options?: any): AxiosPromise<TABLEFADTFLD> {
            return localVarFp.tABLEFADTFLDDeltaIDGet(deltaID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEFADTFLDGet(options?: any): AxiosPromise<PagedTABLEFADTFLD> {
            return localVarFp.tABLEFADTFLDGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEFADTFLDApi - interface
 * @export
 * @interface TABLEFADTFLDApi
 */
export interface TABLEFADTFLDApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFADTFLDApiInterface
     */
    tABLEFADTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEFADTFLD>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFADTFLDApiInterface
     */
    tABLEFADTFLDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEFADTFLD>;

}

/**
 * TABLEFADTFLDApi - object-oriented interface
 * @export
 * @class TABLEFADTFLDApi
 * @extends {BaseAPI}
 */
export class TABLEFADTFLDApi extends BaseAPI implements TABLEFADTFLDApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFADTFLDApi
     */
    public tABLEFADTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig) {
        return TABLEFADTFLDApiFp(this.configuration).tABLEFADTFLDDeltaIDGet(deltaID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEFADTFLDApi
     */
    public tABLEFADTFLDGet(options?: AxiosRequestConfig) {
        return TABLEFADTFLDApiFp(this.configuration).tABLEFADTFLDGet(options).then((request) => request(this.axios, this.basePath));
    }
}