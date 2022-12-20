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
import { GLSudsidiary } from '../models';
// @ts-ignore
import { PagedGLSudsidiary } from '../models';
/**
 * GLSudsidiaryApi - axios parameter creator
 * @export
 */
export const GLSudsidiaryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} companyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryCompanyCodeDelete: async (companyCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyCode' is not null or undefined
            assertParamExists('gLSudsidiaryCompanyCodeDelete', 'companyCode', companyCode)
            const localVarPath = `/GLSudsidiary('{CompanyCode}')`
                .replace(`{${"CompanyCode"}}`, encodeURIComponent(String(companyCode)));
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
         * @param {string} companyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryCompanyCodeGet: async (companyCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyCode' is not null or undefined
            assertParamExists('gLSudsidiaryCompanyCodeGet', 'companyCode', companyCode)
            const localVarPath = `/GLSudsidiary('{CompanyCode}')`
                .replace(`{${"CompanyCode"}}`, encodeURIComponent(String(companyCode)));
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
         * @param {string} companyCode 
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryCompanyCodePatch: async (companyCode: string, body: GLSudsidiary, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyCode' is not null or undefined
            assertParamExists('gLSudsidiaryCompanyCodePatch', 'companyCode', companyCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('gLSudsidiaryCompanyCodePatch', 'body', body)
            const localVarPath = `/GLSudsidiary('{CompanyCode}')`
                .replace(`{${"CompanyCode"}}`, encodeURIComponent(String(companyCode)));
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
         * @param {string} companyCode 
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryCompanyCodePut: async (companyCode: string, body: GLSudsidiary, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyCode' is not null or undefined
            assertParamExists('gLSudsidiaryCompanyCodePut', 'companyCode', companyCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('gLSudsidiaryCompanyCodePut', 'body', body)
            const localVarPath = `/GLSudsidiary('{CompanyCode}')`
                .replace(`{${"CompanyCode"}}`, encodeURIComponent(String(companyCode)));
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
        gLSudsidiaryGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/GLSudsidiary`;
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
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryPost: async (body: GLSudsidiary, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('gLSudsidiaryPost', 'body', body)
            const localVarPath = `/GLSudsidiary`;
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
 * GLSudsidiaryApi - functional programming interface
 * @export
 */
export const GLSudsidiaryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GLSudsidiaryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} companyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gLSudsidiaryCompanyCodeDelete(companyCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.gLSudsidiaryCompanyCodeDelete(companyCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gLSudsidiaryCompanyCodeGet(companyCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GLSudsidiary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.gLSudsidiaryCompanyCodeGet(companyCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyCode 
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gLSudsidiaryCompanyCodePatch(companyCode: string, body: GLSudsidiary, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.gLSudsidiaryCompanyCodePatch(companyCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyCode 
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gLSudsidiaryCompanyCodePut(companyCode: string, body: GLSudsidiary, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.gLSudsidiaryCompanyCodePut(companyCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gLSudsidiaryGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedGLSudsidiary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.gLSudsidiaryGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gLSudsidiaryPost(body: GLSudsidiary, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.gLSudsidiaryPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GLSudsidiaryApi - factory interface
 * @export
 */
export const GLSudsidiaryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GLSudsidiaryApiFp(configuration)
    return {
        /**
         * 
         * @param {string} companyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryCompanyCodeDelete(companyCode: string, options?: any): AxiosPromise<void> {
            return localVarFp.gLSudsidiaryCompanyCodeDelete(companyCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryCompanyCodeGet(companyCode: string, options?: any): AxiosPromise<GLSudsidiary> {
            return localVarFp.gLSudsidiaryCompanyCodeGet(companyCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyCode 
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryCompanyCodePatch(companyCode: string, body: GLSudsidiary, options?: any): AxiosPromise<void> {
            return localVarFp.gLSudsidiaryCompanyCodePatch(companyCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyCode 
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryCompanyCodePut(companyCode: string, body: GLSudsidiary, options?: any): AxiosPromise<void> {
            return localVarFp.gLSudsidiaryCompanyCodePut(companyCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryGet(options?: any): AxiosPromise<PagedGLSudsidiary> {
            return localVarFp.gLSudsidiaryGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {GLSudsidiary} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gLSudsidiaryPost(body: GLSudsidiary, options?: any): AxiosPromise<void> {
            return localVarFp.gLSudsidiaryPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GLSudsidiaryApi - interface
 * @export
 * @interface GLSudsidiaryApi
 */
export interface GLSudsidiaryApiInterface {
    /**
     * 
     * @param {string} companyCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApiInterface
     */
    gLSudsidiaryCompanyCodeDelete(companyCode: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} companyCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApiInterface
     */
    gLSudsidiaryCompanyCodeGet(companyCode: string, options?: AxiosRequestConfig): AxiosPromise<GLSudsidiary>;

    /**
     * 
     * @param {string} companyCode 
     * @param {GLSudsidiary} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApiInterface
     */
    gLSudsidiaryCompanyCodePatch(companyCode: string, body: GLSudsidiary, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} companyCode 
     * @param {GLSudsidiary} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApiInterface
     */
    gLSudsidiaryCompanyCodePut(companyCode: string, body: GLSudsidiary, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApiInterface
     */
    gLSudsidiaryGet(options?: AxiosRequestConfig): AxiosPromise<PagedGLSudsidiary>;

    /**
     * 
     * @param {GLSudsidiary} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApiInterface
     */
    gLSudsidiaryPost(body: GLSudsidiary, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * GLSudsidiaryApi - object-oriented interface
 * @export
 * @class GLSudsidiaryApi
 * @extends {BaseAPI}
 */
export class GLSudsidiaryApi extends BaseAPI implements GLSudsidiaryApiInterface {
    /**
     * 
     * @param {string} companyCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApi
     */
    public gLSudsidiaryCompanyCodeDelete(companyCode: string, options?: AxiosRequestConfig) {
        return GLSudsidiaryApiFp(this.configuration).gLSudsidiaryCompanyCodeDelete(companyCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApi
     */
    public gLSudsidiaryCompanyCodeGet(companyCode: string, options?: AxiosRequestConfig) {
        return GLSudsidiaryApiFp(this.configuration).gLSudsidiaryCompanyCodeGet(companyCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyCode 
     * @param {GLSudsidiary} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApi
     */
    public gLSudsidiaryCompanyCodePatch(companyCode: string, body: GLSudsidiary, options?: AxiosRequestConfig) {
        return GLSudsidiaryApiFp(this.configuration).gLSudsidiaryCompanyCodePatch(companyCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyCode 
     * @param {GLSudsidiary} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApi
     */
    public gLSudsidiaryCompanyCodePut(companyCode: string, body: GLSudsidiary, options?: AxiosRequestConfig) {
        return GLSudsidiaryApiFp(this.configuration).gLSudsidiaryCompanyCodePut(companyCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApi
     */
    public gLSudsidiaryGet(options?: AxiosRequestConfig) {
        return GLSudsidiaryApiFp(this.configuration).gLSudsidiaryGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {GLSudsidiary} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GLSudsidiaryApi
     */
    public gLSudsidiaryPost(body: GLSudsidiary, options?: AxiosRequestConfig) {
        return GLSudsidiaryApiFp(this.configuration).gLSudsidiaryPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}