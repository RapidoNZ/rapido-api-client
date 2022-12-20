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
import { FACategory1 } from '../models';
// @ts-ignore
import { PagedFACategory1 } from '../models';
/**
 * FACategory1Api - axios parameter creator
 * @export
 */
export const FACategory1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('fACategory1CodeDelete', 'code', code)
            const localVarPath = `/FACategory1('{Code}')`
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
        fACategory1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('fACategory1CodeGet', 'code', code)
            const localVarPath = `/FACategory1('{Code}')`
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
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1CodePatch: async (code: string, body: FACategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('fACategory1CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('fACategory1CodePatch', 'body', body)
            const localVarPath = `/FACategory1('{Code}')`
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
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1CodePut: async (code: string, body: FACategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('fACategory1CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('fACategory1CodePut', 'body', body)
            const localVarPath = `/FACategory1('{Code}')`
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
        fACategory1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/FACategory1`;
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
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1Post: async (body: FACategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('fACategory1Post', 'body', body)
            const localVarPath = `/FACategory1`;
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
 * FACategory1Api - functional programming interface
 * @export
 */
export const FACategory1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FACategory1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fACategory1CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fACategory1CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fACategory1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FACategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fACategory1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fACategory1CodePatch(code: string, body: FACategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fACategory1CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fACategory1CodePut(code: string, body: FACategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fACategory1CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fACategory1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedFACategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fACategory1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fACategory1Post(body: FACategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fACategory1Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FACategory1Api - factory interface
 * @export
 */
export const FACategory1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FACategory1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.fACategory1CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1CodeGet(code: string, options?: any): AxiosPromise<FACategory1> {
            return localVarFp.fACategory1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1CodePatch(code: string, body: FACategory1, options?: any): AxiosPromise<void> {
            return localVarFp.fACategory1CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1CodePut(code: string, body: FACategory1, options?: any): AxiosPromise<void> {
            return localVarFp.fACategory1CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1Get(options?: any): AxiosPromise<PagedFACategory1> {
            return localVarFp.fACategory1Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {FACategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fACategory1Post(body: FACategory1, options?: any): AxiosPromise<void> {
            return localVarFp.fACategory1Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FACategory1Api - interface
 * @export
 * @interface FACategory1Api
 */
export interface FACategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1ApiInterface
     */
    fACategory1CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1ApiInterface
     */
    fACategory1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<FACategory1>;

    /**
     * 
     * @param {string} code 
     * @param {FACategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1ApiInterface
     */
    fACategory1CodePatch(code: string, body: FACategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {FACategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1ApiInterface
     */
    fACategory1CodePut(code: string, body: FACategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1ApiInterface
     */
    fACategory1Get(options?: AxiosRequestConfig): AxiosPromise<PagedFACategory1>;

    /**
     * 
     * @param {FACategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1ApiInterface
     */
    fACategory1Post(body: FACategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * FACategory1Api - object-oriented interface
 * @export
 * @class FACategory1Api
 * @extends {BaseAPI}
 */
export class FACategory1Api extends BaseAPI implements FACategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1Api
     */
    public fACategory1CodeDelete(code: string, options?: AxiosRequestConfig) {
        return FACategory1ApiFp(this.configuration).fACategory1CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1Api
     */
    public fACategory1CodeGet(code: string, options?: AxiosRequestConfig) {
        return FACategory1ApiFp(this.configuration).fACategory1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {FACategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1Api
     */
    public fACategory1CodePatch(code: string, body: FACategory1, options?: AxiosRequestConfig) {
        return FACategory1ApiFp(this.configuration).fACategory1CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {FACategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1Api
     */
    public fACategory1CodePut(code: string, body: FACategory1, options?: AxiosRequestConfig) {
        return FACategory1ApiFp(this.configuration).fACategory1CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1Api
     */
    public fACategory1Get(options?: AxiosRequestConfig) {
        return FACategory1ApiFp(this.configuration).fACategory1Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {FACategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FACategory1Api
     */
    public fACategory1Post(body: FACategory1, options?: AxiosRequestConfig) {
        return FACategory1ApiFp(this.configuration).fACategory1Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}
