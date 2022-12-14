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



/**
 * 
 * @export
 * @interface TABLEGLHEAD
 */
export interface TABLEGLHEAD {
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'BatchID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'SourceModule'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'SourceID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'CompanyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'SourceCurrencyCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'ExchangeRateIE'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'ExchangeRateALC'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'Description'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'ParentID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'Details'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'BatchClass'?: TABLEGLHEADBatchClassEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'PeriodID'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLEGLHEAD
     */
    'PostStatus'?: TABLEGLHEADPostStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'YearNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLEGLHEAD
     */
    'PeriodNo'?: number;
}

export const TABLEGLHEADBatchClassEnum = {
    GlBatch: 'GL Batch',
    ModuleBatch: 'Module Batch',
    ReversingJournal: 'Reversing Journal',
    StandingJournal: 'Standing Journal',
    TemplateBatch: 'Template Batch',
    ReversingOut: 'Reversing Out',
    Imported: 'Imported'
} as const;

export type TABLEGLHEADBatchClassEnum = typeof TABLEGLHEADBatchClassEnum[keyof typeof TABLEGLHEADBatchClassEnum];
export const TABLEGLHEADPostStatusEnum = {
    Unposted: 'Unposted',
    Posted: 'Posted',
    Deleted: 'Deleted'
} as const;

export type TABLEGLHEADPostStatusEnum = typeof TABLEGLHEADPostStatusEnum[keyof typeof TABLEGLHEADPostStatusEnum];


