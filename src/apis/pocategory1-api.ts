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
import { POCategory1 } from '../models';
// @ts-ignore
import { PagedPOCategory1 } from '../models';
/**
 * POCategory1Api - axios parameter creator
 * @export
 */
export const POCategory1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('pOCategory1CodeDelete', 'code', code)
            const localVarPath = `/POCategory1('{Code}')`
                .replace(`{${"Code"}}`, encodeURIComponent(String(code)));
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
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('pOCategory1CodeGet', 'code', code)
            const localVarPath = `/POCategory1('{Code}')`
                .replace(`{${"Code"}}`, encodeURIComponent(String(code)));
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
         * @param {string} code 
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1CodePatch: async (code: string, body: POCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('pOCategory1CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOCategory1CodePatch', 'body', body)
            const localVarPath = `/POCategory1('{Code}')`
                .replace(`{${"Code"}}`, encodeURIComponent(String(code)));
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
         * @param {string} code 
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1CodePut: async (code: string, body: POCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('pOCategory1CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOCategory1CodePut', 'body', body)
            const localVarPath = `/POCategory1('{Code}')`
                .replace(`{${"Code"}}`, encodeURIComponent(String(code)));
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
        pOCategory1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/POCategory1`;
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
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1Post: async (body: POCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOCategory1Post', 'body', body)
            const localVarPath = `/POCategory1`;
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
 * POCategory1Api - functional programming interface
 * @export
 */
export const POCategory1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = POCategory1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory1CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory1CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<POCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory1CodePatch(code: string, body: POCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory1CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory1CodePut(code: string, body: POCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory1CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedPOCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory1Post(body: POCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory1Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * POCategory1Api - factory interface
 * @export
 */
export const POCategory1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = POCategory1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.pOCategory1CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1CodeGet(code: string, options?: any): AxiosPromise<POCategory1> {
            return localVarFp.pOCategory1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1CodePatch(code: string, body: POCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.pOCategory1CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1CodePut(code: string, body: POCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.pOCategory1CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1Get(options?: any): AxiosPromise<PagedPOCategory1> {
            return localVarFp.pOCategory1Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {POCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory1Post(body: POCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.pOCategory1Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * POCategory1Api - interface
 * @export
 * @interface POCategory1Api
 */
export interface POCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1ApiInterface
     */
    pOCategory1CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1ApiInterface
     */
    pOCategory1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<POCategory1>;

    /**
     * 
     * @param {string} code 
     * @param {POCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1ApiInterface
     */
    pOCategory1CodePatch(code: string, body: POCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {POCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1ApiInterface
     */
    pOCategory1CodePut(code: string, body: POCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1ApiInterface
     */
    pOCategory1Get(options?: AxiosRequestConfig): AxiosPromise<PagedPOCategory1>;

    /**
     * 
     * @param {POCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1ApiInterface
     */
    pOCategory1Post(body: POCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * POCategory1Api - object-oriented interface
 * @export
 * @class POCategory1Api
 * @extends {BaseAPI}
 */
export class POCategory1Api extends BaseAPI implements POCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1Api
     */
    public pOCategory1CodeDelete(code: string, options?: AxiosRequestConfig) {
        return POCategory1ApiFp(this.configuration).pOCategory1CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1Api
     */
    public pOCategory1CodeGet(code: string, options?: AxiosRequestConfig) {
        return POCategory1ApiFp(this.configuration).pOCategory1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {POCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1Api
     */
    public pOCategory1CodePatch(code: string, body: POCategory1, options?: AxiosRequestConfig) {
        return POCategory1ApiFp(this.configuration).pOCategory1CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {POCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1Api
     */
    public pOCategory1CodePut(code: string, body: POCategory1, options?: AxiosRequestConfig) {
        return POCategory1ApiFp(this.configuration).pOCategory1CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1Api
     */
    public pOCategory1Get(options?: AxiosRequestConfig) {
        return POCategory1ApiFp(this.configuration).pOCategory1Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {POCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory1Api
     */
    public pOCategory1Post(body: POCategory1, options?: AxiosRequestConfig) {
        return POCategory1ApiFp(this.configuration).pOCategory1Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}
