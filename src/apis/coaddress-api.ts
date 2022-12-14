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
import { COAddress } from '../models';
// @ts-ignore
import { PagedCOAddress } from '../models';
/**
 * COAddressApi - axios parameter creator
 * @export
 */
export const COAddressApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} deliveryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressDeliveryCodeDelete: async (deliveryCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deliveryCode' is not null or undefined
            assertParamExists('cOAddressDeliveryCodeDelete', 'deliveryCode', deliveryCode)
            const localVarPath = `/COAddress('{DeliveryCode}')`
                .replace(`{${"DeliveryCode"}}`, encodeURIComponent(String(deliveryCode)));
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
         * @param {string} deliveryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressDeliveryCodeGet: async (deliveryCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deliveryCode' is not null or undefined
            assertParamExists('cOAddressDeliveryCodeGet', 'deliveryCode', deliveryCode)
            const localVarPath = `/COAddress('{DeliveryCode}')`
                .replace(`{${"DeliveryCode"}}`, encodeURIComponent(String(deliveryCode)));
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
         * @param {string} deliveryCode 
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressDeliveryCodePatch: async (deliveryCode: string, body: COAddress, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deliveryCode' is not null or undefined
            assertParamExists('cOAddressDeliveryCodePatch', 'deliveryCode', deliveryCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOAddressDeliveryCodePatch', 'body', body)
            const localVarPath = `/COAddress('{DeliveryCode}')`
                .replace(`{${"DeliveryCode"}}`, encodeURIComponent(String(deliveryCode)));
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
         * @param {string} deliveryCode 
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressDeliveryCodePut: async (deliveryCode: string, body: COAddress, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deliveryCode' is not null or undefined
            assertParamExists('cOAddressDeliveryCodePut', 'deliveryCode', deliveryCode)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOAddressDeliveryCodePut', 'body', body)
            const localVarPath = `/COAddress('{DeliveryCode}')`
                .replace(`{${"DeliveryCode"}}`, encodeURIComponent(String(deliveryCode)));
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
        cOAddressGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/COAddress`;
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
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressPost: async (body: COAddress, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cOAddressPost', 'body', body)
            const localVarPath = `/COAddress`;
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
 * COAddressApi - functional programming interface
 * @export
 */
export const COAddressApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = COAddressApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} deliveryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOAddressDeliveryCodeDelete(deliveryCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOAddressDeliveryCodeDelete(deliveryCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} deliveryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOAddressDeliveryCodeGet(deliveryCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<COAddress>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOAddressDeliveryCodeGet(deliveryCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} deliveryCode 
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOAddressDeliveryCodePatch(deliveryCode: string, body: COAddress, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOAddressDeliveryCodePatch(deliveryCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} deliveryCode 
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOAddressDeliveryCodePut(deliveryCode: string, body: COAddress, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOAddressDeliveryCodePut(deliveryCode, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOAddressGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedCOAddress>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOAddressGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cOAddressPost(body: COAddress, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cOAddressPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * COAddressApi - factory interface
 * @export
 */
export const COAddressApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = COAddressApiFp(configuration)
    return {
        /**
         * 
         * @param {string} deliveryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressDeliveryCodeDelete(deliveryCode: string, options?: any): AxiosPromise<void> {
            return localVarFp.cOAddressDeliveryCodeDelete(deliveryCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} deliveryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressDeliveryCodeGet(deliveryCode: string, options?: any): AxiosPromise<COAddress> {
            return localVarFp.cOAddressDeliveryCodeGet(deliveryCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} deliveryCode 
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressDeliveryCodePatch(deliveryCode: string, body: COAddress, options?: any): AxiosPromise<void> {
            return localVarFp.cOAddressDeliveryCodePatch(deliveryCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} deliveryCode 
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressDeliveryCodePut(deliveryCode: string, body: COAddress, options?: any): AxiosPromise<void> {
            return localVarFp.cOAddressDeliveryCodePut(deliveryCode, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressGet(options?: any): AxiosPromise<PagedCOAddress> {
            return localVarFp.cOAddressGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {COAddress} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cOAddressPost(body: COAddress, options?: any): AxiosPromise<void> {
            return localVarFp.cOAddressPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * COAddressApi - interface
 * @export
 * @interface COAddressApi
 */
export interface COAddressApiInterface {
    /**
     * 
     * @param {string} deliveryCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApiInterface
     */
    cOAddressDeliveryCodeDelete(deliveryCode: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} deliveryCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApiInterface
     */
    cOAddressDeliveryCodeGet(deliveryCode: string, options?: AxiosRequestConfig): AxiosPromise<COAddress>;

    /**
     * 
     * @param {string} deliveryCode 
     * @param {COAddress} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApiInterface
     */
    cOAddressDeliveryCodePatch(deliveryCode: string, body: COAddress, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} deliveryCode 
     * @param {COAddress} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApiInterface
     */
    cOAddressDeliveryCodePut(deliveryCode: string, body: COAddress, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApiInterface
     */
    cOAddressGet(options?: AxiosRequestConfig): AxiosPromise<PagedCOAddress>;

    /**
     * 
     * @param {COAddress} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApiInterface
     */
    cOAddressPost(body: COAddress, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * COAddressApi - object-oriented interface
 * @export
 * @class COAddressApi
 * @extends {BaseAPI}
 */
export class COAddressApi extends BaseAPI implements COAddressApiInterface {
    /**
     * 
     * @param {string} deliveryCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApi
     */
    public cOAddressDeliveryCodeDelete(deliveryCode: string, options?: AxiosRequestConfig) {
        return COAddressApiFp(this.configuration).cOAddressDeliveryCodeDelete(deliveryCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} deliveryCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApi
     */
    public cOAddressDeliveryCodeGet(deliveryCode: string, options?: AxiosRequestConfig) {
        return COAddressApiFp(this.configuration).cOAddressDeliveryCodeGet(deliveryCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} deliveryCode 
     * @param {COAddress} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApi
     */
    public cOAddressDeliveryCodePatch(deliveryCode: string, body: COAddress, options?: AxiosRequestConfig) {
        return COAddressApiFp(this.configuration).cOAddressDeliveryCodePatch(deliveryCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} deliveryCode 
     * @param {COAddress} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApi
     */
    public cOAddressDeliveryCodePut(deliveryCode: string, body: COAddress, options?: AxiosRequestConfig) {
        return COAddressApiFp(this.configuration).cOAddressDeliveryCodePut(deliveryCode, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApi
     */
    public cOAddressGet(options?: AxiosRequestConfig) {
        return COAddressApiFp(this.configuration).cOAddressGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {COAddress} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof COAddressApi
     */
    public cOAddressPost(body: COAddress, options?: AxiosRequestConfig) {
        return COAddressApiFp(this.configuration).cOAddressPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
