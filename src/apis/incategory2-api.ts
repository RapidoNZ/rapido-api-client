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
import { INCategory2 } from '../models';
// @ts-ignore
import { PagedINCategory2 } from '../models';
/**
 * INCategory2Api - axios parameter creator
 * @export
 */
export const INCategory2ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('iNCategory2CodeDelete', 'code', code)
            const localVarPath = `/INCategory2('{Code}')`
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
        iNCategory2CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('iNCategory2CodeGet', 'code', code)
            const localVarPath = `/INCategory2('{Code}')`
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
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2CodePatch: async (code: string, body: INCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('iNCategory2CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iNCategory2CodePatch', 'body', body)
            const localVarPath = `/INCategory2('{Code}')`
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
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2CodePut: async (code: string, body: INCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('iNCategory2CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iNCategory2CodePut', 'body', body)
            const localVarPath = `/INCategory2('{Code}')`
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
        iNCategory2Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/INCategory2`;
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
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2Post: async (body: INCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iNCategory2Post', 'body', body)
            const localVarPath = `/INCategory2`;
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
 * INCategory2Api - functional programming interface
 * @export
 */
export const INCategory2ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = INCategory2ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory2CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory2CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory2CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<INCategory2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory2CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory2CodePatch(code: string, body: INCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory2CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory2CodePut(code: string, body: INCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory2CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory2Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedINCategory2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory2Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNCategory2Post(body: INCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNCategory2Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * INCategory2Api - factory interface
 * @export
 */
export const INCategory2ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = INCategory2ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.iNCategory2CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2CodeGet(code: string, options?: any): AxiosPromise<INCategory2> {
            return localVarFp.iNCategory2CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2CodePatch(code: string, body: INCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.iNCategory2CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2CodePut(code: string, body: INCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.iNCategory2CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2Get(options?: any): AxiosPromise<PagedINCategory2> {
            return localVarFp.iNCategory2Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {INCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNCategory2Post(body: INCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.iNCategory2Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * INCategory2Api - interface
 * @export
 * @interface INCategory2Api
 */
export interface INCategory2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2ApiInterface
     */
    iNCategory2CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2ApiInterface
     */
    iNCategory2CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<INCategory2>;

    /**
     * 
     * @param {string} code 
     * @param {INCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2ApiInterface
     */
    iNCategory2CodePatch(code: string, body: INCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {INCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2ApiInterface
     */
    iNCategory2CodePut(code: string, body: INCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2ApiInterface
     */
    iNCategory2Get(options?: AxiosRequestConfig): AxiosPromise<PagedINCategory2>;

    /**
     * 
     * @param {INCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2ApiInterface
     */
    iNCategory2Post(body: INCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * INCategory2Api - object-oriented interface
 * @export
 * @class INCategory2Api
 * @extends {BaseAPI}
 */
export class INCategory2Api extends BaseAPI implements INCategory2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2Api
     */
    public iNCategory2CodeDelete(code: string, options?: AxiosRequestConfig) {
        return INCategory2ApiFp(this.configuration).iNCategory2CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2Api
     */
    public iNCategory2CodeGet(code: string, options?: AxiosRequestConfig) {
        return INCategory2ApiFp(this.configuration).iNCategory2CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {INCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2Api
     */
    public iNCategory2CodePatch(code: string, body: INCategory2, options?: AxiosRequestConfig) {
        return INCategory2ApiFp(this.configuration).iNCategory2CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {INCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2Api
     */
    public iNCategory2CodePut(code: string, body: INCategory2, options?: AxiosRequestConfig) {
        return INCategory2ApiFp(this.configuration).iNCategory2CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2Api
     */
    public iNCategory2Get(options?: AxiosRequestConfig) {
        return INCategory2ApiFp(this.configuration).iNCategory2Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {INCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INCategory2Api
     */
    public iNCategory2Post(body: INCategory2, options?: AxiosRequestConfig) {
        return INCategory2ApiFp(this.configuration).iNCategory2Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}
