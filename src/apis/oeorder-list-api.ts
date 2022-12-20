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
import { OEOrderList } from '../models';
// @ts-ignore
import { PagedOEOrderList } from '../models';
/**
 * OEOrderListApi - axios parameter creator
 * @export
 */
export const OEOrderListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEOrderListDocumentIDGet: async (documentID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentID' is not null or undefined
            assertParamExists('oEOrderListDocumentIDGet', 'documentID', documentID)
            const localVarPath = `/OEOrderList('{DocumentID}')`
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
        oEOrderListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/OEOrderList`;
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
 * OEOrderListApi - functional programming interface
 * @export
 */
export const OEOrderListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OEOrderListApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oEOrderListDocumentIDGet(documentID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OEOrderList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oEOrderListDocumentIDGet(documentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oEOrderListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedOEOrderList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oEOrderListGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OEOrderListApi - factory interface
 * @export
 */
export const OEOrderListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OEOrderListApiFp(configuration)
    return {
        /**
         * 
         * @param {number} documentID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEOrderListDocumentIDGet(documentID: number, options?: any): AxiosPromise<OEOrderList> {
            return localVarFp.oEOrderListDocumentIDGet(documentID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oEOrderListGet(options?: any): AxiosPromise<PagedOEOrderList> {
            return localVarFp.oEOrderListGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OEOrderListApi - interface
 * @export
 * @interface OEOrderListApi
 */
export interface OEOrderListApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEOrderListApiInterface
     */
    oEOrderListDocumentIDGet(documentID: number, options?: AxiosRequestConfig): AxiosPromise<OEOrderList>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEOrderListApiInterface
     */
    oEOrderListGet(options?: AxiosRequestConfig): AxiosPromise<PagedOEOrderList>;

}

/**
 * OEOrderListApi - object-oriented interface
 * @export
 * @class OEOrderListApi
 * @extends {BaseAPI}
 */
export class OEOrderListApi extends BaseAPI implements OEOrderListApiInterface {
    /**
     * 
     * @param {number} documentID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEOrderListApi
     */
    public oEOrderListDocumentIDGet(documentID: number, options?: AxiosRequestConfig) {
        return OEOrderListApiFp(this.configuration).oEOrderListDocumentIDGet(documentID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OEOrderListApi
     */
    public oEOrderListGet(options?: AxiosRequestConfig) {
        return OEOrderListApiFp(this.configuration).oEOrderListGet(options).then((request) => request(this.axios, this.basePath));
    }
}