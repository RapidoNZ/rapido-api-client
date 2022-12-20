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
import { PagedTABLECBBAL } from '../models';
// @ts-ignore
import { TABLECBBAL } from '../models';
/**
 * TABLECBBALApi - axios parameter creator
 * @export
 */
export const TABLECBBALApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} bankAccountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBBALBankAccountCodeGet: async (bankAccountCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bankAccountCode' is not null or undefined
            assertParamExists('tABLECBBALBankAccountCodeGet', 'bankAccountCode', bankAccountCode)
            const localVarPath = `/TABLE_CBBAL('{BankAccountCode}')`
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
        tABLECBBALGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_CBBAL`;
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
 * TABLECBBALApi - functional programming interface
 * @export
 */
export const TABLECBBALApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLECBBALApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} bankAccountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBBALBankAccountCodeGet(bankAccountCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLECBBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBBALBankAccountCodeGet(bankAccountCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLECBBALGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLECBBAL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLECBBALGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLECBBALApi - factory interface
 * @export
 */
export const TABLECBBALApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLECBBALApiFp(configuration)
    return {
        /**
         * 
         * @param {string} bankAccountCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBBALBankAccountCodeGet(bankAccountCode: string, options?: any): AxiosPromise<TABLECBBAL> {
            return localVarFp.tABLECBBALBankAccountCodeGet(bankAccountCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLECBBALGet(options?: any): AxiosPromise<PagedTABLECBBAL> {
            return localVarFp.tABLECBBALGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLECBBALApi - interface
 * @export
 * @interface TABLECBBALApi
 */
export interface TABLECBBALApiInterface {
    /**
     * 
     * @param {string} bankAccountCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBBALApiInterface
     */
    tABLECBBALBankAccountCodeGet(bankAccountCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLECBBAL>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBBALApiInterface
     */
    tABLECBBALGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLECBBAL>;

}

/**
 * TABLECBBALApi - object-oriented interface
 * @export
 * @class TABLECBBALApi
 * @extends {BaseAPI}
 */
export class TABLECBBALApi extends BaseAPI implements TABLECBBALApiInterface {
    /**
     * 
     * @param {string} bankAccountCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBBALApi
     */
    public tABLECBBALBankAccountCodeGet(bankAccountCode: string, options?: AxiosRequestConfig) {
        return TABLECBBALApiFp(this.configuration).tABLECBBALBankAccountCodeGet(bankAccountCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLECBBALApi
     */
    public tABLECBBALGet(options?: AxiosRequestConfig) {
        return TABLECBBALApiFp(this.configuration).tABLECBBALGet(options).then((request) => request(this.axios, this.basePath));
    }
}