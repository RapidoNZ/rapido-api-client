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
import { POAuthorisation } from '../models';
// @ts-ignore
import { PagedPOAuthorisation } from '../models';
/**
 * POAuthorisationApi - axios parameter creator
 * @export
 */
export const POAuthorisationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationAuthorCodeDelete: async (authorCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorCode' is not null or undefined
            assertParamExists('pOAuthorisationAuthorCodeDelete', 'authorCode', authorCode)
            const localVarPath = `/POAuthorisation('{AuthorCode}')`
                .replace(`{${"AuthorCode"}}`, encodeURIComponent(String(authorCode)));
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
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationAuthorCodeGet: async (authorCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorCode' is not null or undefined
            assertParamExists('pOAuthorisationAuthorCodeGet', 'authorCode', authorCode)
            const localVarPath = `/POAuthorisation('{AuthorCode}')`
                .replace(`{${"AuthorCode"}}`, encodeURIComponent(String(authorCode)));
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
         * @param {string} authorCode 
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationAuthorCodePatch: async (authorCode: string, body: POAuthorisation, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorCode' is not null or undefined
            assertParamExists('pOAuthorisationAuthorCodePatch', 'authorCode', authorCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOAuthorisationAuthorCodePatch', 'body', body)
            const localVarPath = `/POAuthorisation('{AuthorCode}')`
                .replace(`{${"AuthorCode"}}`, encodeURIComponent(String(authorCode)));
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
         * @param {string} authorCode 
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationAuthorCodePut: async (authorCode: string, body: POAuthorisation, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorCode' is not null or undefined
            assertParamExists('pOAuthorisationAuthorCodePut', 'authorCode', authorCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOAuthorisationAuthorCodePut', 'body', body)
            const localVarPath = `/POAuthorisation('{AuthorCode}')`
                .replace(`{${"AuthorCode"}}`, encodeURIComponent(String(authorCode)));
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
        pOAuthorisationGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/POAuthorisation`;
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
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationPost: async (body: POAuthorisation, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('pOAuthorisationPost', 'body', body)
            const localVarPath = `/POAuthorisation`;
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
 * POAuthorisationApi - functional programming interface
 * @export
 */
export const POAuthorisationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = POAuthorisationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOAuthorisationAuthorCodeDelete(authorCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOAuthorisationAuthorCodeDelete(authorCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOAuthorisationAuthorCodeGet(authorCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<POAuthorisation>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOAuthorisationAuthorCodeGet(authorCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} authorCode 
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOAuthorisationAuthorCodePatch(authorCode: string, body: POAuthorisation, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOAuthorisationAuthorCodePatch(authorCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} authorCode 
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOAuthorisationAuthorCodePut(authorCode: string, body: POAuthorisation, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOAuthorisationAuthorCodePut(authorCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOAuthorisationGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedPOAuthorisation>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOAuthorisationGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pOAuthorisationPost(body: POAuthorisation, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pOAuthorisationPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * POAuthorisationApi - factory interface
 * @export
 */
export const POAuthorisationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = POAuthorisationApiFp(configuration)
    return {
        /**
         * 
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationAuthorCodeDelete(authorCode: string, options?: any): AxiosPromise<void> {
            return localVarFp.pOAuthorisationAuthorCodeDelete(authorCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} authorCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationAuthorCodeGet(authorCode: string, options?: any): AxiosPromise<POAuthorisation> {
            return localVarFp.pOAuthorisationAuthorCodeGet(authorCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} authorCode 
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationAuthorCodePatch(authorCode: string, body: POAuthorisation, options?: any): AxiosPromise<void> {
            return localVarFp.pOAuthorisationAuthorCodePatch(authorCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} authorCode 
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationAuthorCodePut(authorCode: string, body: POAuthorisation, options?: any): AxiosPromise<void> {
            return localVarFp.pOAuthorisationAuthorCodePut(authorCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationGet(options?: any): AxiosPromise<PagedPOAuthorisation> {
            return localVarFp.pOAuthorisationGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {POAuthorisation} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pOAuthorisationPost(body: POAuthorisation, options?: any): AxiosPromise<void> {
            return localVarFp.pOAuthorisationPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * POAuthorisationApi - interface
 * @export
 * @interface POAuthorisationApi
 */
export interface POAuthorisationApiInterface {
    /**
     * 
     * @param {string} authorCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApiInterface
     */
    pOAuthorisationAuthorCodeDelete(authorCode: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} authorCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApiInterface
     */
    pOAuthorisationAuthorCodeGet(authorCode: string, options?: AxiosRequestConfig): AxiosPromise<POAuthorisation>;

    /**
     * 
     * @param {string} authorCode 
     * @param {POAuthorisation} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApiInterface
     */
    pOAuthorisationAuthorCodePatch(authorCode: string, body: POAuthorisation, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} authorCode 
     * @param {POAuthorisation} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApiInterface
     */
    pOAuthorisationAuthorCodePut(authorCode: string, body: POAuthorisation, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApiInterface
     */
    pOAuthorisationGet(options?: AxiosRequestConfig): AxiosPromise<PagedPOAuthorisation>;

    /**
     * 
     * @param {POAuthorisation} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApiInterface
     */
    pOAuthorisationPost(body: POAuthorisation, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * POAuthorisationApi - object-oriented interface
 * @export
 * @class POAuthorisationApi
 * @extends {BaseAPI}
 */
export class POAuthorisationApi extends BaseAPI implements POAuthorisationApiInterface {
    /**
     * 
     * @param {string} authorCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApi
     */
    public pOAuthorisationAuthorCodeDelete(authorCode: string, options?: AxiosRequestConfig) {
        return POAuthorisationApiFp(this.configuration).pOAuthorisationAuthorCodeDelete(authorCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} authorCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApi
     */
    public pOAuthorisationAuthorCodeGet(authorCode: string, options?: AxiosRequestConfig) {
        return POAuthorisationApiFp(this.configuration).pOAuthorisationAuthorCodeGet(authorCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} authorCode 
     * @param {POAuthorisation} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApi
     */
    public pOAuthorisationAuthorCodePatch(authorCode: string, body: POAuthorisation, options?: AxiosRequestConfig) {
        return POAuthorisationApiFp(this.configuration).pOAuthorisationAuthorCodePatch(authorCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} authorCode 
     * @param {POAuthorisation} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApi
     */
    public pOAuthorisationAuthorCodePut(authorCode: string, body: POAuthorisation, options?: AxiosRequestConfig) {
        return POAuthorisationApiFp(this.configuration).pOAuthorisationAuthorCodePut(authorCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApi
     */
    public pOAuthorisationGet(options?: AxiosRequestConfig) {
        return POAuthorisationApiFp(this.configuration).pOAuthorisationGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {POAuthorisation} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof POAuthorisationApi
     */
    public pOAuthorisationPost(body: POAuthorisation, options?: AxiosRequestConfig) {
        return POAuthorisationApiFp(this.configuration).pOAuthorisationPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
