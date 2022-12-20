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
import { ARCategory1 } from '../models';
// @ts-ignore
import { PagedARCategory1 } from '../models';
/**
 * ARCategory1Api - axios parameter creator
 * @export
 */
export const ARCategory1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('aRCategory1CodeDelete', 'code', code)
            const localVarPath = `/ARCategory1('{Code}')`
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
        aRCategory1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('aRCategory1CodeGet', 'code', code)
            const localVarPath = `/ARCategory1('{Code}')`
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
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1CodePatch: async (code: string, body: ARCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('aRCategory1CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aRCategory1CodePatch', 'body', body)
            const localVarPath = `/ARCategory1('{Code}')`
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
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1CodePut: async (code: string, body: ARCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('aRCategory1CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aRCategory1CodePut', 'body', body)
            const localVarPath = `/ARCategory1('{Code}')`
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
        aRCategory1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ARCategory1`;
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
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1Post: async (body: ARCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aRCategory1Post', 'body', body)
            const localVarPath = `/ARCategory1`;
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
 * ARCategory1Api - functional programming interface
 * @export
 */
export const ARCategory1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ARCategory1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRCategory1CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRCategory1CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRCategory1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ARCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRCategory1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRCategory1CodePatch(code: string, body: ARCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRCategory1CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRCategory1CodePut(code: string, body: ARCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRCategory1CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRCategory1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedARCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRCategory1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aRCategory1Post(body: ARCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aRCategory1Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ARCategory1Api - factory interface
 * @export
 */
export const ARCategory1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ARCategory1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.aRCategory1CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1CodeGet(code: string, options?: any): AxiosPromise<ARCategory1> {
            return localVarFp.aRCategory1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1CodePatch(code: string, body: ARCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.aRCategory1CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1CodePut(code: string, body: ARCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.aRCategory1CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1Get(options?: any): AxiosPromise<PagedARCategory1> {
            return localVarFp.aRCategory1Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ARCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aRCategory1Post(body: ARCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.aRCategory1Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ARCategory1Api - interface
 * @export
 * @interface ARCategory1Api
 */
export interface ARCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1ApiInterface
     */
    aRCategory1CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1ApiInterface
     */
    aRCategory1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<ARCategory1>;

    /**
     * 
     * @param {string} code 
     * @param {ARCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1ApiInterface
     */
    aRCategory1CodePatch(code: string, body: ARCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {ARCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1ApiInterface
     */
    aRCategory1CodePut(code: string, body: ARCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1ApiInterface
     */
    aRCategory1Get(options?: AxiosRequestConfig): AxiosPromise<PagedARCategory1>;

    /**
     * 
     * @param {ARCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1ApiInterface
     */
    aRCategory1Post(body: ARCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ARCategory1Api - object-oriented interface
 * @export
 * @class ARCategory1Api
 * @extends {BaseAPI}
 */
export class ARCategory1Api extends BaseAPI implements ARCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1Api
     */
    public aRCategory1CodeDelete(code: string, options?: AxiosRequestConfig) {
        return ARCategory1ApiFp(this.configuration).aRCategory1CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1Api
     */
    public aRCategory1CodeGet(code: string, options?: AxiosRequestConfig) {
        return ARCategory1ApiFp(this.configuration).aRCategory1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {ARCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1Api
     */
    public aRCategory1CodePatch(code: string, body: ARCategory1, options?: AxiosRequestConfig) {
        return ARCategory1ApiFp(this.configuration).aRCategory1CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {ARCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1Api
     */
    public aRCategory1CodePut(code: string, body: ARCategory1, options?: AxiosRequestConfig) {
        return ARCategory1ApiFp(this.configuration).aRCategory1CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1Api
     */
    public aRCategory1Get(options?: AxiosRequestConfig) {
        return ARCategory1ApiFp(this.configuration).aRCategory1Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ARCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ARCategory1Api
     */
    public aRCategory1Post(body: ARCategory1, options?: AxiosRequestConfig) {
        return ARCategory1ApiFp(this.configuration).aRCategory1Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}
