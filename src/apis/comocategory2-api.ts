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
import { COMOCategory2 } from '../models';
// @ts-ignore
import { PagedCOMOCategory2 } from '../models';
/**
 * COMOCategory2Api - axios parameter creator
 * @export
 */
export const COMOCategory2ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2CodeDelete: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('cOMOCategory2CodeDelete', 'code', code)
            const localVarPath = `/COMOCategory2('{Code}')`
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
        cOMOCategory2CodeGet: async (code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('cOMOCategory2CodeGet', 'code', code)
            const localVarPath = `/COMOCategory2('{Code}')`
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
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2CodePatch: async (code: string, body: COMOCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('cOMOCategory2CodePatch', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOMOCategory2CodePatch', 'body', body)
            const localVarPath = `/COMOCategory2('{Code}')`
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
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2CodePut: async (code: string, body: COMOCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('cOMOCategory2CodePut', 'code', code)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOMOCategory2CodePut', 'body', body)
            const localVarPath = `/COMOCategory2('{Code}')`
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
        cOMOCategory2Get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/COMOCategory2`;
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
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2Post: async (body: COMOCategory2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOMOCategory2Post', 'body', body)
            const localVarPath = `/COMOCategory2`;
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
 * COMOCategory2Api - functional programming interface
 * @export
 */
export const COMOCategory2ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = COMOCategory2ApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMOCategory2CodeDelete(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMOCategory2CodeDelete(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMOCategory2CodeGet(code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<COMOCategory2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMOCategory2CodeGet(code, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMOCategory2CodePatch(code: string, body: COMOCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMOCategory2CodePatch(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} code 
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMOCategory2CodePut(code: string, body: COMOCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMOCategory2CodePut(code, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMOCategory2Get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedCOMOCategory2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMOCategory2Get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOMOCategory2Post(body: COMOCategory2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOMOCategory2Post(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * COMOCategory2Api - factory interface
 * @export
 */
export const COMOCategory2ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = COMOCategory2ApiFp(configuration)
    return {
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2CodeDelete(code: string, options?: any): AxiosPromise<void> {
            return localVarFp.cOMOCategory2CodeDelete(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2CodeGet(code: string, options?: any): AxiosPromise<COMOCategory2> {
            return localVarFp.cOMOCategory2CodeGet(code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2CodePatch(code: string, body: COMOCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.cOMOCategory2CodePatch(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} code 
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2CodePut(code: string, body: COMOCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.cOMOCategory2CodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2Get(options?: any): AxiosPromise<PagedCOMOCategory2> {
            return localVarFp.cOMOCategory2Get(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {COMOCategory2} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOMOCategory2Post(body: COMOCategory2, options?: any): AxiosPromise<void> {
            return localVarFp.cOMOCategory2Post(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * COMOCategory2Api - interface
 * @export
 * @interface COMOCategory2Api
 */
export interface COMOCategory2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2ApiInterface
     */
    cOMOCategory2CodeDelete(code: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2ApiInterface
     */
    cOMOCategory2CodeGet(code: string, options?: AxiosRequestConfig): AxiosPromise<COMOCategory2>;

    /**
     * 
     * @param {string} code 
     * @param {COMOCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2ApiInterface
     */
    cOMOCategory2CodePatch(code: string, body: COMOCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} code 
     * @param {COMOCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2ApiInterface
     */
    cOMOCategory2CodePut(code: string, body: COMOCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2ApiInterface
     */
    cOMOCategory2Get(options?: AxiosRequestConfig): AxiosPromise<PagedCOMOCategory2>;

    /**
     * 
     * @param {COMOCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2ApiInterface
     */
    cOMOCategory2Post(body: COMOCategory2, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * COMOCategory2Api - object-oriented interface
 * @export
 * @class COMOCategory2Api
 * @extends {BaseAPI}
 */
export class COMOCategory2Api extends BaseAPI implements COMOCategory2ApiInterface {
    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2Api
     */
    public cOMOCategory2CodeDelete(code: string, options?: AxiosRequestConfig) {
        return COMOCategory2ApiFp(this.configuration).cOMOCategory2CodeDelete(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2Api
     */
    public cOMOCategory2CodeGet(code: string, options?: AxiosRequestConfig) {
        return COMOCategory2ApiFp(this.configuration).cOMOCategory2CodeGet(code, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {COMOCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2Api
     */
    public cOMOCategory2CodePatch(code: string, body: COMOCategory2, options?: AxiosRequestConfig) {
        return COMOCategory2ApiFp(this.configuration).cOMOCategory2CodePatch(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} code 
     * @param {COMOCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2Api
     */
    public cOMOCategory2CodePut(code: string, body: COMOCategory2, options?: AxiosRequestConfig) {
        return COMOCategory2ApiFp(this.configuration).cOMOCategory2CodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2Api
     */
    public cOMOCategory2Get(options?: AxiosRequestConfig) {
        return COMOCategory2ApiFp(this.configuration).cOMOCategory2Get(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {COMOCategory2} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COMOCategory2Api
     */
    public cOMOCategory2Post(body: COMOCategory2, options?: AxiosRequestConfig) {
        return COMOCategory2ApiFp(this.configuration).cOMOCategory2Post(body, options).then((request) => request(this.axios, this.basePath));
    }
}