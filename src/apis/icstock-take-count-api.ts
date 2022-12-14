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
import { ICStockTakeCount } from '../models';
// @ts-ignore
import { PagedICStockTakeCount } from '../models';
/**
 * ICStockTakeCountApi - axios parameter creator
 * @export
 */
export const ICStockTakeCountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ICStockTakeCount/Confirmed is an ODATA action - use POST to call
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDConfirmedPost: async (countID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countID' is not null or undefined
            assertParamExists('iCStockTakeCountCountIDConfirmedPost', 'countID', countID)
            const localVarPath = `/ICStockTakeCount('{CountID}')/Confirmed`
                .replace(`{${"CountID"}}`, encodeURIComponent(String(countID)));
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
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDGet: async (countID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countID' is not null or undefined
            assertParamExists('iCStockTakeCountCountIDGet', 'countID', countID)
            const localVarPath = `/ICStockTakeCount('{CountID}')`
                .replace(`{${"CountID"}}`, encodeURIComponent(String(countID)));
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
         * @param {number} countID 
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDPatch: async (countID: number, body: ICStockTakeCount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countID' is not null or undefined
            assertParamExists('iCStockTakeCountCountIDPatch', 'countID', countID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCStockTakeCountCountIDPatch', 'body', body)
            const localVarPath = `/ICStockTakeCount('{CountID}')`
                .replace(`{${"CountID"}}`, encodeURIComponent(String(countID)));
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
         * ICStockTakeCount/Print is an ODATA function and Action - use either GET or POST to call
         * @param {number} countID 
         * @param {'Disk File' | 'Printer' | 'Mail Message'} [destination] 
         * @param {string} [reportFileName] 
         * @param {'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File'} [format] 
         * @param {string} [printerName] 
         * @param {string} [fileName] 
         * @param {'attachment' | 'inline'} [intent] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDPrintGet: async (countID: number, destination?: 'Disk File' | 'Printer' | 'Mail Message', reportFileName?: string, format?: 'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File', printerName?: string, fileName?: string, intent?: 'attachment' | 'inline', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countID' is not null or undefined
            assertParamExists('iCStockTakeCountCountIDPrintGet', 'countID', countID)
            const localVarPath = `/ICStockTakeCount('{CountID}')/Print`
                .replace(`{${"CountID"}}`, encodeURIComponent(String(countID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (destination !== undefined) {
                localVarQueryParameter['Destination'] = destination;
            }

            if (reportFileName !== undefined) {
                localVarQueryParameter['ReportFileName'] = reportFileName;
            }

            if (format !== undefined) {
                localVarQueryParameter['Format'] = format;
            }

            if (printerName !== undefined) {
                localVarQueryParameter['PrinterName'] = printerName;
            }

            if (fileName !== undefined) {
                localVarQueryParameter['FileName'] = fileName;
            }

            if (intent !== undefined) {
                localVarQueryParameter['Intent'] = intent;
            }


    
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
         * @param {number} countID 
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDPut: async (countID: number, body: ICStockTakeCount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countID' is not null or undefined
            assertParamExists('iCStockTakeCountCountIDPut', 'countID', countID)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCStockTakeCountCountIDPut', 'body', body)
            const localVarPath = `/ICStockTakeCount('{CountID}')`
                .replace(`{${"CountID"}}`, encodeURIComponent(String(countID)));
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
         * ICStockTakeCount/UnConfirmed is an ODATA action - use POST to call
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDUnConfirmedPost: async (countID: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countID' is not null or undefined
            assertParamExists('iCStockTakeCountCountIDUnConfirmedPost', 'countID', countID)
            const localVarPath = `/ICStockTakeCount('{CountID}')/UnConfirmed`
                .replace(`{${"CountID"}}`, encodeURIComponent(String(countID)));
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
        iCStockTakeCountGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ICStockTakeCount`;
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
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountPost: async (body: ICStockTakeCount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('iCStockTakeCountPost', 'body', body)
            const localVarPath = `/ICStockTakeCount`;
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
 * ICStockTakeCountApi - functional programming interface
 * @export
 */
export const ICStockTakeCountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ICStockTakeCountApiAxiosParamCreator(configuration)
    return {
        /**
         * ICStockTakeCount/Confirmed is an ODATA action - use POST to call
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeCountCountIDConfirmedPost(countID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeCountCountIDConfirmedPost(countID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeCountCountIDGet(countID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ICStockTakeCount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeCountCountIDGet(countID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} countID 
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeCountCountIDPatch(countID: number, body: ICStockTakeCount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeCountCountIDPatch(countID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ICStockTakeCount/Print is an ODATA function and Action - use either GET or POST to call
         * @param {number} countID 
         * @param {'Disk File' | 'Printer' | 'Mail Message'} [destination] 
         * @param {string} [reportFileName] 
         * @param {'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File'} [format] 
         * @param {string} [printerName] 
         * @param {string} [fileName] 
         * @param {'attachment' | 'inline'} [intent] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeCountCountIDPrintGet(countID: number, destination?: 'Disk File' | 'Printer' | 'Mail Message', reportFileName?: string, format?: 'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File', printerName?: string, fileName?: string, intent?: 'attachment' | 'inline', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeCountCountIDPrintGet(countID, destination, reportFileName, format, printerName, fileName, intent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} countID 
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeCountCountIDPut(countID: number, body: ICStockTakeCount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeCountCountIDPut(countID, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ICStockTakeCount/UnConfirmed is an ODATA action - use POST to call
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeCountCountIDUnConfirmedPost(countID: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeCountCountIDUnConfirmedPost(countID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeCountGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagedICStockTakeCount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeCountGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async iCStockTakeCountPost(body: ICStockTakeCount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.iCStockTakeCountPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ICStockTakeCountApi - factory interface
 * @export
 */
export const ICStockTakeCountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ICStockTakeCountApiFp(configuration)
    return {
        /**
         * ICStockTakeCount/Confirmed is an ODATA action - use POST to call
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDConfirmedPost(countID: number, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeCountCountIDConfirmedPost(countID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDGet(countID: number, options?: any): AxiosPromise<ICStockTakeCount> {
            return localVarFp.iCStockTakeCountCountIDGet(countID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} countID 
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDPatch(countID: number, body: ICStockTakeCount, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeCountCountIDPatch(countID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * ICStockTakeCount/Print is an ODATA function and Action - use either GET or POST to call
         * @param {number} countID 
         * @param {'Disk File' | 'Printer' | 'Mail Message'} [destination] 
         * @param {string} [reportFileName] 
         * @param {'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File'} [format] 
         * @param {string} [printerName] 
         * @param {string} [fileName] 
         * @param {'attachment' | 'inline'} [intent] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDPrintGet(countID: number, destination?: 'Disk File' | 'Printer' | 'Mail Message', reportFileName?: string, format?: 'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File', printerName?: string, fileName?: string, intent?: 'attachment' | 'inline', options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeCountCountIDPrintGet(countID, destination, reportFileName, format, printerName, fileName, intent, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} countID 
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDPut(countID: number, body: ICStockTakeCount, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeCountCountIDPut(countID, body, options).then((request) => request(axios, basePath));
        },
        /**
         * ICStockTakeCount/UnConfirmed is an ODATA action - use POST to call
         * @param {number} countID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountCountIDUnConfirmedPost(countID: number, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeCountCountIDUnConfirmedPost(countID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountGet(options?: any): AxiosPromise<PagedICStockTakeCount> {
            return localVarFp.iCStockTakeCountGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ICStockTakeCount} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        iCStockTakeCountPost(body: ICStockTakeCount, options?: any): AxiosPromise<void> {
            return localVarFp.iCStockTakeCountPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ICStockTakeCountApi - interface
 * @export
 * @interface ICStockTakeCountApi
 */
export interface ICStockTakeCountApiInterface {
    /**
     * ICStockTakeCount/Confirmed is an ODATA action - use POST to call
     * @param {number} countID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApiInterface
     */
    iCStockTakeCountCountIDConfirmedPost(countID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} countID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApiInterface
     */
    iCStockTakeCountCountIDGet(countID: number, options?: AxiosRequestConfig): AxiosPromise<ICStockTakeCount>;

    /**
     * 
     * @param {number} countID 
     * @param {ICStockTakeCount} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApiInterface
     */
    iCStockTakeCountCountIDPatch(countID: number, body: ICStockTakeCount, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * ICStockTakeCount/Print is an ODATA function and Action - use either GET or POST to call
     * @param {number} countID 
     * @param {'Disk File' | 'Printer' | 'Mail Message'} [destination] 
     * @param {string} [reportFileName] 
     * @param {'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File'} [format] 
     * @param {string} [printerName] 
     * @param {string} [fileName] 
     * @param {'attachment' | 'inline'} [intent] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApiInterface
     */
    iCStockTakeCountCountIDPrintGet(countID: number, destination?: 'Disk File' | 'Printer' | 'Mail Message', reportFileName?: string, format?: 'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File', printerName?: string, fileName?: string, intent?: 'attachment' | 'inline', options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} countID 
     * @param {ICStockTakeCount} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApiInterface
     */
    iCStockTakeCountCountIDPut(countID: number, body: ICStockTakeCount, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * ICStockTakeCount/UnConfirmed is an ODATA action - use POST to call
     * @param {number} countID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApiInterface
     */
    iCStockTakeCountCountIDUnConfirmedPost(countID: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApiInterface
     */
    iCStockTakeCountGet(options?: AxiosRequestConfig): AxiosPromise<PagedICStockTakeCount>;

    /**
     * 
     * @param {ICStockTakeCount} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApiInterface
     */
    iCStockTakeCountPost(body: ICStockTakeCount, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ICStockTakeCountApi - object-oriented interface
 * @export
 * @class ICStockTakeCountApi
 * @extends {BaseAPI}
 */
export class ICStockTakeCountApi extends BaseAPI implements ICStockTakeCountApiInterface {
    /**
     * ICStockTakeCount/Confirmed is an ODATA action - use POST to call
     * @param {number} countID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApi
     */
    public iCStockTakeCountCountIDConfirmedPost(countID: number, options?: AxiosRequestConfig) {
        return ICStockTakeCountApiFp(this.configuration).iCStockTakeCountCountIDConfirmedPost(countID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} countID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApi
     */
    public iCStockTakeCountCountIDGet(countID: number, options?: AxiosRequestConfig) {
        return ICStockTakeCountApiFp(this.configuration).iCStockTakeCountCountIDGet(countID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} countID 
     * @param {ICStockTakeCount} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApi
     */
    public iCStockTakeCountCountIDPatch(countID: number, body: ICStockTakeCount, options?: AxiosRequestConfig) {
        return ICStockTakeCountApiFp(this.configuration).iCStockTakeCountCountIDPatch(countID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ICStockTakeCount/Print is an ODATA function and Action - use either GET or POST to call
     * @param {number} countID 
     * @param {'Disk File' | 'Printer' | 'Mail Message'} [destination] 
     * @param {string} [reportFileName] 
     * @param {'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File'} [format] 
     * @param {string} [printerName] 
     * @param {string} [fileName] 
     * @param {'attachment' | 'inline'} [intent] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApi
     */
    public iCStockTakeCountCountIDPrintGet(countID: number, destination?: 'Disk File' | 'Printer' | 'Mail Message', reportFileName?: string, format?: 'Adobe PDF' | 'CSV File' | 'Tab Delimited File' | 'Quoted CSV File' | 'Excel XLSX File', printerName?: string, fileName?: string, intent?: 'attachment' | 'inline', options?: AxiosRequestConfig) {
        return ICStockTakeCountApiFp(this.configuration).iCStockTakeCountCountIDPrintGet(countID, destination, reportFileName, format, printerName, fileName, intent, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} countID 
     * @param {ICStockTakeCount} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApi
     */
    public iCStockTakeCountCountIDPut(countID: number, body: ICStockTakeCount, options?: AxiosRequestConfig) {
        return ICStockTakeCountApiFp(this.configuration).iCStockTakeCountCountIDPut(countID, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ICStockTakeCount/UnConfirmed is an ODATA action - use POST to call
     * @param {number} countID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApi
     */
    public iCStockTakeCountCountIDUnConfirmedPost(countID: number, options?: AxiosRequestConfig) {
        return ICStockTakeCountApiFp(this.configuration).iCStockTakeCountCountIDUnConfirmedPost(countID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApi
     */
    public iCStockTakeCountGet(options?: AxiosRequestConfig) {
        return ICStockTakeCountApiFp(this.configuration).iCStockTakeCountGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ICStockTakeCount} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ICStockTakeCountApi
     */
    public iCStockTakeCountPost(body: ICStockTakeCount, options?: AxiosRequestConfig) {
        return ICStockTakeCountApiFp(this.configuration).iCStockTakeCountPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
