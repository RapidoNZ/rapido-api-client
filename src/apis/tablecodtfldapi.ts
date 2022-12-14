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
import { PagedTABLECODTFLD } from '../models';
// @ts-ignore
import { TABLECODTFLD } from '../models';
/**
 * TABLECODTFLDApi - axios parameter creator
 * @export
 */
export const TABLECODTFLDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECODTFLDDeltaIDGet: async (deltaID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deltaID' is not null or undefined
            assertParamExists('tABLECODTFLDDeltaIDGet', 'deltaID', deltaID)
            const localVarPath = `/TABLE_CODTFLD('{DeltaID}')`
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
        tABLECODTFLDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CODTFLD`;
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
 * TABLECODTFLDApi - functional programming interface
 * @export
 */
export const TABLECODTFLDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECODTFLDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECODTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECODTFLD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECODTFLDDeltaIDGet(deltaID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECODTFLDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECODTFLD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECODTFLDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECODTFLDApi - factory interface
 * @export
 */
export const TABLECODTFLDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECODTFLDApiFp(configuration)
    return {
        /**
         * 
         * @param {number} deltaID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECODTFLDDeltaIDGet(deltaID: number, options?: any): AxiosPromise<TABLECODTFLD> {
            return localVarFp.tABLECODTFLDDeltaIDGet(deltaID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECODTFLDGet(options?: any): AxiosPromise<PagedTABLECODTFLD> {
            return localVarFp.tABLECODTFLDGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECODTFLDApi - interface
 * @export
 * @interface TABLECODTFLDApi
 */
export interface TABLECODTFLDApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECODTFLDApiInterface
     */
    tABLECODTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECODTFLD>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECODTFLDApiInterface
     */
    tABLECODTFLDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECODTFLD>;

}

/**
 * TABLECODTFLDApi - object-oriented interface
 * @export
 * @class TABLECODTFLDApi
 * @extends {BaseAPI}
 */
export class TABLECODTFLDApi extends BaseAPI implements TABLECODTFLDApiInterface {
    /**
     * 
     * @param {number} deltaID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECODTFLDApi
     */
    public tABLECODTFLDDeltaIDGet(deltaID: number, options?: AxiosRequestConfig) {
        return TABLECODTFLDApiFp(this.configuration).tABLECODTFLDDeltaIDGet(deltaID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECODTFLDApi
     */
    public tABLECODTFLDGet(options?: AxiosRequestConfig) {
        return TABLECODTFLDApiFp(this.configuration).tABLECODTFLDGet(options).then((request) => request(this.axios, this.basePath));
    }
}
