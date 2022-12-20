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
import { PagedTABLEICLINE } from '../models';
// @ts-ignore
import { TABLEICLINE } from '../models';
/**
 * TABLEICLINEApi - axios parameter creator
 * @export
 */
export const TABLEICLINEApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICLINEGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ICLINE`;
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
        tABLEICLINELineIDGet: async (lineID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'lineID' is not null or undefined
            assertParamExists('tABLEICLINELineIDGet', 'lineID', lineID)
            const localVarPath = `/TABLE_ICLINE('{LineID}')`
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
 * TABLEICLINEApi - functional programming interface
 * @export
 */
export const TABLEICLINEApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEICLINEApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICLINEGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEICLINE>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICLINEGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} lineID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICLINELineIDGet(lineID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEICLINE>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICLINELineIDGet(lineID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEICLINEApi - factory interface
 * @export
 */
export const TABLEICLINEApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEICLINEApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICLINEGet(options?: any): AxiosPromise<PagedTABLEICLINE> {
            return localVarFp.tABLEICLINEGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} lineID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICLINELineIDGet(lineID: number, options?: any): AxiosPromise<TABLEICLINE> {
            return localVarFp.tABLEICLINELineIDGet(lineID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEICLINEApi - interface
 * @export
 * @interface TABLEICLINEApi
 */
export interface TABLEICLINEApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICLINEApiInterface
     */
    tABLEICLINEGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEICLINE>;

    /**
     * 
     * @param {number} lineID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICLINEApiInterface
     */
    tABLEICLINELineIDGet(lineID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEICLINE>;

}

/**
 * TABLEICLINEApi - object-oriented interface
 * @export
 * @class TABLEICLINEApi
 * @extends {BaseAPI}
 */
export class TABLEICLINEApi extends BaseAPI implements TABLEICLINEApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICLINEApi
     */
    public tABLEICLINEGet(options?: AxiosRequestConfig) {
        return TABLEICLINEApiFp(this.configuration).tABLEICLINEGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} lineID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICLINEApi
     */
    public tABLEICLINELineIDGet(lineID: number, options?: AxiosRequestConfig) {
        return TABLEICLINEApiFp(this.configuration).tABLEICLINELineIDGet(lineID, options).then((request) => request(this.axios, this.basePath));
    }
}
