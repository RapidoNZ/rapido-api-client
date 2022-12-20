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
import { ARMemo } from '../models';
// @ts-ignore
import { PagedARMemo } from '../models';
/**
 * ARMemoApi - axios parameter creator
 * @export
 */
export const ARMemoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ARMemo`;
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
        aRMemoMemoIDDelete: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('aRMemoMemoIDDelete', 'memoID', memoID)
            const localVarPath = `/ARMemo('{MemoID}')`
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
        aRMemoMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('aRMemoMemoIDGet', 'memoID', memoID)
            const localVarPath = `/ARMemo('{MemoID}')`
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
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoMemoIDPatch: async (memoID: number, body: ARMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('aRMemoMemoIDPatch', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aRMemoMemoIDPatch', 'body', body)
            const localVarPath = `/ARMemo('{MemoID}')`
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
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoMemoIDPut: async (memoID: number, body: ARMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('aRMemoMemoIDPut', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aRMemoMemoIDPut', 'body', body)
            const localVarPath = `/ARMemo('{MemoID}')`
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
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoPost: async (body: ARMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aRMemoPost', 'body', body)
            const localVarPath = `/ARMemo`;
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
 * ARMemoApi - functional programming interface
 * @export
 */
export const ARMemoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ARMemoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRMemoGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedARMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRMemoGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRMemoMemoIDDelete(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ARMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRMemoMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRMemoMemoIDPatch(memoID: number, body: ARMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRMemoMemoIDPatch(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRMemoMemoIDPut(memoID: number, body: ARMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRMemoMemoIDPut(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRMemoPost(body: ARMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRMemoPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ARMemoApi - factory interface
 * @export
 */
export const ARMemoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ARMemoApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoGet(options?: any): AxiosPromise<PagedARMemo> {
            return localVarFp.aRMemoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoMemoIDDelete(memoID: number, options?: any): AxiosPromise<void> {
            return localVarFp.aRMemoMemoIDDelete(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoMemoIDGet(memoID: number, options?: any): AxiosPromise<ARMemo> {
            return localVarFp.aRMemoMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoMemoIDPatch(memoID: number, body: ARMemo, options?: any): AxiosPromise<void> {
            return localVarFp.aRMemoMemoIDPatch(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoMemoIDPut(memoID: number, body: ARMemo, options?: any): AxiosPromise<void> {
            return localVarFp.aRMemoMemoIDPut(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ARMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRMemoPost(body: ARMemo, options?: any): AxiosPromise<void> {
            return localVarFp.aRMemoPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ARMemoApi - interface
 * @export
 * @interface ARMemoApi
 */
export interface ARMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApiInterface
     */
    aRMemoGet(options?: AxiosRequestConfig): AxiosPromise<PagedARMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApiInterface
     */
    aRMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApiInterface
     */
    aRMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<ARMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {ARMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApiInterface
     */
    aRMemoMemoIDPatch(memoID: number, body: ARMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {ARMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApiInterface
     */
    aRMemoMemoIDPut(memoID: number, body: ARMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {ARMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApiInterface
     */
    aRMemoPost(body: ARMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ARMemoApi - object-oriented interface
 * @export
 * @class ARMemoApi
 * @extends {BaseAPI}
 */
export class ARMemoApi extends BaseAPI implements ARMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApi
     */
    public aRMemoGet(options?: AxiosRequestConfig) {
        return ARMemoApiFp(this.configuration).aRMemoGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApi
     */
    public aRMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig) {
        return ARMemoApiFp(this.configuration).aRMemoMemoIDDelete(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApi
     */
    public aRMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return ARMemoApiFp(this.configuration).aRMemoMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {ARMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApi
     */
    public aRMemoMemoIDPatch(memoID: number, body: ARMemo, options?: AxiosRequestConfig) {
        return ARMemoApiFp(this.configuration).aRMemoMemoIDPatch(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {ARMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApi
     */
    public aRMemoMemoIDPut(memoID: number, body: ARMemo, options?: AxiosRequestConfig) {
        return ARMemoApiFp(this.configuration).aRMemoMemoIDPut(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ARMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARMemoApi
     */
    public aRMemoPost(body: ARMemo, options?: AxiosRequestConfig) {
        return ARMemoApiFp(this.configuration).aRMemoPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}