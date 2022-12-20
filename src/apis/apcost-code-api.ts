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
import { APCostCode } from '../models';
// @ts-ignore
import { PagedAPCostCode } from '../models';
/**
 * APCostCodeApi - axios parameter creator
 * @export
 */
export const APCostCodeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} costCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeCostCodeDelete: async (costCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'costCode' is not null or undefined
            assertParamExists('aPCostCodeCostCodeDelete', 'costCode', costCode)
            const localVarPath = `/APCostCode('{CostCode}')`
                .replace(`{${"CostCode"}}`, encodeURIComponent(String(costCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * @param {string} costCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeCostCodeGet: async (costCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'costCode' is not null or undefined
            assertParamExists('aPCostCodeCostCodeGet', 'costCode', costCode)
            const localVarPath = `/APCostCode('{CostCode}')`
                .replace(`{${"CostCode"}}`, encodeURIComponent(String(costCode)));
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
         * @param {string} costCode 
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeCostCodePatch: async (costCode: string, body: APCostCode, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'costCode' is not null or undefined
            assertParamExists('aPCostCodeCostCodePatch', 'costCode', costCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aPCostCodeCostCodePatch', 'body', body)
            const localVarPath = `/APCostCode('{CostCode}')`
                .replace(`{${"CostCode"}}`, encodeURIComponent(String(costCode)));
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
         * @param {string} costCode 
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeCostCodePut: async (costCode: string, body: APCostCode, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'costCode' is not null or undefined
            assertParamExists('aPCostCodeCostCodePut', 'costCode', costCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aPCostCodeCostCodePut', 'body', body)
            const localVarPath = `/APCostCode('{CostCode}')`
                .replace(`{${"CostCode"}}`, encodeURIComponent(String(costCode)));
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
        aPCostCodeGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/APCostCode`;
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
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodePost: async (body: APCostCode, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aPCostCodePost', 'body', body)
            const localVarPath = `/APCostCode`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
 * APCostCodeApi - functional programming interface
 * @export
 */
export const APCostCodeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = APCostCodeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} costCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCostCodeCostCodeDelete(costCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCostCodeCostCodeDelete(costCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} costCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCostCodeCostCodeGet(costCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APCostCode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCostCodeCostCodeGet(costCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} costCode 
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCostCodeCostCodePatch(costCode: string, body: APCostCode, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCostCodeCostCodePatch(costCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} costCode 
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCostCodeCostCodePut(costCode: string, body: APCostCode, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCostCodeCostCodePut(costCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCostCodeGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedAPCostCode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCostCodeGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCostCodePost(body: APCostCode, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCostCodePost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * APCostCodeApi - factory interface
 * @export
 */
export const APCostCodeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = APCostCodeApiFp(configuration)
    return {
        /**
         * 
         * @param {string} costCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeCostCodeDelete(costCode: string, options?: any): AxiosPromise<void> {
            return localVarFp.aPCostCodeCostCodeDelete(costCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} costCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeCostCodeGet(costCode: string, options?: any): AxiosPromise<APCostCode> {
            return localVarFp.aPCostCodeCostCodeGet(costCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} costCode 
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeCostCodePatch(costCode: string, body: APCostCode, options?: any): AxiosPromise<void> {
            return localVarFp.aPCostCodeCostCodePatch(costCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} costCode 
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeCostCodePut(costCode: string, body: APCostCode, options?: any): AxiosPromise<void> {
            return localVarFp.aPCostCodeCostCodePut(costCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodeGet(options?: any): AxiosPromise<PagedAPCostCode> {
            return localVarFp.aPCostCodeGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {APCostCode} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCostCodePost(body: APCostCode, options?: any): AxiosPromise<void> {
            return localVarFp.aPCostCodePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * APCostCodeApi - interface
 * @export
 * @interface APCostCodeApi
 */
export interface APCostCodeApiInterface {
    /**
     * 
     * @param {string} costCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApiInterface
     */
    aPCostCodeCostCodeDelete(costCode: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} costCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApiInterface
     */
    aPCostCodeCostCodeGet(costCode: string, options?: AxiosRequestConfig): AxiosPromise<APCostCode>;

    /**
     * 
     * @param {string} costCode 
     * @param {APCostCode} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApiInterface
     */
    aPCostCodeCostCodePatch(costCode: string, body: APCostCode, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} costCode 
     * @param {APCostCode} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApiInterface
     */
    aPCostCodeCostCodePut(costCode: string, body: APCostCode, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApiInterface
     */
    aPCostCodeGet(options?: AxiosRequestConfig): AxiosPromise<PagedAPCostCode>;

    /**
     * 
     * @param {APCostCode} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApiInterface
     */
    aPCostCodePost(body: APCostCode, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * APCostCodeApi - object-oriented interface
 * @export
 * @class APCostCodeApi
 * @extends {BaseAPI}
 */
export class APCostCodeApi extends BaseAPI implements APCostCodeApiInterface {
    /**
     * 
     * @param {string} costCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApi
     */
    public aPCostCodeCostCodeDelete(costCode: string, options?: AxiosRequestConfig) {
        return APCostCodeApiFp(this.configuration).aPCostCodeCostCodeDelete(costCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} costCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApi
     */
    public aPCostCodeCostCodeGet(costCode: string, options?: AxiosRequestConfig) {
        return APCostCodeApiFp(this.configuration).aPCostCodeCostCodeGet(costCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} costCode 
     * @param {APCostCode} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApi
     */
    public aPCostCodeCostCodePatch(costCode: string, body: APCostCode, options?: AxiosRequestConfig) {
        return APCostCodeApiFp(this.configuration).aPCostCodeCostCodePatch(costCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} costCode 
     * @param {APCostCode} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApi
     */
    public aPCostCodeCostCodePut(costCode: string, body: APCostCode, options?: AxiosRequestConfig) {
        return APCostCodeApiFp(this.configuration).aPCostCodeCostCodePut(costCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApi
     */
    public aPCostCodeGet(options?: AxiosRequestConfig) {
        return APCostCodeApiFp(this.configuration).aPCostCodeGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {APCostCode} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCostCodeApi
     */
    public aPCostCodePost(body: APCostCode, options?: AxiosRequestConfig) {
        return APCostCodeApiFp(this.configuration).aPCostCodePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}