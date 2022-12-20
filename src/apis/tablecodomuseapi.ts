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
import { PagedTABLECODOMUSE } from '../models';
// @ts-ignore
import { TABLECODOMUSE } from '../models';
/**
 * TABLECODOMUSEApi - axios parameter creator
 * @export
 */
export const TABLECODOMUSEApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} domainName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECODOMUSEDomainNameGet: async (domainName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainName' is not null or undefined
            assertParamExists('tABLECODOMUSEDomainNameGet', 'domainName', domainName)
            const localVarPath = `/TABLE_CODOMUSE('{DomainName}')`
                .replace(`{${"DomainName"}}`, encodeURIComponent(String(domainName)));
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
        tABLECODOMUSEGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CODOMUSE`;
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
 * TABLECODOMUSEApi - functional programming interface
 * @export
 */
export const TABLECODOMUSEApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECODOMUSEApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} domainName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECODOMUSEDomainNameGet(domainName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECODOMUSE>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECODOMUSEDomainNameGet(domainName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECODOMUSEGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECODOMUSE>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECODOMUSEGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECODOMUSEApi - factory interface
 * @export
 */
export const TABLECODOMUSEApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECODOMUSEApiFp(configuration)
    return {
        /**
         * 
         * @param {string} domainName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECODOMUSEDomainNameGet(domainName: string, options?: any): AxiosPromise<TABLECODOMUSE> {
            return localVarFp.tABLECODOMUSEDomainNameGet(domainName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECODOMUSEGet(options?: any): AxiosPromise<PagedTABLECODOMUSE> {
            return localVarFp.tABLECODOMUSEGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECODOMUSEApi - interface
 * @export
 * @interface TABLECODOMUSEApi
 */
export interface TABLECODOMUSEApiInterface {
    /**
     * 
     * @param {string} domainName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECODOMUSEApiInterface
     */
    tABLECODOMUSEDomainNameGet(domainName: string, options?: AxiosRequestConfig): AxiosPromise<TABLECODOMUSE>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECODOMUSEApiInterface
     */
    tABLECODOMUSEGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECODOMUSE>;

}

/**
 * TABLECODOMUSEApi - object-oriented interface
 * @export
 * @class TABLECODOMUSEApi
 * @extends {BaseAPI}
 */
export class TABLECODOMUSEApi extends BaseAPI implements TABLECODOMUSEApiInterface {
    /**
     * 
     * @param {string} domainName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECODOMUSEApi
     */
    public tABLECODOMUSEDomainNameGet(domainName: string, options?: AxiosRequestConfig) {
        return TABLECODOMUSEApiFp(this.configuration).tABLECODOMUSEDomainNameGet(domainName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECODOMUSEApi
     */
    public tABLECODOMUSEGet(options?: AxiosRequestConfig) {
        return TABLECODOMUSEApiFp(this.configuration).tABLECODOMUSEGet(options).then((request) => request(this.axios, this.basePath));
    }
}
