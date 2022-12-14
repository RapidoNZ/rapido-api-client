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
import { ICManufacture } from '../models';
// @ts-ignore
import { PagedICManufacture } from '../models';
/**
 * ICManufactureApi - axios parameter creator
 * @export
 */
export const ICManufactureApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufactureGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ICManufacture`;
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
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufacturePost: async (body: ICManufacture, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCManufacturePost', 'body', body)
            const localVarPath = `/ICManufacture`;
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
        iCManufactureTransactionIDDelete: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCManufactureTransactionIDDelete', 'transactionID', transactionID)
            const localVarPath = `/ICManufacture('{TransactionID}')`
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
        iCManufactureTransactionIDGet: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCManufactureTransactionIDGet', 'transactionID', transactionID)
            const localVarPath = `/ICManufacture('{TransactionID}')`
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
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufactureTransactionIDPatch: async (transactionID: number, body: ICManufacture, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCManufactureTransactionIDPatch', 'transactionID', transactionID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCManufactureTransactionIDPatch', 'body', body)
            const localVarPath = `/ICManufacture('{TransactionID}')`
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
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufactureTransactionIDPut: async (transactionID: number, body: ICManufacture, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCManufactureTransactionIDPut', 'transactionID', transactionID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCManufactureTransactionIDPut', 'body', body)
            const localVarPath = `/ICManufacture('{TransactionID}')`
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
 * ICManufactureApi - functional programming interface
 * @export
 */
export const ICManufactureApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ICManufactureApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCManufactureGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedICManufacture>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCManufactureGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCManufacturePost(body: ICManufacture, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCManufacturePost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCManufactureTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCManufactureTransactionIDDelete(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCManufactureTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ICManufacture>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCManufactureTransactionIDGet(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCManufactureTransactionIDPatch(transactionID: number, body: ICManufacture, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCManufactureTransactionIDPatch(transactionID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCManufactureTransactionIDPut(transactionID: number, body: ICManufacture, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCManufactureTransactionIDPut(transactionID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ICManufactureApi - factory interface
 * @export
 */
export const ICManufactureApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ICManufactureApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufactureGet(options?: any): AxiosPromise<PagedICManufacture> {
            return localVarFp.iCManufactureGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufacturePost(body: ICManufacture, options?: any): AxiosPromise<void> {
            return localVarFp.iCManufacturePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufactureTransactionIDDelete(transactionID: number, options?: any): AxiosPromise<void> {
            return localVarFp.iCManufactureTransactionIDDelete(transactionID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufactureTransactionIDGet(transactionID: number, options?: any): AxiosPromise<ICManufacture> {
            return localVarFp.iCManufactureTransactionIDGet(transactionID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufactureTransactionIDPatch(transactionID: number, body: ICManufacture, options?: any): AxiosPromise<void> {
            return localVarFp.iCManufactureTransactionIDPatch(transactionID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {ICManufacture} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCManufactureTransactionIDPut(transactionID: number, body: ICManufacture, options?: any): AxiosPromise<void> {
            return localVarFp.iCManufactureTransactionIDPut(transactionID, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ICManufactureApi - interface
 * @export
 * @interface ICManufactureApi
 */
export interface ICManufactureApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApiInterface
     */
    iCManufactureGet(options?: AxiosRequestConfig): AxiosPromise<PagedICManufacture>;

    /**
     * 
     * @param {ICManufacture} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApiInterface
     */
    iCManufacturePost(body: ICManufacture, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApiInterface
     */
    iCManufactureTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApiInterface
     */
    iCManufactureTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<ICManufacture>;

    /**
     * 
     * @param {number} transactionID 
     * @param {ICManufacture} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApiInterface
     */
    iCManufactureTransactionIDPatch(transactionID: number, body: ICManufacture, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {ICManufacture} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApiInterface
     */
    iCManufactureTransactionIDPut(transactionID: number, body: ICManufacture, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ICManufactureApi - object-oriented interface
 * @export
 * @class ICManufactureApi
 * @extends {BaseAPI}
 */
export class ICManufactureApi extends BaseAPI implements ICManufactureApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApi
     */
    public iCManufactureGet(options?: AxiosRequestConfig) {
        return ICManufactureApiFp(this.configuration).iCManufactureGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ICManufacture} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApi
     */
    public iCManufacturePost(body: ICManufacture, options?: AxiosRequestConfig) {
        return ICManufactureApiFp(this.configuration).iCManufacturePost(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApi
     */
    public iCManufactureTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig) {
        return ICManufactureApiFp(this.configuration).iCManufactureTransactionIDDelete(transactionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApi
     */
    public iCManufactureTransactionIDGet(transactionID: number, options?: AxiosRequestConfig) {
        return ICManufactureApiFp(this.configuration).iCManufactureTransactionIDGet(transactionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {ICManufacture} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApi
     */
    public iCManufactureTransactionIDPatch(transactionID: number, body: ICManufacture, options?: AxiosRequestConfig) {
        return ICManufactureApiFp(this.configuration).iCManufactureTransactionIDPatch(transactionID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {ICManufacture} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICManufactureApi
     */
    public iCManufactureTransactionIDPut(transactionID: number, body: ICManufacture, options?: AxiosRequestConfig) {
        return ICManufactureApiFp(this.configuration).iCManufactureTransactionIDPut(transactionID, body, options).then((request) => request(this.axios, this.basePath));
    }
}
