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
import { PagedTABLEJCLINE } from '../models';
// @ts-ignore
import { TABLEJCLINE } from '../models';
/**
 * TABLEJCLINEApi - axios parameter creator
 * @export
 */
export const TABLEJCLINEApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCLINEGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_JCLINE`;
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
        tABLEJCLINELineIDGet: async (lineID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'lineID' is not null or undefined
            assertParamExists('tABLEJCLINELineIDGet', 'lineID', lineID)
            const localVarPath = `/TABLE_JCLINE('{LineID}')`
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
 * TABLEJCLINEApi - functional programming interface
 * @export
 */
export const TABLEJCLINEApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEJCLINEApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCLINEGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEJCLINE>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCLINEGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} lineID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEJCLINELineIDGet(lineID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEJCLINE>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEJCLINELineIDGet(lineID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEJCLINEApi - factory interface
 * @export
 */
export const TABLEJCLINEApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEJCLINEApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCLINEGet(options?: any): AxiosPromise<PagedTABLEJCLINE> {
            return localVarFp.tABLEJCLINEGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} lineID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEJCLINELineIDGet(lineID: number, options?: any): AxiosPromise<TABLEJCLINE> {
            return localVarFp.tABLEJCLINELineIDGet(lineID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEJCLINEApi - interface
 * @export
 * @interface TABLEJCLINEApi
 */
export interface TABLEJCLINEApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCLINEApiInterface
     */
    tABLEJCLINEGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEJCLINE>;

    /**
     * 
     * @param {number} lineID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCLINEApiInterface
     */
    tABLEJCLINELineIDGet(lineID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEJCLINE>;

}

/**
 * TABLEJCLINEApi - object-oriented interface
 * @export
 * @class TABLEJCLINEApi
 * @extends {BaseAPI}
 */
export class TABLEJCLINEApi extends BaseAPI implements TABLEJCLINEApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCLINEApi
     */
    public tABLEJCLINEGet(options?: AxiosRequestConfig) {
        return TABLEJCLINEApiFp(this.configuration).tABLEJCLINEGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} lineID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEJCLINEApi
     */
    public tABLEJCLINELineIDGet(lineID: number, options?: AxiosRequestConfig) {
        return TABLEJCLINEApiFp(this.configuration).tABLEJCLINELineIDGet(lineID, options).then((request) => request(this.axios, this.basePath));
    }
}
