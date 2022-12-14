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
import { COMemo } from '../models';
// @ts-ignore
import { PagedCOMemo } from '../models';
/**
 * COMemoApi - axios parameter creator
 * @export
 */
export const COMemoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/COMemo`;
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
        cOMemoMemoIDDelete: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('cOMemoMemoIDDelete', 'memoID', memoID)
            const localVarPath = `/COMemo('{MemoID}')`
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
        cOMemoMemoIDGet: async (memoID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('cOMemoMemoIDGet', 'memoID', memoID)
            const localVarPath = `/COMemo('{MemoID}')`
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
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoMemoIDPatch: async (memoID: number, body: COMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('cOMemoMemoIDPatch', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOMemoMemoIDPatch', 'body', body)
            const localVarPath = `/COMemo('{MemoID}')`
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
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoMemoIDPut: async (memoID: number, body: COMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memoID' is not null or undefined
            assertParamExists('cOMemoMemoIDPut', 'memoID', memoID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOMemoMemoIDPut', 'body', body)
            const localVarPath = `/COMemo('{MemoID}')`
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
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoPost: async (body: COMemo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOMemoPost', 'body', body)
            const localVarPath = `/COMemo`;
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
 * COMemoApi - functional programming interface
 * @export
 */
export const COMemoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = COMemoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMemoGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedCOMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMemoGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMemoMemoIDDelete(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<COMemo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMemoMemoIDGet(memoID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMemoMemoIDPatch(memoID: number, body: COMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMemoMemoIDPatch(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} memoID 
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMemoMemoIDPut(memoID: number, body: COMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMemoMemoIDPut(memoID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMemoPost(body: COMemo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMemoPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * COMemoApi - factory interface
 * @export
 */
export const COMemoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = COMemoApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoGet(options?: any): AxiosPromise<PagedCOMemo> {
            return localVarFp.cOMemoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoMemoIDDelete(memoID: number, options?: any): AxiosPromise<void> {
            return localVarFp.cOMemoMemoIDDelete(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoMemoIDGet(memoID: number, options?: any): AxiosPromise<COMemo> {
            return localVarFp.cOMemoMemoIDGet(memoID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoMemoIDPatch(memoID: number, body: COMemo, options?: any): AxiosPromise<void> {
            return localVarFp.cOMemoMemoIDPatch(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memoID 
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoMemoIDPut(memoID: number, body: COMemo, options?: any): AxiosPromise<void> {
            return localVarFp.cOMemoMemoIDPut(memoID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {COMemo} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMemoPost(body: COMemo, options?: any): AxiosPromise<void> {
            return localVarFp.cOMemoPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * COMemoApi - interface
 * @export
 * @interface COMemoApi
 */
export interface COMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApiInterface
     */
    cOMemoGet(options?: AxiosRequestConfig): AxiosPromise<PagedCOMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApiInterface
     */
    cOMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApiInterface
     */
    cOMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig): AxiosPromise<COMemo>;

    /**
     * 
     * @param {number} memoID 
     * @param {COMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApiInterface
     */
    cOMemoMemoIDPatch(memoID: number, body: COMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} memoID 
     * @param {COMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApiInterface
     */
    cOMemoMemoIDPut(memoID: number, body: COMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {COMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApiInterface
     */
    cOMemoPost(body: COMemo, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * COMemoApi - object-oriented interface
 * @export
 * @class COMemoApi
 * @extends {BaseAPI}
 */
export class COMemoApi extends BaseAPI implements COMemoApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApi
     */
    public cOMemoGet(options?: AxiosRequestConfig) {
        return COMemoApiFp(this.configuration).cOMemoGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApi
     */
    public cOMemoMemoIDDelete(memoID: number, options?: AxiosRequestConfig) {
        return COMemoApiFp(this.configuration).cOMemoMemoIDDelete(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApi
     */
    public cOMemoMemoIDGet(memoID: number, options?: AxiosRequestConfig) {
        return COMemoApiFp(this.configuration).cOMemoMemoIDGet(memoID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {COMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApi
     */
    public cOMemoMemoIDPatch(memoID: number, body: COMemo, options?: AxiosRequestConfig) {
        return COMemoApiFp(this.configuration).cOMemoMemoIDPatch(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memoID 
     * @param {COMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApi
     */
    public cOMemoMemoIDPut(memoID: number, body: COMemo, options?: AxiosRequestConfig) {
        return COMemoApiFp(this.configuration).cOMemoMemoIDPut(memoID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {COMemo} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMemoApi
     */
    public cOMemoPost(body: COMemo, options?: AxiosRequestConfig) {
        return COMemoApiFp(this.configuration).cOMemoPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
