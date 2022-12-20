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
import { PagedTABLEGLHEAD } from '../models';
// @ts-ignore
import { TABLEGLHEAD } from '../models';
/**
 * TABLEGLHEADApi - axios parameter creator
 * @export
 */
export const TABLEGLHEADApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} batchID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLHEADBatchIDGet: async (batchID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'batchID' is not null or undefined
            assertParamExists('tABLEGLHEADBatchIDGet', 'batchID', batchID)
            const localVarPath = `/TABLE_GLHEAD('{BatchID}')`
                .replace(`{${"BatchID"}}`, encodeURIComponent(String(batchID)));
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
        tABLEGLHEADGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_GLHEAD`;
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
 * TABLEGLHEADApi - functional programming interface
 * @export
 */
export const TABLEGLHEADApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEGLHEADApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} batchID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLHEADBatchIDGet(batchID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEGLHEAD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLHEADBatchIDGet(batchID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEGLHEADGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEGLHEAD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEGLHEADGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEGLHEADApi - factory interface
 * @export
 */
export const TABLEGLHEADApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEGLHEADApiFp(configuration)
    return {
        /**
         * 
         * @param {number} batchID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLHEADBatchIDGet(batchID: number, options?: any): AxiosPromise<TABLEGLHEAD> {
            return localVarFp.tABLEGLHEADBatchIDGet(batchID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEGLHEADGet(options?: any): AxiosPromise<PagedTABLEGLHEAD> {
            return localVarFp.tABLEGLHEADGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEGLHEADApi - interface
 * @export
 * @interface TABLEGLHEADApi
 */
export interface TABLEGLHEADApiInterface {
    /**
     * 
     * @param {number} batchID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLHEADApiInterface
     */
    tABLEGLHEADBatchIDGet(batchID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEGLHEAD>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLHEADApiInterface
     */
    tABLEGLHEADGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEGLHEAD>;

}

/**
 * TABLEGLHEADApi - object-oriented interface
 * @export
 * @class TABLEGLHEADApi
 * @extends {BaseAPI}
 */
export class TABLEGLHEADApi extends BaseAPI implements TABLEGLHEADApiInterface {
    /**
     * 
     * @param {number} batchID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLHEADApi
     */
    public tABLEGLHEADBatchIDGet(batchID: number, options?: AxiosRequestConfig) {
        return TABLEGLHEADApiFp(this.configuration).tABLEGLHEADBatchIDGet(batchID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEGLHEADApi
     */
    public tABLEGLHEADGet(options?: AxiosRequestConfig) {
        return TABLEGLHEADApiFp(this.configuration).tABLEGLHEADGet(options).then((request) => request(this.axios, this.basePath));
    }
}