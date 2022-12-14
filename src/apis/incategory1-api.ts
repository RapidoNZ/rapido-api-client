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
import { INCategory1 } from '../models';
// @ts-ignore
import { PagedINCategory1 } from '../models';
/**
 * INCategory1Api - axios parameter creator
 * @export
 */
export const INCategory1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('iNCategory1CodeDelete', 'code', code)
            const localVarPath = `/INCategory1('{Code}')`
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
        iNCategory1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('iNCategory1CodeGet', 'code', code)
            const localVarPath = `/INCategory1('{Code}')`
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
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1CodePatch: async (code: string, body: INCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('iNCategory1CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iNCategory1CodePatch', 'body', body)
            const localVarPath = `/INCategory1('{Code}')`
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
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1CodePut: async (code: string, body: INCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('iNCategory1CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iNCategory1CodePut', 'body', body)
            const localVarPath = `/INCategory1('{Code}')`
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
        iNCategory1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/INCategory1`;
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
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1Post: async (body: INCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iNCategory1Post', 'body', body)
            const localVarPath = `/INCategory1`;
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
 * INCategory1Api - functional programming interface
 * @export
 */
export const INCategory1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = INCategory1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory1CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory1CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<INCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory1CodePatch(code: string, body: INCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory1CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory1CodePut(code: string, body: INCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory1CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedINCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory1Post(body: INCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory1Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * INCategory1Api - factory interface
 * @export
 */
export const INCategory1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = INCategory1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.iNCategory1CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1CodeGet(code: string, options?: any): AxiosPromise<INCategory1> {
            return localVarFp.iNCategory1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1CodePatch(code: string, body: INCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.iNCategory1CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1CodePut(code: string, body: INCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.iNCategory1CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1Get(options?: any): AxiosPromise<PagedINCategory1> {
            return localVarFp.iNCategory1Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {INCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory1Post(body: INCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.iNCategory1Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * INCategory1Api - interface
 * @export
 * @interface INCategory1Api
 */
export interface INCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1ApiInterface
     */
    iNCategory1CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1ApiInterface
     */
    iNCategory1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<INCategory1>;

    /**
     * 
     * @param {string} code 
     * @param {INCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1ApiInterface
     */
    iNCategory1CodePatch(code: string, body: INCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {INCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1ApiInterface
     */
    iNCategory1CodePut(code: string, body: INCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1ApiInterface
     */
    iNCategory1Get(options?: AxiosRequestConfig): AxiosPromise<PagedINCategory1>;

    /**
     * 
     * @param {INCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1ApiInterface
     */
    iNCategory1Post(body: INCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * INCategory1Api - object-oriented interface
 * @export
 * @class INCategory1Api
 * @extends {BaseAPI}
 */
export class INCategory1Api extends BaseAPI implements INCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1Api
     */
    public iNCategory1CodeDelete(code: string, options?: AxiosRequestConfig) {
        return INCategory1ApiFp(this.configuration).iNCategory1CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1Api
     */
    public iNCategory1CodeGet(code: string, options?: AxiosRequestConfig) {
        return INCategory1ApiFp(this.configuration).iNCategory1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {INCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1Api
     */
    public iNCategory1CodePatch(code: string, body: INCategory1, options?: AxiosRequestConfig) {
        return INCategory1ApiFp(this.configuration).iNCategory1CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {INCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1Api
     */
    public iNCategory1CodePut(code: string, body: INCategory1, options?: AxiosRequestConfig) {
        return INCategory1ApiFp(this.configuration).iNCategory1CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1Api
     */
    public iNCategory1Get(options?: AxiosRequestConfig) {
        return INCategory1ApiFp(this.configuration).iNCategory1Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {INCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory1Api
     */
    public iNCategory1Post(body: INCategory1, options?: AxiosRequestConfig) {
        return INCategory1ApiFp(this.configuration).iNCategory1Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}
