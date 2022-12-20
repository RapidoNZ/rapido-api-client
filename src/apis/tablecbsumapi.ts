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
import { PagedTABLECBSUM } from '../models';
// @ts-ignore
import { TABLECBSUM } from '../models';
/**
 * TABLECBSUMApi - axios parameter creator
 * @export
 */
export const TABLECBSUMApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBSUMGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBSUM`;
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
         * @param {number} summaryID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBSUMSummaryIDGet: async (summaryID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'summaryID' is not null or undefined
            assertParamExists('tABLECBSUMSummaryIDGet', 'summaryID', summaryID)
            const localVarPath = `/TABLE_CBSUM('{SummaryID}')`
                .replace(`{${"SummaryID"}}`, encodeURIComponent(String(summaryID)));
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
 * TABLECBSUMApi - functional programming interface
 * @export
 */
export const TABLECBSUMApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBSUMApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBSUMGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBSUM>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBSUMGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} summaryID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBSUMSummaryIDGet(summaryID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBSUM>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBSUMSummaryIDGet(summaryID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBSUMApi - factory interface
 * @export
 */
export const TABLECBSUMApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBSUMApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBSUMGet(options?: any): AxiosPromise<PagedTABLECBSUM> {
            return localVarFp.tABLECBSUMGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} summaryID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBSUMSummaryIDGet(summaryID: number, options?: any): AxiosPromise<TABLECBSUM> {
            return localVarFp.tABLECBSUMSummaryIDGet(summaryID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBSUMApi - interface
 * @export
 * @interface TABLECBSUMApi
 */
export interface TABLECBSUMApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBSUMApiInterface
     */
    tABLECBSUMGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBSUM>;

    /**
     * 
     * @param {number} summaryID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBSUMApiInterface
     */
    tABLECBSUMSummaryIDGet(summaryID: number, options?: AxiosRequestConfig): AxiosPromise<TABLECBSUM>;

}

/**
 * TABLECBSUMApi - object-oriented interface
 * @export
 * @class TABLECBSUMApi
 * @extends {BaseAPI}
 */
export class TABLECBSUMApi extends BaseAPI implements TABLECBSUMApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBSUMApi
     */
    public tABLECBSUMGet(options?: AxiosRequestConfig) {
        return TABLECBSUMApiFp(this.configuration).tABLECBSUMGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} summaryID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBSUMApi
     */
    public tABLECBSUMSummaryIDGet(summaryID: number, options?: AxiosRequestConfig) {
        return TABLECBSUMApiFp(this.configuration).tABLECBSUMSummaryIDGet(summaryID, options).then((request) => request(this.axios, this.basePath));
    }
}
