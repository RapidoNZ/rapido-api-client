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
import { ICTransaction } from '../models';
// @ts-ignore
import { PagedICTransaction } from '../models';
/**
 * ICTransactionApi - axios parameter creator
 * @export
 */
export const ICTransactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ICTransaction`;
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
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionPost: async (body: ICTransaction, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCTransactionPost', 'body', body)
            const localVarPath = `/ICTransaction`;
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
        iCTransactionTransactionIDDelete: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCTransactionTransactionIDDelete', 'transactionID', transactionID)
            const localVarPath = `/ICTransaction('{TransactionID}')`
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
         * ICTransaction/DuplicateContra is an ODATA function - use GET to call
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDDuplicateContraGet: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCTransactionTransactionIDDuplicateContraGet', 'transactionID', transactionID)
            const localVarPath = `/ICTransaction('{TransactionID}')/DuplicateContra`
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
         * ICTransaction/Duplicate is an ODATA function - use GET to call
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDDuplicateGet: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCTransactionTransactionIDDuplicateGet', 'transactionID', transactionID)
            const localVarPath = `/ICTransaction('{TransactionID}')/Duplicate`
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDGet: async (transactionID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCTransactionTransactionIDGet', 'transactionID', transactionID)
            const localVarPath = `/ICTransaction('{TransactionID}')`
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
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDPatch: async (transactionID: number, body: ICTransaction, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCTransactionTransactionIDPatch', 'transactionID', transactionID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCTransactionTransactionIDPatch', 'body', body)
            const localVarPath = `/ICTransaction('{TransactionID}')`
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
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDPut: async (transactionID: number, body: ICTransaction, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionID' is not null or undefined
            assertParamExists('iCTransactionTransactionIDPut', 'transactionID', transactionID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCTransactionTransactionIDPut', 'body', body)
            const localVarPath = `/ICTransaction('{TransactionID}')`
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
 * ICTransactionApi - functional programming interface
 * @export
 */
export const ICTransactionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ICTransactionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCTransactionGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedICTransaction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCTransactionGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCTransactionPost(body: ICTransaction, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCTransactionPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCTransactionTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCTransactionTransactionIDDelete(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ICTransaction/DuplicateContra is an ODATA function - use GET to call
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCTransactionTransactionIDDuplicateContraGet(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCTransactionTransactionIDDuplicateContraGet(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ICTransaction/Duplicate is an ODATA function - use GET to call
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCTransactionTransactionIDDuplicateGet(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCTransactionTransactionIDDuplicateGet(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCTransactionTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ICTransaction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCTransactionTransactionIDGet(transactionID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCTransactionTransactionIDPatch(transactionID: number, body: ICTransaction, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCTransactionTransactionIDPatch(transactionID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCTransactionTransactionIDPut(transactionID: number, body: ICTransaction, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCTransactionTransactionIDPut(transactionID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ICTransactionApi - factory interface
 * @export
 */
export const ICTransactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ICTransactionApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionGet(options?: any): AxiosPromise<PagedICTransaction> {
            return localVarFp.iCTransactionGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionPost(body: ICTransaction, options?: any): AxiosPromise<void> {
            return localVarFp.iCTransactionPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDDelete(transactionID: number, options?: any): AxiosPromise<void> {
            return localVarFp.iCTransactionTransactionIDDelete(transactionID, options).then((request) => request(axios, basePath));
        },
        /**
         * ICTransaction/DuplicateContra is an ODATA function - use GET to call
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDDuplicateContraGet(transactionID: number, options?: any): AxiosPromise<void> {
            return localVarFp.iCTransactionTransactionIDDuplicateContraGet(transactionID, options).then((request) => request(axios, basePath));
        },
        /**
         * ICTransaction/Duplicate is an ODATA function - use GET to call
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDDuplicateGet(transactionID: number, options?: any): AxiosPromise<void> {
            return localVarFp.iCTransactionTransactionIDDuplicateGet(transactionID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDGet(transactionID: number, options?: any): AxiosPromise<ICTransaction> {
            return localVarFp.iCTransactionTransactionIDGet(transactionID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDPatch(transactionID: number, body: ICTransaction, options?: any): AxiosPromise<void> {
            return localVarFp.iCTransactionTransactionIDPatch(transactionID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} transactionID 
         * @param {ICTransaction} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCTransactionTransactionIDPut(transactionID: number, body: ICTransaction, options?: any): AxiosPromise<void> {
            return localVarFp.iCTransactionTransactionIDPut(transactionID, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ICTransactionApi - interface
 * @export
 * @interface ICTransactionApi
 */
export interface ICTransactionApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApiInterface
     */
    iCTransactionGet(options?: AxiosRequestConfig): AxiosPromise<PagedICTransaction>;

    /**
     * 
     * @param {ICTransaction} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApiInterface
     */
    iCTransactionPost(body: ICTransaction, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApiInterface
     */
    iCTransactionTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * ICTransaction/DuplicateContra is an ODATA function - use GET to call
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApiInterface
     */
    iCTransactionTransactionIDDuplicateContraGet(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * ICTransaction/Duplicate is an ODATA function - use GET to call
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApiInterface
     */
    iCTransactionTransactionIDDuplicateGet(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApiInterface
     */
    iCTransactionTransactionIDGet(transactionID: number, options?: AxiosRequestConfig): AxiosPromise<ICTransaction>;

    /**
     * 
     * @param {number} transactionID 
     * @param {ICTransaction} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApiInterface
     */
    iCTransactionTransactionIDPatch(transactionID: number, body: ICTransaction, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} transactionID 
     * @param {ICTransaction} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApiInterface
     */
    iCTransactionTransactionIDPut(transactionID: number, body: ICTransaction, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ICTransactionApi - object-oriented interface
 * @export
 * @class ICTransactionApi
 * @extends {BaseAPI}
 */
export class ICTransactionApi extends BaseAPI implements ICTransactionApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApi
     */
    public iCTransactionGet(options?: AxiosRequestConfig) {
        return ICTransactionApiFp(this.configuration).iCTransactionGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ICTransaction} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApi
     */
    public iCTransactionPost(body: ICTransaction, options?: AxiosRequestConfig) {
        return ICTransactionApiFp(this.configuration).iCTransactionPost(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApi
     */
    public iCTransactionTransactionIDDelete(transactionID: number, options?: AxiosRequestConfig) {
        return ICTransactionApiFp(this.configuration).iCTransactionTransactionIDDelete(transactionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ICTransaction/DuplicateContra is an ODATA function - use GET to call
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApi
     */
    public iCTransactionTransactionIDDuplicateContraGet(transactionID: number, options?: AxiosRequestConfig) {
        return ICTransactionApiFp(this.configuration).iCTransactionTransactionIDDuplicateContraGet(transactionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ICTransaction/Duplicate is an ODATA function - use GET to call
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApi
     */
    public iCTransactionTransactionIDDuplicateGet(transactionID: number, options?: AxiosRequestConfig) {
        return ICTransactionApiFp(this.configuration).iCTransactionTransactionIDDuplicateGet(transactionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApi
     */
    public iCTransactionTransactionIDGet(transactionID: number, options?: AxiosRequestConfig) {
        return ICTransactionApiFp(this.configuration).iCTransactionTransactionIDGet(transactionID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {ICTransaction} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApi
     */
    public iCTransactionTransactionIDPatch(transactionID: number, body: ICTransaction, options?: AxiosRequestConfig) {
        return ICTransactionApiFp(this.configuration).iCTransactionTransactionIDPatch(transactionID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} transactionID 
     * @param {ICTransaction} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICTransactionApi
     */
    public iCTransactionTransactionIDPut(transactionID: number, body: ICTransaction, options?: AxiosRequestConfig) {
        return ICTransactionApiFp(this.configuration).iCTransactionTransactionIDPut(transactionID, body, options).then((request) => request(this.axios, this.basePath));
    }
}