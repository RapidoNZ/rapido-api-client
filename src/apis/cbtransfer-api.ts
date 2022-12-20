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
import { CBTransfer } from '../models';
// @ts-ignore
import { PagedCBTransfer } from '../models';
/**
 * CBTransferApi - axios parameter creator
 * @export
 */
export const CBTransferApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/CBTransfer`;
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
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferPost: async (body: CBTransfer, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cBTransferPost', 'body', body)
            const localVarPath = `/CBTransfer`;
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
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferTransactionIDDelete: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('cBTransferTransactionIDDelete', 'transactionID', transactionID)
            const localVarPath = `/CBTransfer('{TransactionID}')`
                .replace(`{${"TransactionID"}}`, encodeURIComponent(String(transactionID)));
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
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferTransactionIDGet: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('cBTransferTransactionIDGet', 'transactionID', transactionID)
            const localVarPath = `/CBTransfer('{TransactionID}')`
                .replace(`{${"TransactionID"}}`, encodeURIComponent(String(transactionID)));
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
         * @param {number} transactionID 
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferTransactionIDPatch: async (transactionID: number, body: CBTransfer, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('cBTransferTransactionIDPatch', 'transactionID', transactionID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cBTransferTransactionIDPatch', 'body', body)
            const localVarPath = `/CBTransfer('{TransactionID}')`
                .replace(`{${"TransactionID"}}`, encodeURIComponent(String(transactionID)));
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
         * @param {number} transactionID 
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferTransactionIDPut: async (transactionID: number, body: CBTransfer, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('cBTransferTransactionIDPut', 'transactionID', transactionID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('cBTransferTransactionIDPut', 'body', body)
            const localVarPath = `/CBTransfer('{TransactionID}')`
                .replace(`{${"TransactionID"}}`, encodeURIComponent(String(transactionID)));
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
    }
};

/**
 * CBTransferApi - functional programming interface
 * @export
 */
export const CBTransferApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CBTransferApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cBTransferGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedCBTransfer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cBTransferGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cBTransferPost(body: CBTransfer, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cBTransferPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cBTransferTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cBTransferTransactionIDDelete(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cBTransferTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CBTransfer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cBTransferTransactionIDGet(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cBTransferTransactionIDPatch(transactionID: number, body: CBTransfer, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cBTransferTransactionIDPatch(transactionID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cBTransferTransactionIDPut(transactionID: number, body: CBTransfer, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cBTransferTransactionIDPut(transactionID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CBTransferApi - factory interface
 * @export
 */
export const CBTransferApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CBTransferApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferGet(options?: any): AxiosPromise<PagedCBTransfer> {
            return localVarFp.cBTransferGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferPost(body: CBTransfer, options?: any): AxiosPromise<void> {
            return localVarFp.cBTransferPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferTransactionIDDelete(transactionID: number, options?: any): AxiosPromise<void> {
            return localVarFp.cBTransferTransactionIDDelete(transactionID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferTransactionIDGet(transactionID: number, options?: any): AxiosPromise<CBTransfer> {
            return localVarFp.cBTransferTransactionIDGet(transactionID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferTransactionIDPatch(transactionID: number, body: CBTransfer, options?: any): AxiosPromise<void> {
            return localVarFp.cBTransferTransactionIDPatch(transactionID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {CBTransfer} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBTransferTransactionIDPut(transactionID: number, body: CBTransfer, options?: any): AxiosPromise<void> {
            return localVarFp.cBTransferTransactionIDPut(transactionID, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CBTransferApi - interface
 * @export
 * @interface CBTransferApi
 */
export interface CBTransferApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApiInterface
     */
    cBTransferGet(options?: AxiosRequestConfig): AxiosPromise<PagedCBTransfer>;

    /**
     * 
     * @param {CBTransfer} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApiInterface
     */
    cBTransferPost(body: CBTransfer, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApiInterface
     */
    cBTransferTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApiInterface
     */
    cBTransferTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<CBTransfer>;

    /**
     * 
     * @param {number} transactionID 
     * @param {CBTransfer} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApiInterface
     */
    cBTransferTransactionIDPatch(transactionID: number, body: CBTransfer, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {CBTransfer} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApiInterface
     */
    cBTransferTransactionIDPut(transactionID: number, body: CBTransfer, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * CBTransferApi - object-oriented interface
 * @export
 * @class CBTransferApi
 * @extends {BaseAPI}
 */
export class CBTransferApi extends BaseAPI implements CBTransferApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApi
     */
    public cBTransferGet(options?: AxiosRequestConfig) {
        return CBTransferApiFp(this.configuration).cBTransferGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CBTransfer} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApi
     */
    public cBTransferPost(body: CBTransfer, options?: AxiosRequestConfig) {
        return CBTransferApiFp(this.configuration).cBTransferPost(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApi
     */
    public cBTransferTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig) {
        return CBTransferApiFp(this.configuration).cBTransferTransactionIDDelete(transactionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApi
     */
    public cBTransferTransactionIDGet(transactionID: number, options?: AxiosRequestConfig) {
        return CBTransferApiFp(this.configuration).cBTransferTransactionIDGet(transactionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {CBTransfer} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApi
     */
    public cBTransferTransactionIDPatch(transactionID: number, body: CBTransfer, options?: AxiosRequestConfig) {
        return CBTransferApiFp(this.configuration).cBTransferTransactionIDPatch(transactionID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {CBTransfer} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBTransferApi
     */
    public cBTransferTransactionIDPut(transactionID: number, body: CBTransfer, options?: AxiosRequestConfig) {
        return CBTransferApiFp(this.configuration).cBTransferTransactionIDPut(transactionID, body, options).then((request) => request(this.axios, this.basePath));
    }
}
