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
import { JCJobGroup } from '../models';
// @ts-ignore
import { PagedJCJobGroup } from '../models';
/**
 * JCJobGroupApi - axios parameter creator
 * @export
 */
export const JCJobGroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/JCJobGroup`;
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
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupJobGroupCodeDelete: async (jobGroupCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobGroupCode' is not null or undefined
            assertParamExists('jCJobGroupJobGroupCodeDelete', 'jobGroupCode', jobGroupCode)
            const localVarPath = `/JCJobGroup('{JobGroupCode}')`
                .replace(`{${"JobGroupCode"}}`, encodeURIComponent(String(jobGroupCode)));
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
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupJobGroupCodeGet: async (jobGroupCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobGroupCode' is not null or undefined
            assertParamExists('jCJobGroupJobGroupCodeGet', 'jobGroupCode', jobGroupCode)
            const localVarPath = `/JCJobGroup('{JobGroupCode}')`
                .replace(`{${"JobGroupCode"}}`, encodeURIComponent(String(jobGroupCode)));
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
         * @param {string} jobGroupCode 
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupJobGroupCodePatch: async (jobGroupCode: string, body: JCJobGroup, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobGroupCode' is not null or undefined
            assertParamExists('jCJobGroupJobGroupCodePatch', 'jobGroupCode', jobGroupCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('jCJobGroupJobGroupCodePatch', 'body', body)
            const localVarPath = `/JCJobGroup('{JobGroupCode}')`
                .replace(`{${"JobGroupCode"}}`, encodeURIComponent(String(jobGroupCode)));
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
         * @param {string} jobGroupCode 
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupJobGroupCodePut: async (jobGroupCode: string, body: JCJobGroup, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobGroupCode' is not null or undefined
            assertParamExists('jCJobGroupJobGroupCodePut', 'jobGroupCode', jobGroupCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('jCJobGroupJobGroupCodePut', 'body', body)
            const localVarPath = `/JCJobGroup('{JobGroupCode}')`
                .replace(`{${"JobGroupCode"}}`, encodeURIComponent(String(jobGroupCode)));
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
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupPost: async (body: JCJobGroup, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('jCJobGroupPost', 'body', body)
            const localVarPath = `/JCJobGroup`;
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
 * JCJobGroupApi - functional programming interface
 * @export
 */
export const JCJobGroupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JCJobGroupApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCJobGroupGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedJCJobGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCJobGroupGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCJobGroupJobGroupCodeDelete(jobGroupCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCJobGroupJobGroupCodeDelete(jobGroupCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCJobGroupJobGroupCodeGet(jobGroupCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JCJobGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCJobGroupJobGroupCodeGet(jobGroupCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCJobGroupJobGroupCodePatch(jobGroupCode: string, body: JCJobGroup, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCJobGroupJobGroupCodePatch(jobGroupCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCJobGroupJobGroupCodePut(jobGroupCode: string, body: JCJobGroup, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCJobGroupJobGroupCodePut(jobGroupCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jCJobGroupPost(body: JCJobGroup, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jCJobGroupPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JCJobGroupApi - factory interface
 * @export
 */
export const JCJobGroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JCJobGroupApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupGet(options?: any): AxiosPromise<PagedJCJobGroup> {
            return localVarFp.jCJobGroupGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupJobGroupCodeDelete(jobGroupCode: string, options?: any): AxiosPromise<void> {
            return localVarFp.jCJobGroupJobGroupCodeDelete(jobGroupCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupJobGroupCodeGet(jobGroupCode: string, options?: any): AxiosPromise<JCJobGroup> {
            return localVarFp.jCJobGroupJobGroupCodeGet(jobGroupCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupJobGroupCodePatch(jobGroupCode: string, body: JCJobGroup, options?: any): AxiosPromise<void> {
            return localVarFp.jCJobGroupJobGroupCodePatch(jobGroupCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} jobGroupCode 
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupJobGroupCodePut(jobGroupCode: string, body: JCJobGroup, options?: any): AxiosPromise<void> {
            return localVarFp.jCJobGroupJobGroupCodePut(jobGroupCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {JCJobGroup} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jCJobGroupPost(body: JCJobGroup, options?: any): AxiosPromise<void> {
            return localVarFp.jCJobGroupPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * JCJobGroupApi - interface
 * @export
 * @interface JCJobGroupApi
 */
export interface JCJobGroupApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApiInterface
     */
    jCJobGroupGet(options?: AxiosRequestConfig): AxiosPromise<PagedJCJobGroup>;

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApiInterface
     */
    jCJobGroupJobGroupCodeDelete(jobGroupCode: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApiInterface
     */
    jCJobGroupJobGroupCodeGet(jobGroupCode: string, options?: AxiosRequestConfig): AxiosPromise<JCJobGroup>;

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {JCJobGroup} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApiInterface
     */
    jCJobGroupJobGroupCodePatch(jobGroupCode: string, body: JCJobGroup, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {JCJobGroup} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApiInterface
     */
    jCJobGroupJobGroupCodePut(jobGroupCode: string, body: JCJobGroup, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {JCJobGroup} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApiInterface
     */
    jCJobGroupPost(body: JCJobGroup, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * JCJobGroupApi - object-oriented interface
 * @export
 * @class JCJobGroupApi
 * @extends {BaseAPI}
 */
export class JCJobGroupApi extends BaseAPI implements JCJobGroupApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApi
     */
    public jCJobGroupGet(options?: AxiosRequestConfig) {
        return JCJobGroupApiFp(this.configuration).jCJobGroupGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApi
     */
    public jCJobGroupJobGroupCodeDelete(jobGroupCode: string, options?: AxiosRequestConfig) {
        return JCJobGroupApiFp(this.configuration).jCJobGroupJobGroupCodeDelete(jobGroupCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApi
     */
    public jCJobGroupJobGroupCodeGet(jobGroupCode: string, options?: AxiosRequestConfig) {
        return JCJobGroupApiFp(this.configuration).jCJobGroupJobGroupCodeGet(jobGroupCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {JCJobGroup} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApi
     */
    public jCJobGroupJobGroupCodePatch(jobGroupCode: string, body: JCJobGroup, options?: AxiosRequestConfig) {
        return JCJobGroupApiFp(this.configuration).jCJobGroupJobGroupCodePatch(jobGroupCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} jobGroupCode 
     * @param {JCJobGroup} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApi
     */
    public jCJobGroupJobGroupCodePut(jobGroupCode: string, body: JCJobGroup, options?: AxiosRequestConfig) {
        return JCJobGroupApiFp(this.configuration).jCJobGroupJobGroupCodePut(jobGroupCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {JCJobGroup} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JCJobGroupApi
     */
    public jCJobGroupPost(body: JCJobGroup, options?: AxiosRequestConfig) {
        return JCJobGroupApiFp(this.configuration).jCJobGroupPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}