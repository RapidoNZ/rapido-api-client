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
import { PagedTABLEAPCONTCT } from '../models';
// @ts-ignore
import { TABLEAPCONTCT } from '../models';
/**
 * TABLEAPCONTCTApi - axios parameter creator
 * @export
 */
export const TABLEAPCONTCTApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} contactID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCONTCTContactIDGet: async (contactID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contactID' is not null or undefined
            assertParamExists('tABLEAPCONTCTContactIDGet', 'contactID', contactID)
            const localVarPath = `/TABLE_APCONTCT('{ContactID}')`
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
        tABLEAPCONTCTGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APCONTCT`;
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
 * TABLEAPCONTCTApi - functional programming interface
 * @export
 */
export const TABLEAPCONTCTApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPCONTCTApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} contactID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPCONTCTContactIDGet(contactID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPCONTCT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPCONTCTContactIDGet(contactID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPCONTCTGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPCONTCT>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPCONTCTGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPCONTCTApi - factory interface
 * @export
 */
export const TABLEAPCONTCTApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPCONTCTApiFp(configuration)
    return {
        /**
         * 
         * @param {number} contactID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCONTCTContactIDGet(contactID: number, options?: any): AxiosPromise<TABLEAPCONTCT> {
            return localVarFp.tABLEAPCONTCTContactIDGet(contactID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPCONTCTGet(options?: any): AxiosPromise<PagedTABLEAPCONTCT> {
            return localVarFp.tABLEAPCONTCTGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPCONTCTApi - interface
 * @export
 * @interface TABLEAPCONTCTApi
 */
export interface TABLEAPCONTCTApiInterface {
    /**
     * 
     * @param {number} contactID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCONTCTApiInterface
     */
    tABLEAPCONTCTContactIDGet(contactID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEAPCONTCT>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCONTCTApiInterface
     */
    tABLEAPCONTCTGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPCONTCT>;

}

/**
 * TABLEAPCONTCTApi - object-oriented interface
 * @export
 * @class TABLEAPCONTCTApi
 * @extends {BaseAPI}
 */
export class TABLEAPCONTCTApi extends BaseAPI implements TABLEAPCONTCTApiInterface {
    /**
     * 
     * @param {number} contactID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCONTCTApi
     */
    public tABLEAPCONTCTContactIDGet(contactID: number, options?: AxiosRequestConfig) {
        return TABLEAPCONTCTApiFp(this.configuration).tABLEAPCONTCTContactIDGet(contactID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPCONTCTApi
     */
    public tABLEAPCONTCTGet(options?: AxiosRequestConfig) {
        return TABLEAPCONTCTApiFp(this.configuration).tABLEAPCONTCTGet(options).then((request) => request(this.axios, this.basePath));
    }
}
