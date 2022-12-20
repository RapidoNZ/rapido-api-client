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
import { PagedTABLEARCONTCT } from '../models';
// @ts-ignore
import { TABLEARCONTCT } from '../models';
/**
 * TABLEARCONTCTApi - axios parameter creator
 * @export
 */
export const TABLEARCONTCTApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} contactID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARCONTCTContactIDGet: async (contactID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contactID' is not null or undefined
            assertParamExists('tABLEARCONTCTContactIDGet', 'contactID', contactID)
            const localVarPath = `/TABLE_ARCONTCT('{ContactID}')`
                .replace(`{${"ContactID"}}`, encodeURIComponent(String(contactID)));
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
        tABLEARCONTCTGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ARCONTCT`;
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
 * TABLEARCONTCTApi - functional programming interface
 * @export
 */
export const TABLEARCONTCTApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEARCONTCTApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} contactID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARCONTCTContactIDGet(contactID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEARCONTCT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARCONTCTContactIDGet(contactID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEARCONTCTGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEARCONTCT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEARCONTCTGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEARCONTCTApi - factory interface
 * @export
 */
export const TABLEARCONTCTApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEARCONTCTApiFp(configuration)
    return {
        /**
         * 
         * @param {number} contactID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARCONTCTContactIDGet(contactID: number, options?: any): AxiosPromise<TABLEARCONTCT> {
            return localVarFp.tABLEARCONTCTContactIDGet(contactID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEARCONTCTGet(options?: any): AxiosPromise<PagedTABLEARCONTCT> {
            return localVarFp.tABLEARCONTCTGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEARCONTCTApi - interface
 * @export
 * @interface TABLEARCONTCTApi
 */
export interface TABLEARCONTCTApiInterface {
    /**
     * 
     * @param {number} contactID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARCONTCTApiInterface
     */
    tABLEARCONTCTContactIDGet(contactID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEARCONTCT>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARCONTCTApiInterface
     */
    tABLEARCONTCTGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEARCONTCT>;

}

/**
 * TABLEARCONTCTApi - object-oriented interface
 * @export
 * @class TABLEARCONTCTApi
 * @extends {BaseAPI}
 */
export class TABLEARCONTCTApi extends BaseAPI implements TABLEARCONTCTApiInterface {
    /**
     * 
     * @param {number} contactID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARCONTCTApi
     */
    public tABLEARCONTCTContactIDGet(contactID: number, options?: AxiosRequestConfig) {
        return TABLEARCONTCTApiFp(this.configuration).tABLEARCONTCTContactIDGet(contactID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEARCONTCTApi
     */
    public tABLEARCONTCTGet(options?: AxiosRequestConfig) {
        return TABLEARCONTCTApiFp(this.configuration).tABLEARCONTCTGet(options).then((request) => request(this.axios, this.basePath));
    }
}