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
 * @interface ARCustomerList
 */
export interface ARCustomerList {
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'CustomerCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'CustomerName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Address1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Address2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Address3'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Address4'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'CountryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'PostCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'OtherPartyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'SalesAreaCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'SalesPersonCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'CustomerGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'WebAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'BankReference'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'BankParticulars'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'PhoneNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'PhoneNo2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'FaxNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'StatementStyle'?: ARCustomerListStatementStyleEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ARCustomerList
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'PriceCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'DiscountScheduleCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'GstOverride'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ARCustomerList
     */
    'BackOrder'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'BillToAccountCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'YearOpeningBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'PeriodOpeningBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Balance3'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Balance2'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Balance1'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'BalanceCurrent'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'BalanceFuture'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'YearOpeningBalanceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'PeriodOpeningBalanceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Balance3Bs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Balance2Bs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Balance1Bs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'BalanceCurrentBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'BalanceFutureBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'CreditLimit'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ARCustomerList
     */
    'StopCredit'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'SalesPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'SalesYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'SalesLastYear'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'SalesPeriodToDateBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'SalesYearToDateBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'SalesLastYearBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DateOfLastSale'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'AmountOfLastReceipt'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DateOfLastReceipt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'BankAccountNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'PayerName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ARCustomerList
     */
    'BankThrough'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'PrimaryContactID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'EmailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'StatementEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'InvoiceEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'QuoteEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'PackingSlipEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'TaxNo'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ARCustomerList
     */
    'OrderNoRequired'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DefaultDeliveryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'MediaCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'BalanceTotalExclFuture'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'BalanceTotal'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'BalanceTotalExclFutureBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'BalanceTotalBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'AutoAllocate'?: ARCustomerListAutoAllocateEnum;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DeliveryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DeliveryAddress1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DeliveryAddress2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DeliveryAddress3'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DeliveryAddress4'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DeliveryCountryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DeliveryAddress5'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'DeliveryPostCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Latitude'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Longitude'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ShipperCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Custom2'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactCreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactCreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactCreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactRole'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactComment'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactCategory1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactCategory2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactCustom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactCustom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactTitle'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactFirstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactMiddleName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactLastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactSuffix'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactPhoneNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactFaxNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactMobileNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactEmailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactFirstNameLastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactLastNameFirstName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ARCustomerList
     */
    'ContactIsPrimary'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ARCustomerList
     */
    'ContactInactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'ContactLineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'ContactRecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ContactFullName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'LastHistoryPeriod'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'RegimeCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Address5'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'BusinessNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'EditRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    'Z_Rapido'?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Latitude_1'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'Longitude_1'?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCustomerList
     */
    'RecordRevision_1'?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCustomerList
     */
    '@odata.etag'?: string;
}

export const ARCustomerListStatementStyleEnum = {
    BalanceForward: 'Balance Forward',
    OpenItem: 'Open Item',
    None: 'None'
} as const;

export type ARCustomerListStatementStyleEnum = typeof ARCustomerListStatementStyleEnum[keyof typeof ARCustomerListStatementStyleEnum];
export const ARCustomerListAutoAllocateEnum = {
    All: 'All',
    WholeBalances: 'Whole Balances',
    None: 'None'
} as const;

export type ARCustomerListAutoAllocateEnum = typeof ARCustomerListAutoAllocateEnum[keyof typeof ARCustomerListAutoAllocateEnum];


