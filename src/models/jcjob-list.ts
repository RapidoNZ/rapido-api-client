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
 * @interface JCJobList
 */
export interface JCJobList {
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'JobCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'JobName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'JobGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'JobType'?: JCJobListJobTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'JobStatus'?: JCJobListJobStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof JCJobList
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'CustomerName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'DateEntered'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'DateRequired'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'DateCompleted'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PercentageComplete'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SiteAddress1'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SiteAddress2'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SiteAddress3'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SiteAddress4'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SiteCountryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SitePostCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SellCurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'RateType'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'DateValued'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'ExchangeRate'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JCJobList
     */
    'FixedRate'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'EstimatedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'EstimatedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'EstimatedSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'QuotedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'QuotedSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'ActualsCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'ActualsSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'ActualsSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PendingActualsCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PendingActualsSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PendingActualsSellBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'InvoicedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'InvoicedAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'InvoicedAmountBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PendingInvoicedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PendingInvoicedSell'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PendingInvoicedSellBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'OrderNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'PriceCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SalesPersonCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'DiscountScheduleCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'Category2'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JCJobList
     */
    'NonWIP'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'GLClosingWorkInProgressAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'GLWorkInProgressAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PeriodCompleteForWIP'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'DrawingNo'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'Quantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'RelatedJobCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'ContactID'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JCJobList
     */
    'ContactEmail'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SiteAddressCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'DepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'DefaultLocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactCreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactCreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactCreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactCustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactRole'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactComment'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactCategory1'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactCategory2'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactCustom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactCustom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactTitle'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactFirstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactMiddleName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactLastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactSuffix'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactPhoneNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactFaxNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactMobileNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactEmailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactFirstNameLastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactLastNameFirstName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JCJobList
     */
    'ContactIsPrimary'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JCJobList
     */
    'ContactInactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'ContactLineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'ContactRecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'ContactFullName'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'LastHistoryPeriod'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'SiteAddress5'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'SiteLatitude'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'SiteLongitude'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'QuotedCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'EditRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'WorkInProgressRecovered'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'WorkInProgressCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'PeriodTransferToGL'?: number;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'TransferredToGL'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'PrintStatus'?: JCJobListPrintStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    'OrderNoAlpha'?: string;
    /**
     * 
     * @type {number}
     * @memberof JCJobList
     */
    'WorkInProgress'?: number;
    /**
     * 
     * @type {string}
     * @memberof JCJobList
     */
    '@odata.etag'?: string;
}

export const JCJobListJobTypeEnum = {
    Normal: 'Normal',
    Standard: 'Standard',
    Quote: 'Quote'
} as const;

export type JCJobListJobTypeEnum = typeof JCJobListJobTypeEnum[keyof typeof JCJobListJobTypeEnum];
export const JCJobListJobStatusEnum = {
    Hold: 'Hold',
    Active: 'Active',
    Complete: 'Complete',
    Deleted: 'Deleted'
} as const;

export type JCJobListJobStatusEnum = typeof JCJobListJobStatusEnum[keyof typeof JCJobListJobStatusEnum];
export const JCJobListPrintStatusEnum = {
    Unprinted: 'Unprinted',
    Quoted: 'Quoted',
    Printed: 'Printed'
} as const;

export type JCJobListPrintStatusEnum = typeof JCJobListPrintStatusEnum[keyof typeof JCJobListPrintStatusEnum];


