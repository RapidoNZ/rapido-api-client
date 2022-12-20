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
import { PagedTABLEGLDTFLD } from '../models';
// @ts-ignore
import { TABLEGLDTFLD } from '../models';
/**
 * TABLEGLDTFLDApi - axios parameter creator
 * @export
 */
export const TABLEGLDTFLDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLDTFLDDeltaIDGet: async (deltaID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deltaID' is not null or undefined
            assertParamExists('tABLEGLDTFLDDeltaIDGet', 'deltaID', deltaID)
            const localVarPath = `/TABLE_GLDTFLD('{DeltaID}')`
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
        tABLEGLDTFLDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_GLDTFLD`;
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
 * TABLEGLDTFLDApi - functional programming interface
 * @export
 */
export const TABLEGLDTFLDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEGLDTFLDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLDTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEGLDTFLD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLDTFLDDeltaIDGet(deltaID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLDTFLDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEGLDTFLD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLDTFLDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEGLDTFLDApi - factory interface
 * @export
 */
export const TABLEGLDTFLDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEGLDTFLDApiFp(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLDTFLDDeltaIDGet(deltaID: number, options?: any): AxiosPromise<TABLEGLDTFLD> {
            return localVarFp.tABLEGLDTFLDDeltaIDGet(deltaID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLDTFLDGet(options?: any): AxiosPromise<PagedTABLEGLDTFLD> {
            return localVarFp.tABLEGLDTFLDGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEGLDTFLDApi - interface
 * @export
 * @interface TABLEGLDTFLDApi
 */
export interface TABLEGLDTFLDApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLDTFLDApiInterface
     */
    tABLEGLDTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEGLDTFLD>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLDTFLDApiInterface
     */
    tABLEGLDTFLDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEGLDTFLD>;

}

/**
 * TABLEGLDTFLDApi - object-oriented interface
 * @export
 * @class TABLEGLDTFLDApi
 * @extends {BaseAPI}
 */
export class TABLEGLDTFLDApi extends BaseAPI implements TABLEGLDTFLDApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLDTFLDApi
     */
    public tABLEGLDTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig) {
        return TABLEGLDTFLDApiFp(this.configuration).tABLEGLDTFLDDeltaIDGet(deltaID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLDTFLDApi
     */
    public tABLEGLDTFLDGet(options?: AxiosRequestConfig) {
        return TABLEGLDTFLDApiFp(this.configuration).tABLEGLDTFLDGet(options).then((request) => request(this.axios, this.basePath));
    }
}
