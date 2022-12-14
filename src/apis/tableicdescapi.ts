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
import { PagedTABLEICDESC } from '../models';
// @ts-ignore
import { TABLEICDESC } from '../models';
/**
 * TABLEICDESCApi - axios parameter creator
 * @export
 */
export const TABLEICDESCApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICDESCGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_ICDESC`;
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
         * @param {string} productCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICDESCProductCodeGet: async (productCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productCode' is not null or undefined
            assertParamExists('tABLEICDESCProductCodeGet', 'productCode', productCode)
            const localVarPath = `/TABLE_ICDESC('{ProductCode}')`
                .replace(`{${"ProductCode"}}`, encodeURIComponent(String(productCode)));
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
 * TABLEICDESCApi - functional programming interface
 * @export
 */
export const TABLEICDESCApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEICDESCApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICDESCGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEICDESC>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICDESCGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} productCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEICDESCProductCodeGet(productCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEICDESC>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEICDESCProductCodeGet(productCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEICDESCApi - factory interface
 * @export
 */
export const TABLEICDESCApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEICDESCApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICDESCGet(options?: any): AxiosPromise<PagedTABLEICDESC> {
            return localVarFp.tABLEICDESCGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} productCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEICDESCProductCodeGet(productCode: string, options?: any): AxiosPromise<TABLEICDESC> {
            return localVarFp.tABLEICDESCProductCodeGet(productCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEICDESCApi - interface
 * @export
 * @interface TABLEICDESCApi
 */
export interface TABLEICDESCApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICDESCApiInterface
     */
    tABLEICDESCGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEICDESC>;

    /**
     * 
     * @param {string} productCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICDESCApiInterface
     */
    tABLEICDESCProductCodeGet(productCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEICDESC>;

}

/**
 * TABLEICDESCApi - object-oriented interface
 * @export
 * @class TABLEICDESCApi
 * @extends {BaseAPI}
 */
export class TABLEICDESCApi extends BaseAPI implements TABLEICDESCApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICDESCApi
     */
    public tABLEICDESCGet(options?: AxiosRequestConfig) {
        return TABLEICDESCApiFp(this.configuration).tABLEICDESCGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} productCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEICDESCApi
     */
    public tABLEICDESCProductCodeGet(productCode: string, options?: AxiosRequestConfig) {
        return TABLEICDESCApiFp(this.configuration).tABLEICDESCProductCodeGet(productCode, options).then((request) => request(this.axios, this.basePath));
    }
}
