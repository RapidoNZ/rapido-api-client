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
import { POCategory2 } from '../models';
// @ts-ignore
import { PagedPOCategory2 } from '../models';
/**
 * POCategory2Api - axios parameter creator
 * @export
 */
export const POCategory2ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('pOCategory2CodeDelete', 'code', code)
            const localVarPath = `/POCategory2('{Code}')`
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
        pOCategory2CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('pOCategory2CodeGet', 'code', code)
            const localVarPath = `/POCategory2('{Code}')`
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
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2CodePatch: async (code: string, body: POCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('pOCategory2CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOCategory2CodePatch', 'body', body)
            const localVarPath = `/POCategory2('{Code}')`
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
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2CodePut: async (code: string, body: POCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('pOCategory2CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOCategory2CodePut', 'body', body)
            const localVarPath = `/POCategory2('{Code}')`
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
        pOCategory2Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/POCategory2`;
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
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2Post: async (body: POCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOCategory2Post', 'body', body)
            const localVarPath = `/POCategory2`;
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
 * POCategory2Api - functional programming interface
 * @export
 */
export const POCategory2ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = POCategory2ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory2CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory2CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory2CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<POCategory2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory2CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory2CodePatch(code: string, body: POCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory2CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory2CodePut(code: string, body: POCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory2CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory2Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedPOCategory2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory2Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOCategory2Post(body: POCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOCategory2Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * POCategory2Api - factory interface
 * @export
 */
export const POCategory2ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = POCategory2ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.pOCategory2CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2CodeGet(code: string, options?: any): AxiosPromise<POCategory2> {
            return localVarFp.pOCategory2CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2CodePatch(code: string, body: POCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.pOCategory2CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2CodePut(code: string, body: POCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.pOCategory2CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2Get(options?: any): AxiosPromise<PagedPOCategory2> {
            return localVarFp.pOCategory2Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {POCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOCategory2Post(body: POCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.pOCategory2Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * POCategory2Api - interface
 * @export
 * @interface POCategory2Api
 */
export interface POCategory2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2ApiInterface
     */
    pOCategory2CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2ApiInterface
     */
    pOCategory2CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<POCategory2>;

    /**
     * 
     * @param {string} code 
     * @param {POCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2ApiInterface
     */
    pOCategory2CodePatch(code: string, body: POCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {POCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2ApiInterface
     */
    pOCategory2CodePut(code: string, body: POCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2ApiInterface
     */
    pOCategory2Get(options?: AxiosRequestConfig): AxiosPromise<PagedPOCategory2>;

    /**
     * 
     * @param {POCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2ApiInterface
     */
    pOCategory2Post(body: POCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * POCategory2Api - object-oriented interface
 * @export
 * @class POCategory2Api
 * @extends {BaseAPI}
 */
export class POCategory2Api extends BaseAPI implements POCategory2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2Api
     */
    public pOCategory2CodeDelete(code: string, options?: AxiosRequestConfig) {
        return POCategory2ApiFp(this.configuration).pOCategory2CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2Api
     */
    public pOCategory2CodeGet(code: string, options?: AxiosRequestConfig) {
        return POCategory2ApiFp(this.configuration).pOCategory2CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {POCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2Api
     */
    public pOCategory2CodePatch(code: string, body: POCategory2, options?: AxiosRequestConfig) {
        return POCategory2ApiFp(this.configuration).pOCategory2CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {POCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2Api
     */
    public pOCategory2CodePut(code: string, body: POCategory2, options?: AxiosRequestConfig) {
        return POCategory2ApiFp(this.configuration).pOCategory2CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2Api
     */
    public pOCategory2Get(options?: AxiosRequestConfig) {
        return POCategory2ApiFp(this.configuration).pOCategory2Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {POCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POCategory2Api
     */
    public pOCategory2Post(body: POCategory2, options?: AxiosRequestConfig) {
        return POCategory2ApiFp(this.configuration).pOCategory2Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}
