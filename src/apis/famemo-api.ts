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
import { FAMemo } from '../models';
// @ts-ignore
import { PagedFAMemo } from '../models';
/**
 * FAMemoApi - axios parameter creator
 * @export
 */
export const FAMemoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/FAMemo`;
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
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoMemoIDDelete: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('fAMemoMemoIDDelete', 'memoID', memoID)
            const localVarPath = `/FAMemo('{MemoID}')`
                .replace(`{${"MemoID"}}`, encodeURIComponent(String(memoID)));
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
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('fAMemoMemoIDGet', 'memoID', memoID)
            const localVarPath = `/FAMemo('{MemoID}')`
                .replace(`{${"MemoID"}}`, encodeURIComponent(String(memoID)));
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
         * @param {number} memoID 
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoMemoIDPatch: async (memoID: number, body: FAMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('fAMemoMemoIDPatch', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('fAMemoMemoIDPatch', 'body', body)
            const localVarPath = `/FAMemo('{MemoID}')`
                .replace(`{${"MemoID"}}`, encodeURIComponent(String(memoID)));
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
         * @param {number} memoID 
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoMemoIDPut: async (memoID: number, body: FAMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('fAMemoMemoIDPut', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('fAMemoMemoIDPut', 'body', body)
            const localVarPath = `/FAMemo('{MemoID}')`
                .replace(`{${"MemoID"}}`, encodeURIComponent(String(memoID)));
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
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoPost: async (body: FAMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('fAMemoPost', 'body', body)
            const localVarPath = `/FAMemo`;
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
 * FAMemoApi - functional programming interface
 * @export
 */
export const FAMemoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FAMemoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fAMemoGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedFAMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fAMemoGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fAMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fAMemoMemoIDDelete(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fAMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FAMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fAMemoMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fAMemoMemoIDPatch(memoID: number, body: FAMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fAMemoMemoIDPatch(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fAMemoMemoIDPut(memoID: number, body: FAMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fAMemoMemoIDPut(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fAMemoPost(body: FAMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fAMemoPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FAMemoApi - factory interface
 * @export
 */
export const FAMemoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FAMemoApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoGet(options?: any): AxiosPromise<PagedFAMemo> {
            return localVarFp.fAMemoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoMemoIDDelete(memoID: number, options?: any): AxiosPromise<void> {
            return localVarFp.fAMemoMemoIDDelete(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoMemoIDGet(memoID: number, options?: any): AxiosPromise<FAMemo> {
            return localVarFp.fAMemoMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoMemoIDPatch(memoID: number, body: FAMemo, options?: any): AxiosPromise<void> {
            return localVarFp.fAMemoMemoIDPatch(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoMemoIDPut(memoID: number, body: FAMemo, options?: any): AxiosPromise<void> {
            return localVarFp.fAMemoMemoIDPut(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {FAMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fAMemoPost(body: FAMemo, options?: any): AxiosPromise<void> {
            return localVarFp.fAMemoPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FAMemoApi - interface
 * @export
 * @interface FAMemoApi
 */
export interface FAMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApiInterface
     */
    fAMemoGet(options?: AxiosRequestConfig): AxiosPromise<PagedFAMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApiInterface
     */
    fAMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApiInterface
     */
    fAMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<FAMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {FAMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApiInterface
     */
    fAMemoMemoIDPatch(memoID: number, body: FAMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {FAMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApiInterface
     */
    fAMemoMemoIDPut(memoID: number, body: FAMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {FAMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApiInterface
     */
    fAMemoPost(body: FAMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * FAMemoApi - object-oriented interface
 * @export
 * @class FAMemoApi
 * @extends {BaseAPI}
 */
export class FAMemoApi extends BaseAPI implements FAMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApi
     */
    public fAMemoGet(options?: AxiosRequestConfig) {
        return FAMemoApiFp(this.configuration).fAMemoGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApi
     */
    public fAMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig) {
        return FAMemoApiFp(this.configuration).fAMemoMemoIDDelete(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApi
     */
    public fAMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return FAMemoApiFp(this.configuration).fAMemoMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {FAMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApi
     */
    public fAMemoMemoIDPatch(memoID: number, body: FAMemo, options?: AxiosRequestConfig) {
        return FAMemoApiFp(this.configuration).fAMemoMemoIDPatch(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {FAMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApi
     */
    public fAMemoMemoIDPut(memoID: number, body: FAMemo, options?: AxiosRequestConfig) {
        return FAMemoApiFp(this.configuration).fAMemoMemoIDPut(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {FAMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FAMemoApi
     */
    public fAMemoPost(body: FAMemo, options?: AxiosRequestConfig) {
        return FAMemoApiFp(this.configuration).fAMemoPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
