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
import { ICBudget } from '../models';
// @ts-ignore
import { PagedICBudget } from '../models';
/**
 * ICBudgetApi - axios parameter creator
 * @export
 */
export const ICBudgetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCBudgetGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ICBudget`;
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
        iCBudgetProductCodeGet: async (productCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productCode' is not null or undefined
            assertParamExists('iCBudgetProductCodeGet', 'productCode', productCode)
            const localVarPath = `/ICBudget('{ProductCode}')`
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
        /**
         * 
         * @param {string} productCode 
         * @param {ICBudget} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCBudgetProductCodePatch: async (productCode: string, body: ICBudget, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productCode' is not null or undefined
            assertParamExists('iCBudgetProductCodePatch', 'productCode', productCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCBudgetProductCodePatch', 'body', body)
            const localVarPath = `/ICBudget('{ProductCode}')`
                .replace(`{${"ProductCode"}}`, encodeURIComponent(String(productCode)));
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
         * @param {string} productCode 
         * @param {ICBudget} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCBudgetProductCodePut: async (productCode: string, body: ICBudget, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productCode' is not null or undefined
            assertParamExists('iCBudgetProductCodePut', 'productCode', productCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCBudgetProductCodePut', 'body', body)
            const localVarPath = `/ICBudget('{ProductCode}')`
                .replace(`{${"ProductCode"}}`, encodeURIComponent(String(productCode)));
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
    }
};

/**
 * ICBudgetApi - functional programming interface
 * @export
 */
export const ICBudgetApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ICBudgetApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCBudgetGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedICBudget>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCBudgetGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} productCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCBudgetProductCodeGet(productCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ICBudget>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCBudgetProductCodeGet(productCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} productCode 
         * @param {ICBudget} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCBudgetProductCodePatch(productCode: string, body: ICBudget, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCBudgetProductCodePatch(productCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} productCode 
         * @param {ICBudget} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCBudgetProductCodePut(productCode: string, body: ICBudget, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCBudgetProductCodePut(productCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ICBudgetApi - factory interface
 * @export
 */
export const ICBudgetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ICBudgetApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCBudgetGet(options?: any): AxiosPromise<PagedICBudget> {
            return localVarFp.iCBudgetGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} productCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCBudgetProductCodeGet(productCode: string, options?: any): AxiosPromise<ICBudget> {
            return localVarFp.iCBudgetProductCodeGet(productCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} productCode 
         * @param {ICBudget} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCBudgetProductCodePatch(productCode: string, body: ICBudget, options?: any): AxiosPromise<void> {
            return localVarFp.iCBudgetProductCodePatch(productCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} productCode 
         * @param {ICBudget} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCBudgetProductCodePut(productCode: string, body: ICBudget, options?: any): AxiosPromise<void> {
            return localVarFp.iCBudgetProductCodePut(productCode, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ICBudgetApi - interface
 * @export
 * @interface ICBudgetApi
 */
export interface ICBudgetApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICBudgetApiInterface
     */
    iCBudgetGet(options?: AxiosRequestConfig): AxiosPromise<PagedICBudget>;

    /**
     * 
     * @param {string} productCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICBudgetApiInterface
     */
    iCBudgetProductCodeGet(productCode: string, options?: AxiosRequestConfig): AxiosPromise<ICBudget>;

    /**
     * 
     * @param {string} productCode 
     * @param {ICBudget} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICBudgetApiInterface
     */
    iCBudgetProductCodePatch(productCode: string, body: ICBudget, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} productCode 
     * @param {ICBudget} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICBudgetApiInterface
     */
    iCBudgetProductCodePut(productCode: string, body: ICBudget, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ICBudgetApi - object-oriented interface
 * @export
 * @class ICBudgetApi
 * @extends {BaseAPI}
 */
export class ICBudgetApi extends BaseAPI implements ICBudgetApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICBudgetApi
     */
    public iCBudgetGet(options?: AxiosRequestConfig) {
        return ICBudgetApiFp(this.configuration).iCBudgetGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} productCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICBudgetApi
     */
    public iCBudgetProductCodeGet(productCode: string, options?: AxiosRequestConfig) {
        return ICBudgetApiFp(this.configuration).iCBudgetProductCodeGet(productCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} productCode 
     * @param {ICBudget} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICBudgetApi
     */
    public iCBudgetProductCodePatch(productCode: string, body: ICBudget, options?: AxiosRequestConfig) {
        return ICBudgetApiFp(this.configuration).iCBudgetProductCodePatch(productCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} productCode 
     * @param {ICBudget} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICBudgetApi
     */
    public iCBudgetProductCodePut(productCode: string, body: ICBudget, options?: AxiosRequestConfig) {
        return ICBudgetApiFp(this.configuration).iCBudgetProductCodePut(productCode, body, options).then((request) => request(this.axios, this.basePath));
    }
}