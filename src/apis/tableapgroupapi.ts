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
import { PagedTABLEAPGROUP } from '../models';
// @ts-ignore
import { TABLEAPGROUP } from '../models';
/**
 * TABLEAPGROUPApi - axios parameter creator
 * @export
 */
export const TABLEAPGROUPApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} creditorGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPGROUPCreditorGroupCodeGet: async (creditorGroupCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'creditorGroupCode' is not null or undefined
            assertParamExists('tABLEAPGROUPCreditorGroupCodeGet', 'creditorGroupCode', creditorGroupCode)
            const localVarPath = `/TABLE_APGROUP('{CreditorGroupCode}')`
                .replace(`{${"CreditorGroupCode"}}`, encodeURIComponent(String(creditorGroupCode)));
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
        tABLEAPGROUPGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/TABLE_APGROUP`;
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
 * TABLEAPGROUPApi - functional programming interface
 * @export
 */
export const TABLEAPGROUPApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TABLEAPGROUPApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} creditorGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPGROUPCreditorGroupCodeGet(creditorGroupCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TABLEAPGROUP>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPGROUPCreditorGroupCodeGet(creditorGroupCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tABLEAPGROUPGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedTABLEAPGROUP>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tABLEAPGROUPGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TABLEAPGROUPApi - factory interface
 * @export
 */
export const TABLEAPGROUPApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TABLEAPGROUPApiFp(configuration)
    return {
        /**
         * 
         * @param {string} creditorGroupCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPGROUPCreditorGroupCodeGet(creditorGroupCode: string, options?: any): AxiosPromise<TABLEAPGROUP> {
            return localVarFp.tABLEAPGROUPCreditorGroupCodeGet(creditorGroupCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tABLEAPGROUPGet(options?: any): AxiosPromise<PagedTABLEAPGROUP> {
            return localVarFp.tABLEAPGROUPGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TABLEAPGROUPApi - interface
 * @export
 * @interface TABLEAPGROUPApi
 */
export interface TABLEAPGROUPApiInterface {
    /**
     * 
     * @param {string} creditorGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPGROUPApiInterface
     */
    tABLEAPGROUPCreditorGroupCodeGet(creditorGroupCode: string, options?: AxiosRequestConfig): AxiosPromise<TABLEAPGROUP>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPGROUPApiInterface
     */
    tABLEAPGROUPGet(options?: AxiosRequestConfig): AxiosPromise<PagedTABLEAPGROUP>;

}

/**
 * TABLEAPGROUPApi - object-oriented interface
 * @export
 * @class TABLEAPGROUPApi
 * @extends {BaseAPI}
 */
export class TABLEAPGROUPApi extends BaseAPI implements TABLEAPGROUPApiInterface {
    /**
     * 
     * @param {string} creditorGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPGROUPApi
     */
    public tABLEAPGROUPCreditorGroupCodeGet(creditorGroupCode: string, options?: AxiosRequestConfig) {
        return TABLEAPGROUPApiFp(this.configuration).tABLEAPGROUPCreditorGroupCodeGet(creditorGroupCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TABLEAPGROUPApi
     */
    public tABLEAPGROUPGet(options?: AxiosRequestConfig) {
        return TABLEAPGROUPApiFp(this.configuration).tABLEAPGROUPGet(options).then((request) => request(this.axios, this.basePath));
    }
}
