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
import { OEMemo } from '../models';
// @ts-ignore
import { PagedOEMemo } from '../models';
/**
 * OEMemoApi - axios parameter creator
 * @export
 */
export const OEMemoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/OEMemo`;
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
        oEMemoMemoIDDelete: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('oEMemoMemoIDDelete', 'memoID', memoID)
            const localVarPath = `/OEMemo('{MemoID}')`
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
        oEMemoMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('oEMemoMemoIDGet', 'memoID', memoID)
            const localVarPath = `/OEMemo('{MemoID}')`
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
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoMemoIDPatch: async (memoID: number, body: OEMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('oEMemoMemoIDPatch', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('oEMemoMemoIDPatch', 'body', body)
            const localVarPath = `/OEMemo('{MemoID}')`
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
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoMemoIDPut: async (memoID: number, body: OEMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('oEMemoMemoIDPut', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('oEMemoMemoIDPut', 'body', body)
            const localVarPath = `/OEMemo('{MemoID}')`
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
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoPost: async (body: OEMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('oEMemoPost', 'body', body)
            const localVarPath = `/OEMemo`;
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
 * OEMemoApi - functional programming interface
 * @export
 */
export const OEMemoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OEMemoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oEMemoGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedOEMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oEMemoGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oEMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oEMemoMemoIDDelete(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oEMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OEMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oEMemoMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oEMemoMemoIDPatch(memoID: number, body: OEMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oEMemoMemoIDPatch(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oEMemoMemoIDPut(memoID: number, body: OEMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oEMemoMemoIDPut(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oEMemoPost(body: OEMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oEMemoPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OEMemoApi - factory interface
 * @export
 */
export const OEMemoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OEMemoApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoGet(options?: any): AxiosPromise<PagedOEMemo> {
            return localVarFp.oEMemoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoMemoIDDelete(memoID: number, options?: any): AxiosPromise<void> {
            return localVarFp.oEMemoMemoIDDelete(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoMemoIDGet(memoID: number, options?: any): AxiosPromise<OEMemo> {
            return localVarFp.oEMemoMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoMemoIDPatch(memoID: number, body: OEMemo, options?: any): AxiosPromise<void> {
            return localVarFp.oEMemoMemoIDPatch(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoMemoIDPut(memoID: number, body: OEMemo, options?: any): AxiosPromise<void> {
            return localVarFp.oEMemoMemoIDPut(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {OEMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEMemoPost(body: OEMemo, options?: any): AxiosPromise<void> {
            return localVarFp.oEMemoPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OEMemoApi - interface
 * @export
 * @interface OEMemoApi
 */
export interface OEMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApiInterface
     */
    oEMemoGet(options?: AxiosRequestConfig): AxiosPromise<PagedOEMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApiInterface
     */
    oEMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApiInterface
     */
    oEMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<OEMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {OEMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApiInterface
     */
    oEMemoMemoIDPatch(memoID: number, body: OEMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {OEMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApiInterface
     */
    oEMemoMemoIDPut(memoID: number, body: OEMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {OEMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApiInterface
     */
    oEMemoPost(body: OEMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * OEMemoApi - object-oriented interface
 * @export
 * @class OEMemoApi
 * @extends {BaseAPI}
 */
export class OEMemoApi extends BaseAPI implements OEMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApi
     */
    public oEMemoGet(options?: AxiosRequestConfig) {
        return OEMemoApiFp(this.configuration).oEMemoGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApi
     */
    public oEMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig) {
        return OEMemoApiFp(this.configuration).oEMemoMemoIDDelete(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApi
     */
    public oEMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return OEMemoApiFp(this.configuration).oEMemoMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {OEMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApi
     */
    public oEMemoMemoIDPatch(memoID: number, body: OEMemo, options?: AxiosRequestConfig) {
        return OEMemoApiFp(this.configuration).oEMemoMemoIDPatch(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {OEMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApi
     */
    public oEMemoMemoIDPut(memoID: number, body: OEMemo, options?: AxiosRequestConfig) {
        return OEMemoApiFp(this.configuration).oEMemoMemoIDPut(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {OEMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEMemoApi
     */
    public oEMemoPost(body: OEMemo, options?: AxiosRequestConfig) {
        return OEMemoApiFp(this.configuration).oEMemoPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
