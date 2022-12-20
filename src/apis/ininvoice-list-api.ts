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
import { INInvoiceList } from '../models';
// @ts-ignore
import { PagedINInvoiceList } from '../models';
/**
 * INInvoiceListApi - axios parameter creator
 * @export
 */
export const INInvoiceListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNInvoiceListDocumentIDGet: async (documentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('iNInvoiceListDocumentIDGet', 'documentID', documentID)
            const localVarPath = `/INInvoiceList('{DocumentID}')`
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNInvoiceListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/INInvoiceList`;
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
    }
};

/**
 * INInvoiceListApi - functional programming interface
 * @export
 */
export const INInvoiceListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = INInvoiceListApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNInvoiceListDocumentIDGet(documentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<INInvoiceList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNInvoiceListDocumentIDGet(documentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iNInvoiceListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedINInvoiceList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iNInvoiceListGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * INInvoiceListApi - factory interface
 * @export
 */
export const INInvoiceListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = INInvoiceListApiFp(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNInvoiceListDocumentIDGet(documentID: number, options?: any): AxiosPromise<INInvoiceList> {
            return localVarFp.iNInvoiceListDocumentIDGet(documentID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iNInvoiceListGet(options?: any): AxiosPromise<PagedINInvoiceList> {
            return localVarFp.iNInvoiceListGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * INInvoiceListApi - interface
 * @export
 * @interface INInvoiceListApi
 */
export interface INInvoiceListApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INInvoiceListApiInterface
     */
    iNInvoiceListDocumentIDGet(documentID: number, options?: AxiosRequestConfig): AxiosPromise<INInvoiceList>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INInvoiceListApiInterface
     */
    iNInvoiceListGet(options?: AxiosRequestConfig): AxiosPromise<PagedINInvoiceList>;

}

/**
 * INInvoiceListApi - object-oriented interface
 * @export
 * @class INInvoiceListApi
 * @extends {BaseAPI}
 */
export class INInvoiceListApi extends BaseAPI implements INInvoiceListApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INInvoiceListApi
     */
    public iNInvoiceListDocumentIDGet(documentID: number, options?: AxiosRequestConfig) {
        return INInvoiceListApiFp(this.configuration).iNInvoiceListDocumentIDGet(documentID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof INInvoiceListApi
     */
    public iNInvoiceListGet(options?: AxiosRequestConfig) {
        return INInvoiceListApiFp(this.configuration).iNInvoiceListGet(options).then((request) => request(this.axios, this.basePath));
    }
}