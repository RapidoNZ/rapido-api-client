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
import { ICStockTake } from '../models';
// @ts-ignore
import { PagedICStockTake } from '../models';
/**
 * ICStockTakeApi - axios parameter creator
 * @export
 */
export const ICStockTakeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDDelete: async (documentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('iCStockTakeDocumentIDDelete', 'documentID', documentID)
            const localVarPath = `/ICStockTake('{DocumentID}')`
                .replace(`{${"DocumentID"}}`, encodeURIComponent(String(documentID)));
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
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDGet: async (documentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('iCStockTakeDocumentIDGet', 'documentID', documentID)
            const localVarPath = `/ICStockTake('{DocumentID}')`
                .replace(`{${"DocumentID"}}`, encodeURIComponent(String(documentID)));
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
         * @param {number} documentID 
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDPatch: async (documentID: number, body: ICStockTake, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('iCStockTakeDocumentIDPatch', 'documentID', documentID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCStockTakeDocumentIDPatch', 'body', body)
            const localVarPath = `/ICStockTake('{DocumentID}')`
                .replace(`{${"DocumentID"}}`, encodeURIComponent(String(documentID)));
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
         * @param {number} documentID 
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDPut: async (documentID: number, body: ICStockTake, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('iCStockTakeDocumentIDPut', 'documentID', documentID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCStockTakeDocumentIDPut', 'body', body)
            const localVarPath = `/ICStockTake('{DocumentID}')`
                .replace(`{${"DocumentID"}}`, encodeURIComponent(String(documentID)));
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
         * ICStockTake/ReloadQuantities is an ODATA action - use POST to call
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDReloadQuantitiesPost: async (documentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('iCStockTakeDocumentIDReloadQuantitiesPost', 'documentID', documentID)
            const localVarPath = `/ICStockTake('{DocumentID}')/ReloadQuantities`
                .replace(`{${"DocumentID"}}`, encodeURIComponent(String(documentID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ICStockTake`;
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
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakePost: async (body: ICStockTake, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCStockTakePost', 'body', body)
            const localVarPath = `/ICStockTake`;
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
 * ICStockTakeApi - functional programming interface
 * @export
 */
export const ICStockTakeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ICStockTakeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeDocumentIDDelete(documentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeDocumentIDDelete(documentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeDocumentIDGet(documentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ICStockTake>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeDocumentIDGet(documentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} documentID 
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeDocumentIDPatch(documentID: number, body: ICStockTake, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeDocumentIDPatch(documentID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} documentID 
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeDocumentIDPut(documentID: number, body: ICStockTake, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeDocumentIDPut(documentID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ICStockTake/ReloadQuantities is an ODATA action - use POST to call
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeDocumentIDReloadQuantitiesPost(documentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeDocumentIDReloadQuantitiesPost(documentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedICStockTake>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakePost(body: ICStockTake, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakePost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ICStockTakeApi - factory interface
 * @export
 */
export const ICStockTakeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ICStockTakeApiFp(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDDelete(documentID: number, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeDocumentIDDelete(documentID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDGet(documentID: number, options?: any): AxiosPromise<ICStockTake> {
            return localVarFp.iCStockTakeDocumentIDGet(documentID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} documentID 
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDPatch(documentID: number, body: ICStockTake, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeDocumentIDPatch(documentID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} documentID 
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDPut(documentID: number, body: ICStockTake, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeDocumentIDPut(documentID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * ICStockTake/ReloadQuantities is an ODATA action - use POST to call
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeDocumentIDReloadQuantitiesPost(documentID: number, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeDocumentIDReloadQuantitiesPost(documentID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeGet(options?: any): AxiosPromise<PagedICStockTake> {
            return localVarFp.iCStockTakeGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ICStockTake} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakePost(body: ICStockTake, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ICStockTakeApi - interface
 * @export
 * @interface ICStockTakeApi
 */
export interface ICStockTakeApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApiInterface
     */
    iCStockTakeDocumentIDDelete(documentID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApiInterface
     */
    iCStockTakeDocumentIDGet(documentID: number, options?: AxiosRequestConfig): AxiosPromise<ICStockTake>;

    /**
     * 
     * @param {number} documentID 
     * @param {ICStockTake} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApiInterface
     */
    iCStockTakeDocumentIDPatch(documentID: number, body: ICStockTake, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} documentID 
     * @param {ICStockTake} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApiInterface
     */
    iCStockTakeDocumentIDPut(documentID: number, body: ICStockTake, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * ICStockTake/ReloadQuantities is an ODATA action - use POST to call
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApiInterface
     */
    iCStockTakeDocumentIDReloadQuantitiesPost(documentID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApiInterface
     */
    iCStockTakeGet(options?: AxiosRequestConfig): AxiosPromise<PagedICStockTake>;

    /**
     * 
     * @param {ICStockTake} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApiInterface
     */
    iCStockTakePost(body: ICStockTake, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ICStockTakeApi - object-oriented interface
 * @export
 * @class ICStockTakeApi
 * @extends {BaseAPI}
 */
export class ICStockTakeApi extends BaseAPI implements ICStockTakeApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApi
     */
    public iCStockTakeDocumentIDDelete(documentID: number, options?: AxiosRequestConfig) {
        return ICStockTakeApiFp(this.configuration).iCStockTakeDocumentIDDelete(documentID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApi
     */
    public iCStockTakeDocumentIDGet(documentID: number, options?: AxiosRequestConfig) {
        return ICStockTakeApiFp(this.configuration).iCStockTakeDocumentIDGet(documentID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} documentID 
     * @param {ICStockTake} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApi
     */
    public iCStockTakeDocumentIDPatch(documentID: number, body: ICStockTake, options?: AxiosRequestConfig) {
        return ICStockTakeApiFp(this.configuration).iCStockTakeDocumentIDPatch(documentID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} documentID 
     * @param {ICStockTake} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApi
     */
    public iCStockTakeDocumentIDPut(documentID: number, body: ICStockTake, options?: AxiosRequestConfig) {
        return ICStockTakeApiFp(this.configuration).iCStockTakeDocumentIDPut(documentID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ICStockTake/ReloadQuantities is an ODATA action - use POST to call
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApi
     */
    public iCStockTakeDocumentIDReloadQuantitiesPost(documentID: number, options?: AxiosRequestConfig) {
        return ICStockTakeApiFp(this.configuration).iCStockTakeDocumentIDReloadQuantitiesPost(documentID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApi
     */
    public iCStockTakeGet(options?: AxiosRequestConfig) {
        return ICStockTakeApiFp(this.configuration).iCStockTakeGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ICStockTake} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeApi
     */
    public iCStockTakePost(body: ICStockTake, options?: AxiosRequestConfig) {
        return ICStockTakeApiFp(this.configuration).iCStockTakePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}