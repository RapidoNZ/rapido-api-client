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
import { PagedTABLEPOHEAD } from '../models';
// @ts-ignore
import { TABLEPOHEAD } from '../models';
/**
 * TABLEPOHEADApi - axios parameter creator
 * @export
 */
export const TABLEPOHEADApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOHEADDocumentIDGet: async (documentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('tABLEPOHEADDocumentIDGet', 'documentID', documentID)
            const localVarPath = `/TABLE_POHEAD('{DocumentID}')`
                .replace(`{${"DocumentID"}}`, encodeURIComponent(String(documentID)));
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
        tABLEPOHEADGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_POHEAD`;
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
 * TABLEPOHEADApi - functional programming interface
 * @export
 */
export const TABLEPOHEADApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEPOHEADApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEPOHEADDocumentIDGet(documentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEPOHEAD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEPOHEADDocumentIDGet(documentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEPOHEADGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEPOHEAD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEPOHEADGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEPOHEADApi - factory interface
 * @export
 */
export const TABLEPOHEADApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEPOHEADApiFp(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOHEADDocumentIDGet(documentID: number, options?: any): AxiosPromise<TABLEPOHEAD> {
            return localVarFp.tABLEPOHEADDocumentIDGet(documentID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEPOHEADGet(options?: any): AxiosPromise<PagedTABLEPOHEAD> {
            return localVarFp.tABLEPOHEADGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEPOHEADApi - interface
 * @export
 * @interface TABLEPOHEADApi
 */
export interface TABLEPOHEADApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOHEADApiInterface
     */
    tABLEPOHEADDocumentIDGet(documentID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEPOHEAD>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOHEADApiInterface
     */
    tABLEPOHEADGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEPOHEAD>;

}

/**
 * TABLEPOHEADApi - object-oriented interface
 * @export
 * @class TABLEPOHEADApi
 * @extends {BaseAPI}
 */
export class TABLEPOHEADApi extends BaseAPI implements TABLEPOHEADApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOHEADApi
     */
    public tABLEPOHEADDocumentIDGet(documentID: number, options?: AxiosRequestConfig) {
        return TABLEPOHEADApiFp(this.configuration).tABLEPOHEADDocumentIDGet(documentID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEPOHEADApi
     */
    public tABLEPOHEADGet(options?: AxiosRequestConfig) {
        return TABLEPOHEADApiFp(this.configuration).tABLEPOHEADGet(options).then((request) => request(this.axios, this.basePath));
    }
}
