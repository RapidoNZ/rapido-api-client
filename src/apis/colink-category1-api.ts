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
import { COLinkCategory1 } from '../models';
// @ts-ignore
import { PagedCOLinkCategory1 } from '../models';
/**
 * COLinkCategory1Api - axios parameter creator
 * @export
 */
export const COLinkCategory1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('cOLinkCategory1CodeDelete', 'code', code)
            const localVarPath = `/COLinkCategory1('{Code}')`
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
        cOLinkCategory1CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('cOLinkCategory1CodeGet', 'code', code)
            const localVarPath = `/COLinkCategory1('{Code}')`
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
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1CodePatch: async (code: string, body: COLinkCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('cOLinkCategory1CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOLinkCategory1CodePatch', 'body', body)
            const localVarPath = `/COLinkCategory1('{Code}')`
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
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1CodePut: async (code: string, body: COLinkCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('cOLinkCategory1CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOLinkCategory1CodePut', 'body', body)
            const localVarPath = `/COLinkCategory1('{Code}')`
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
        cOLinkCategory1Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/COLinkCategory1`;
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
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1Post: async (body: COLinkCategory1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOLinkCategory1Post', 'body', body)
            const localVarPath = `/COLinkCategory1`;
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
 * COLinkCategory1Api - functional programming interface
 * @export
 */
export const COLinkCategory1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = COLinkCategory1ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOLinkCategory1CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOLinkCategory1CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOLinkCategory1CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<COLinkCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOLinkCategory1CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOLinkCategory1CodePatch(code: string, body: COLinkCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOLinkCategory1CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOLinkCategory1CodePut(code: string, body: COLinkCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOLinkCategory1CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOLinkCategory1Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedCOLinkCategory1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOLinkCategory1Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOLinkCategory1Post(body: COLinkCategory1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOLinkCategory1Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * COLinkCategory1Api - factory interface
 * @export
 */
export const COLinkCategory1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = COLinkCategory1ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.cOLinkCategory1CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1CodeGet(code: string, options?: any): AxiosPromise<COLinkCategory1> {
            return localVarFp.cOLinkCategory1CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1CodePatch(code: string, body: COLinkCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.cOLinkCategory1CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1CodePut(code: string, body: COLinkCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.cOLinkCategory1CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1Get(options?: any): AxiosPromise<PagedCOLinkCategory1> {
            return localVarFp.cOLinkCategory1Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {COLinkCategory1} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOLinkCategory1Post(body: COLinkCategory1, options?: any): AxiosPromise<void> {
            return localVarFp.cOLinkCategory1Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * COLinkCategory1Api - interface
 * @export
 * @interface COLinkCategory1Api
 */
export interface COLinkCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1ApiInterface
     */
    cOLinkCategory1CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1ApiInterface
     */
    cOLinkCategory1CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<COLinkCategory1>;

    /**
     * 
     * @param {string} code 
     * @param {COLinkCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1ApiInterface
     */
    cOLinkCategory1CodePatch(code: string, body: COLinkCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {COLinkCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1ApiInterface
     */
    cOLinkCategory1CodePut(code: string, body: COLinkCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1ApiInterface
     */
    cOLinkCategory1Get(options?: AxiosRequestConfig): AxiosPromise<PagedCOLinkCategory1>;

    /**
     * 
     * @param {COLinkCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1ApiInterface
     */
    cOLinkCategory1Post(body: COLinkCategory1, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * COLinkCategory1Api - object-oriented interface
 * @export
 * @class COLinkCategory1Api
 * @extends {BaseAPI}
 */
export class COLinkCategory1Api extends BaseAPI implements COLinkCategory1ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1Api
     */
    public cOLinkCategory1CodeDelete(code: string, options?: AxiosRequestConfig) {
        return COLinkCategory1ApiFp(this.configuration).cOLinkCategory1CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1Api
     */
    public cOLinkCategory1CodeGet(code: string, options?: AxiosRequestConfig) {
        return COLinkCategory1ApiFp(this.configuration).cOLinkCategory1CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {COLinkCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1Api
     */
    public cOLinkCategory1CodePatch(code: string, body: COLinkCategory1, options?: AxiosRequestConfig) {
        return COLinkCategory1ApiFp(this.configuration).cOLinkCategory1CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {COLinkCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1Api
     */
    public cOLinkCategory1CodePut(code: string, body: COLinkCategory1, options?: AxiosRequestConfig) {
        return COLinkCategory1ApiFp(this.configuration).cOLinkCategory1CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1Api
     */
    public cOLinkCategory1Get(options?: AxiosRequestConfig) {
        return COLinkCategory1ApiFp(this.configuration).cOLinkCategory1Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {COLinkCategory1} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COLinkCategory1Api
     */
    public cOLinkCategory1Post(body: COLinkCategory1, options?: AxiosRequestConfig) {
        return COLinkCategory1ApiFp(this.configuration).cOLinkCategory1Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}
