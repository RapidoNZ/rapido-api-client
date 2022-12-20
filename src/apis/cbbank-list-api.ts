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
import { CBBankList } from '../models';
// @ts-ignore
import { PagedCBBankList } from '../models';
/**
 * CBBankListApi - axios parameter creator
 * @export
 */
export const CBBankListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} bankAccountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBBankListBankAccountCodeGet: async (bankAccountCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bankAccountCode' is not null or undefined
            assertParamExists('cBBankListBankAccountCodeGet', 'bankAccountCode', bankAccountCode)
            const localVarPath = `/CBBankList('{BankAccountCode}')`
                .replace(`{${"BankAccountCode"}}`, encodeURIComponent(String(bankAccountCode)));
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
        cBBankListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/CBBankList`;
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
 * CBBankListApi - functional programming interface
 * @export
 */
export const CBBankListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CBBankListApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} bankAccountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cBBankListBankAccountCodeGet(bankAccountCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CBBankList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cBBankListBankAccountCodeGet(bankAccountCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cBBankListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedCBBankList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cBBankListGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CBBankListApi - factory interface
 * @export
 */
export const CBBankListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CBBankListApiFp(configuration)
    return {
        /**
         * 
         * @param {string} bankAccountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBBankListBankAccountCodeGet(bankAccountCode: string, options?: any): AxiosPromise<CBBankList> {
            return localVarFp.cBBankListBankAccountCodeGet(bankAccountCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cBBankListGet(options?: any): AxiosPromise<PagedCBBankList> {
            return localVarFp.cBBankListGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CBBankListApi - interface
 * @export
 * @interface CBBankListApi
 */
export interface CBBankListApiInterface {
    /**
     * 
     * @param {string} bankAccountCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBBankListApiInterface
     */
    cBBankListBankAccountCodeGet(bankAccountCode: string, options?: AxiosRequestConfig): AxiosPromise<CBBankList>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBBankListApiInterface
     */
    cBBankListGet(options?: AxiosRequestConfig): AxiosPromise<PagedCBBankList>;

}

/**
 * CBBankListApi - object-oriented interface
 * @export
 * @class CBBankListApi
 * @extends {BaseAPI}
 */
export class CBBankListApi extends BaseAPI implements CBBankListApiInterface {
    /**
     * 
     * @param {string} bankAccountCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBBankListApi
     */
    public cBBankListBankAccountCodeGet(bankAccountCode: string, options?: AxiosRequestConfig) {
        return CBBankListApiFp(this.configuration).cBBankListBankAccountCodeGet(bankAccountCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CBBankListApi
     */
    public cBBankListGet(options?: AxiosRequestConfig) {
        return CBBankListApiFp(this.configuration).cBBankListGet(options).then((request) => request(this.axios, this.basePath));
    }
}