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
import { COFXCurrency } from '../models';
// @ts-ignore
import { PagedCOFXCurrency } from '../models';
/**
 * COFXCurrencyApi - axios parameter creator
 * @export
 */
export const COFXCurrencyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} currencyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOFXCurrencyCurrencyCodeGet: async (currencyCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'currencyCode' is not null or undefined
            assertParamExists('cOFXCurrencyCurrencyCodeGet', 'currencyCode', currencyCode)
            const localVarPath = `/COFXCurrency('{CurrencyCode}')`
                .replace(`{${"CurrencyCode"}}`, encodeURIComponent(String(currencyCode)));
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
         * @param {string} currencyCode 
         * @param {COFXCurrency} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOFXCurrencyCurrencyCodePatch: async (currencyCode: string, body: COFXCurrency, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'currencyCode' is not null or undefined
            assertParamExists('cOFXCurrencyCurrencyCodePatch', 'currencyCode', currencyCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOFXCurrencyCurrencyCodePatch', 'body', body)
            const localVarPath = `/COFXCurrency('{CurrencyCode}')`
                .replace(`{${"CurrencyCode"}}`, encodeURIComponent(String(currencyCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} currencyCode 
         * @param {COFXCurrency} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOFXCurrencyCurrencyCodePut: async (currencyCode: string, body: COFXCurrency, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'currencyCode' is not null or undefined
            assertParamExists('cOFXCurrencyCurrencyCodePut', 'currencyCode', currencyCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOFXCurrencyCurrencyCodePut', 'body', body)
            const localVarPath = `/COFXCurrency('{CurrencyCode}')`
                .replace(`{${"CurrencyCode"}}`, encodeURIComponent(String(currencyCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

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
        cOFXCurrencyGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/COFXCurrency`;
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
 * COFXCurrencyApi - functional programming interface
 * @export
 */
export const COFXCurrencyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = COFXCurrencyApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} currencyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOFXCurrencyCurrencyCodeGet(currencyCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<COFXCurrency>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOFXCurrencyCurrencyCodeGet(currencyCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} currencyCode 
         * @param {COFXCurrency} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOFXCurrencyCurrencyCodePatch(currencyCode: string, body: COFXCurrency, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOFXCurrencyCurrencyCodePatch(currencyCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} currencyCode 
         * @param {COFXCurrency} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOFXCurrencyCurrencyCodePut(currencyCode: string, body: COFXCurrency, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOFXCurrencyCurrencyCodePut(currencyCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOFXCurrencyGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedCOFXCurrency>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOFXCurrencyGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * COFXCurrencyApi - factory interface
 * @export
 */
export const COFXCurrencyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = COFXCurrencyApiFp(configuration)
    return {
        /**
         * 
         * @param {string} currencyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOFXCurrencyCurrencyCodeGet(currencyCode: string, options?: any): AxiosPromise<COFXCurrency> {
            return localVarFp.cOFXCurrencyCurrencyCodeGet(currencyCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} currencyCode 
         * @param {COFXCurrency} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOFXCurrencyCurrencyCodePatch(currencyCode: string, body: COFXCurrency, options?: any): AxiosPromise<void> {
            return localVarFp.cOFXCurrencyCurrencyCodePatch(currencyCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} currencyCode 
         * @param {COFXCurrency} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOFXCurrencyCurrencyCodePut(currencyCode: string, body: COFXCurrency, options?: any): AxiosPromise<void> {
            return localVarFp.cOFXCurrencyCurrencyCodePut(currencyCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOFXCurrencyGet(options?: any): AxiosPromise<PagedCOFXCurrency> {
            return localVarFp.cOFXCurrencyGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * COFXCurrencyApi - interface
 * @export
 * @interface COFXCurrencyApi
 */
export interface COFXCurrencyApiInterface {
    /**
     * 
     * @param {string} currencyCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COFXCurrencyApiInterface
     */
    cOFXCurrencyCurrencyCodeGet(currencyCode: string, options?: AxiosRequestConfig): AxiosPromise<COFXCurrency>;

    /**
     * 
     * @param {string} currencyCode 
     * @param {COFXCurrency} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COFXCurrencyApiInterface
     */
    cOFXCurrencyCurrencyCodePatch(currencyCode: string, body: COFXCurrency, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} currencyCode 
     * @param {COFXCurrency} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COFXCurrencyApiInterface
     */
    cOFXCurrencyCurrencyCodePut(currencyCode: string, body: COFXCurrency, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COFXCurrencyApiInterface
     */
    cOFXCurrencyGet(options?: AxiosRequestConfig): AxiosPromise<PagedCOFXCurrency>;

}

/**
 * COFXCurrencyApi - object-oriented interface
 * @export
 * @class COFXCurrencyApi
 * @extends {BaseAPI}
 */
export class COFXCurrencyApi extends BaseAPI implements COFXCurrencyApiInterface {
    /**
     * 
     * @param {string} currencyCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COFXCurrencyApi
     */
    public cOFXCurrencyCurrencyCodeGet(currencyCode: string, options?: AxiosRequestConfig) {
        return COFXCurrencyApiFp(this.configuration).cOFXCurrencyCurrencyCodeGet(currencyCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} currencyCode 
     * @param {COFXCurrency} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COFXCurrencyApi
     */
    public cOFXCurrencyCurrencyCodePatch(currencyCode: string, body: COFXCurrency, options?: AxiosRequestConfig) {
        return COFXCurrencyApiFp(this.configuration).cOFXCurrencyCurrencyCodePatch(currencyCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} currencyCode 
     * @param {COFXCurrency} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COFXCurrencyApi
     */
    public cOFXCurrencyCurrencyCodePut(currencyCode: string, body: COFXCurrency, options?: AxiosRequestConfig) {
        return COFXCurrencyApiFp(this.configuration).cOFXCurrencyCurrencyCodePut(currencyCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COFXCurrencyApi
     */
    public cOFXCurrencyGet(options?: AxiosRequestConfig) {
        return COFXCurrencyApiFp(this.configuration).cOFXCurrencyGet(options).then((request) => request(this.axios, this.basePath));
    }
}
