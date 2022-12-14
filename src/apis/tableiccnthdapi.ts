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
import { PagedTABLEICCNTHD } from '../models';
// @ts-ignore
import { TABLEICCNTHD } from '../models';
/**
 * TABLEICCNTHDApi - axios parameter creator
 * @export
 */
export const TABLEICCNTHDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICCNTHDCountIDGet: async (countID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countID' is not null or undefined
            assertParamExists('tABLEICCNTHDCountIDGet', 'countID', countID)
            const localVarPath = `/TABLE_ICCNTHD('{CountID}')`
                .replace(`{${"CountID"}}`, encodeURIComponent(String(countID)));
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
        tABLEICCNTHDGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ICCNTHD`;
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
 * TABLEICCNTHDApi - functional programming interface
 * @export
 */
export const TABLEICCNTHDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEICCNTHDApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICCNTHDCountIDGet(countID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEICCNTHD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICCNTHDCountIDGet(countID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICCNTHDGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEICCNTHD>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICCNTHDGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEICCNTHDApi - factory interface
 * @export
 */
export const TABLEICCNTHDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEICCNTHDApiFp(configuration)
    return {
        /**
         * 
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICCNTHDCountIDGet(countID: number, options?: any): AxiosPromise<TABLEICCNTHD> {
            return localVarFp.tABLEICCNTHDCountIDGet(countID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICCNTHDGet(options?: any): AxiosPromise<PagedTABLEICCNTHD> {
            return localVarFp.tABLEICCNTHDGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEICCNTHDApi - interface
 * @export
 * @interface TABLEICCNTHDApi
 */
export interface TABLEICCNTHDApiInterface {
    /**
     * 
     * @param {number} countID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICCNTHDApiInterface
     */
    tABLEICCNTHDCountIDGet(countID: number, options?: AxiosRequestConfig): AxiosPromise<TABLEICCNTHD>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICCNTHDApiInterface
     */
    tABLEICCNTHDGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEICCNTHD>;

}

/**
 * TABLEICCNTHDApi - object-oriented interface
 * @export
 * @class TABLEICCNTHDApi
 * @extends {BaseAPI}
 */
export class TABLEICCNTHDApi extends BaseAPI implements TABLEICCNTHDApiInterface {
    /**
     * 
     * @param {number} countID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICCNTHDApi
     */
    public tABLEICCNTHDCountIDGet(countID: number, options?: AxiosRequestConfig) {
        return TABLEICCNTHDApiFp(this.configuration).tABLEICCNTHDCountIDGet(countID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICCNTHDApi
     */
    public tABLEICCNTHDGet(options?: AxiosRequestConfig) {
        return TABLEICCNTHDApiFp(this.configuration).tABLEICCNTHDGet(options).then((request) => request(this.axios, this.basePath));
    }
}
