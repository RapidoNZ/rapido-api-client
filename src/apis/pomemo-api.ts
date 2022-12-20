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
import { POMemo } from '../models';
// @ts-ignore
import { PagedPOMemo } from '../models';
/**
 * POMemoApi - axios parameter creator
 * @export
 */
export const POMemoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/POMemo`;
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
        pOMemoMemoIDDelete: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('pOMemoMemoIDDelete', 'memoID', memoID)
            const localVarPath = `/POMemo('{MemoID}')`
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
        pOMemoMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('pOMemoMemoIDGet', 'memoID', memoID)
            const localVarPath = `/POMemo('{MemoID}')`
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
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoMemoIDPatch: async (memoID: number, body: POMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('pOMemoMemoIDPatch', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOMemoMemoIDPatch', 'body', body)
            const localVarPath = `/POMemo('{MemoID}')`
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
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoMemoIDPut: async (memoID: number, body: POMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('pOMemoMemoIDPut', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOMemoMemoIDPut', 'body', body)
            const localVarPath = `/POMemo('{MemoID}')`
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
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoPost: async (body: POMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOMemoPost', 'body', body)
            const localVarPath = `/POMemo`;
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
 * POMemoApi - functional programming interface
 * @export
 */
export const POMemoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = POMemoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOMemoGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedPOMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOMemoGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOMemoMemoIDDelete(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<POMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOMemoMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOMemoMemoIDPatch(memoID: number, body: POMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOMemoMemoIDPatch(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOMemoMemoIDPut(memoID: number, body: POMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOMemoMemoIDPut(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOMemoPost(body: POMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOMemoPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * POMemoApi - factory interface
 * @export
 */
export const POMemoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = POMemoApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoGet(options?: any): AxiosPromise<PagedPOMemo> {
            return localVarFp.pOMemoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoMemoIDDelete(memoID: number, options?: any): AxiosPromise<void> {
            return localVarFp.pOMemoMemoIDDelete(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoMemoIDGet(memoID: number, options?: any): AxiosPromise<POMemo> {
            return localVarFp.pOMemoMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoMemoIDPatch(memoID: number, body: POMemo, options?: any): AxiosPromise<void> {
            return localVarFp.pOMemoMemoIDPatch(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoMemoIDPut(memoID: number, body: POMemo, options?: any): AxiosPromise<void> {
            return localVarFp.pOMemoMemoIDPut(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {POMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOMemoPost(body: POMemo, options?: any): AxiosPromise<void> {
            return localVarFp.pOMemoPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * POMemoApi - interface
 * @export
 * @interface POMemoApi
 */
export interface POMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApiInterface
     */
    pOMemoGet(options?: AxiosRequestConfig): AxiosPromise<PagedPOMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApiInterface
     */
    pOMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApiInterface
     */
    pOMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<POMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {POMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApiInterface
     */
    pOMemoMemoIDPatch(memoID: number, body: POMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {POMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApiInterface
     */
    pOMemoMemoIDPut(memoID: number, body: POMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {POMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApiInterface
     */
    pOMemoPost(body: POMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * POMemoApi - object-oriented interface
 * @export
 * @class POMemoApi
 * @extends {BaseAPI}
 */
export class POMemoApi extends BaseAPI implements POMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApi
     */
    public pOMemoGet(options?: AxiosRequestConfig) {
        return POMemoApiFp(this.configuration).pOMemoGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApi
     */
    public pOMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig) {
        return POMemoApiFp(this.configuration).pOMemoMemoIDDelete(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApi
     */
    public pOMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return POMemoApiFp(this.configuration).pOMemoMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {POMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApi
     */
    public pOMemoMemoIDPatch(memoID: number, body: POMemo, options?: AxiosRequestConfig) {
        return POMemoApiFp(this.configuration).pOMemoMemoIDPatch(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {POMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApi
     */
    public pOMemoMemoIDPut(memoID: number, body: POMemo, options?: AxiosRequestConfig) {
        return POMemoApiFp(this.configuration).pOMemoMemoIDPut(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {POMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POMemoApi
     */
    public pOMemoPost(body: POMemo, options?: AxiosRequestConfig) {
        return POMemoApiFp(this.configuration).pOMemoPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
