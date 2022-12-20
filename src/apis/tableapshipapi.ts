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
import { PagedTABLEAPSHIP } from '../models';
// @ts-ignore
import { TABLEAPSHIP } from '../models';
/**
 * TABLEAPSHIPApi - axios parameter creator
 * @export
 */
export const TABLEAPSHIPApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPSHIPDocumentIDGet: async (documentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('tABLEAPSHIPDocumentIDGet', 'documentID', documentID)
            const localVarPath = `/TABLE_APSHIP('{DocumentID}')`
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
        tABLEAPSHIPGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APSHIP`;
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
 * TABLEAPSHIPApi - functional programming interface
 * @export
 */
export const TABLEAPSHIPApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPSHIPApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPSHIPDocumentIDGet(documentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPSHIP>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPSHIPDocumentIDGet(documentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPSHIPGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPSHIP>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPSHIPGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPSHIPApi - factory interface
 * @export
 */
export const TABLEAPSHIPApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPSHIPApiFp(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPSHIPDocumentIDGet(documentID: number, options?: any): AxiosPromise<TABLEAPSHIP> {
            return localVarFp.tABLEAPSHIPDocumentIDGet(documentID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPSHIPGet(options?: any): AxiosPromise<PagedTABLEAPSHIP> {
            return localVarFp.tABLEAPSHIPGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPSHIPApi - interface
 * @export
 * @interface TABLEAPSHIPApi
 */
export interface TABLEAPSHIPApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPSHIPApiInterface
     */
    tABLEAPSHIPDocumentIDGet(documentID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEAPSHIP>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPSHIPApiInterface
     */
    tABLEAPSHIPGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPSHIP>;

}

/**
 * TABLEAPSHIPApi - object-oriented interface
 * @export
 * @class TABLEAPSHIPApi
 * @extends {BaseAPI}
 */
export class TABLEAPSHIPApi extends BaseAPI implements TABLEAPSHIPApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPSHIPApi
     */
    public tABLEAPSHIPDocumentIDGet(documentID: number, options?: AxiosRequestConfig) {
        return TABLEAPSHIPApiFp(this.configuration).tABLEAPSHIPDocumentIDGet(documentID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPSHIPApi
     */
    public tABLEAPSHIPGet(options?: AxiosRequestConfig) {
        return TABLEAPSHIPApiFp(this.configuration).tABLEAPSHIPGet(options).then((request) => request(this.axios, this.basePath));
    }
}
