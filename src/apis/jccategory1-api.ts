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
import { JCCategory1 } from '../models';
// @ts-ignore
import { PagedJCCategory1 } from '../models';
/**
 * JCCategory1Api - axios parameter creator
 * @export
 */
export const JCCategory1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('jCCategory1CodeDelete', 'code', code)
            const localVarPath = `/JCCategory1('{Code}')`
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
        jCCategory1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('jCCategory1CodeGet', 'code', code)
            const localVarPath = `/JCCategory1('{Code}')`
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
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1CodePatch: async (code: string, body: JCCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('jCCategory1CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('jCCategory1CodePatch', 'body', body)
            const localVarPath = `/JCCategory1('{Code}')`
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
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1CodePut: async (code: string, body: JCCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('jCCategory1CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('jCCategory1CodePut', 'body', body)
            const localVarPath = `/JCCategory1('{Code}')`
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
        jCCategory1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/JCCategory1`;
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
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1Post: async (body: JCCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('jCCategory1Post', 'body', body)
            const localVarPath = `/JCCategory1`;
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
 * JCCategory1Api - functional programming interface
 * @export
 */
export const JCCategory1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JCCategory1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCCategory1CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCCategory1CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCCategory1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JCCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCCategory1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCCategory1CodePatch(code: string, body: JCCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCCategory1CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCCategory1CodePut(code: string, body: JCCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCCategory1CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCCategory1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedJCCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCCategory1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCCategory1Post(body: JCCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCCategory1Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JCCategory1Api - factory interface
 * @export
 */
export const JCCategory1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JCCategory1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.jCCategory1CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1CodeGet(code: string, options?: any): AxiosPromise<JCCategory1> {
            return localVarFp.jCCategory1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1CodePatch(code: string, body: JCCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.jCCategory1CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1CodePut(code: string, body: JCCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.jCCategory1CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1Get(options?: any): AxiosPromise<PagedJCCategory1> {
            return localVarFp.jCCategory1Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {JCCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCCategory1Post(body: JCCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.jCCategory1Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * JCCategory1Api - interface
 * @export
 * @interface JCCategory1Api
 */
export interface JCCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1ApiInterface
     */
    jCCategory1CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1ApiInterface
     */
    jCCategory1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<JCCategory1>;

    /**
     * 
     * @param {string} code 
     * @param {JCCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1ApiInterface
     */
    jCCategory1CodePatch(code: string, body: JCCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {JCCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1ApiInterface
     */
    jCCategory1CodePut(code: string, body: JCCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1ApiInterface
     */
    jCCategory1Get(options?: AxiosRequestConfig): AxiosPromise<PagedJCCategory1>;

    /**
     * 
     * @param {JCCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1ApiInterface
     */
    jCCategory1Post(body: JCCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * JCCategory1Api - object-oriented interface
 * @export
 * @class JCCategory1Api
 * @extends {BaseAPI}
 */
export class JCCategory1Api extends BaseAPI implements JCCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1Api
     */
    public jCCategory1CodeDelete(code: string, options?: AxiosRequestConfig) {
        return JCCategory1ApiFp(this.configuration).jCCategory1CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1Api
     */
    public jCCategory1CodeGet(code: string, options?: AxiosRequestConfig) {
        return JCCategory1ApiFp(this.configuration).jCCategory1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {JCCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1Api
     */
    public jCCategory1CodePatch(code: string, body: JCCategory1, options?: AxiosRequestConfig) {
        return JCCategory1ApiFp(this.configuration).jCCategory1CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {JCCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1Api
     */
    public jCCategory1CodePut(code: string, body: JCCategory1, options?: AxiosRequestConfig) {
        return JCCategory1ApiFp(this.configuration).jCCategory1CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1Api
     */
    public jCCategory1Get(options?: AxiosRequestConfig) {
        return JCCategory1ApiFp(this.configuration).jCCategory1Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {JCCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCCategory1Api
     */
    public jCCategory1Post(body: JCCategory1, options?: AxiosRequestConfig) {
        return JCCategory1ApiFp(this.configuration).jCCategory1Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}