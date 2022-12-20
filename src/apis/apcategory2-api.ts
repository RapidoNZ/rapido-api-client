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
import { APCategory2 } from '../models';
// @ts-ignore
import { PagedAPCategory2 } from '../models';
/**
 * APCategory2Api - axios parameter creator
 * @export
 */
export const APCategory2ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('aPCategory2CodeDelete', 'code', code)
            const localVarPath = `/APCategory2('{Code}')`
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
        aPCategory2CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('aPCategory2CodeGet', 'code', code)
            const localVarPath = `/APCategory2('{Code}')`
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
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2CodePatch: async (code: string, body: APCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('aPCategory2CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aPCategory2CodePatch', 'body', body)
            const localVarPath = `/APCategory2('{Code}')`
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
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2CodePut: async (code: string, body: APCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('aPCategory2CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aPCategory2CodePut', 'body', body)
            const localVarPath = `/APCategory2('{Code}')`
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
        aPCategory2Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/APCategory2`;
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
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2Post: async (body: APCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aPCategory2Post', 'body', body)
            const localVarPath = `/APCategory2`;
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
 * APCategory2Api - functional programming interface
 * @export
 */
export const APCategory2ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = APCategory2ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCategory2CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCategory2CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCategory2CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APCategory2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCategory2CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCategory2CodePatch(code: string, body: APCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCategory2CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCategory2CodePut(code: string, body: APCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCategory2CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCategory2Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedAPCategory2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCategory2Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPCategory2Post(body: APCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPCategory2Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * APCategory2Api - factory interface
 * @export
 */
export const APCategory2ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = APCategory2ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.aPCategory2CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2CodeGet(code: string, options?: any): AxiosPromise<APCategory2> {
            return localVarFp.aPCategory2CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2CodePatch(code: string, body: APCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.aPCategory2CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2CodePut(code: string, body: APCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.aPCategory2CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2Get(options?: any): AxiosPromise<PagedAPCategory2> {
            return localVarFp.aPCategory2Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {APCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPCategory2Post(body: APCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.aPCategory2Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * APCategory2Api - interface
 * @export
 * @interface APCategory2Api
 */
export interface APCategory2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2ApiInterface
     */
    aPCategory2CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2ApiInterface
     */
    aPCategory2CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<APCategory2>;

    /**
     * 
     * @param {string} code 
     * @param {APCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2ApiInterface
     */
    aPCategory2CodePatch(code: string, body: APCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {APCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2ApiInterface
     */
    aPCategory2CodePut(code: string, body: APCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2ApiInterface
     */
    aPCategory2Get(options?: AxiosRequestConfig): AxiosPromise<PagedAPCategory2>;

    /**
     * 
     * @param {APCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2ApiInterface
     */
    aPCategory2Post(body: APCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * APCategory2Api - object-oriented interface
 * @export
 * @class APCategory2Api
 * @extends {BaseAPI}
 */
export class APCategory2Api extends BaseAPI implements APCategory2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2Api
     */
    public aPCategory2CodeDelete(code: string, options?: AxiosRequestConfig) {
        return APCategory2ApiFp(this.configuration).aPCategory2CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2Api
     */
    public aPCategory2CodeGet(code: string, options?: AxiosRequestConfig) {
        return APCategory2ApiFp(this.configuration).aPCategory2CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {APCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2Api
     */
    public aPCategory2CodePatch(code: string, body: APCategory2, options?: AxiosRequestConfig) {
        return APCategory2ApiFp(this.configuration).aPCategory2CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {APCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2Api
     */
    public aPCategory2CodePut(code: string, body: APCategory2, options?: AxiosRequestConfig) {
        return APCategory2ApiFp(this.configuration).aPCategory2CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2Api
     */
    public aPCategory2Get(options?: AxiosRequestConfig) {
        return APCategory2ApiFp(this.configuration).aPCategory2Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {APCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APCategory2Api
     */
    public aPCategory2Post(body: APCategory2, options?: AxiosRequestConfig) {
        return APCategory2ApiFp(this.configuration).aPCategory2Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}