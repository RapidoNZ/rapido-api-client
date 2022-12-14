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
 * @interface APCreditorList
 */
export interface APCreditorList {
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'CreditorName'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'Address1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'Address2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'Address3'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'Address4'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'CountryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PostCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'OtherPartyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'DefaultExpenseCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'CurrencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'CreditorGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'WebAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhoneNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhoneNo2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'FaxNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'AutoAllocate'?: APCreditorListAutoAllocateEnum;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'DefaultPaymentMethod'?: APCreditorListDefaultPaymentMethodEnum;
    /**
     * 
     * @type {boolean}
     * @memberof APCreditorList
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'GstOverride'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ShipmentCostMode'?: APCreditorListShipmentCostModeEnum;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BillToAccountCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PaymentPriority'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PaymentUnit'?: APCreditorListPaymentUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PaymentCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PaymentDayOfMonth'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Discount'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'DiscountUnit'?: APCreditorListDiscountUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'DiscountCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'DiscountDayOfMonth'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'YearOpeningBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PeriodOpeningBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Balance3'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Balance2'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Balance1'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'BalanceCurrent'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'BalanceFuture'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'YearOpeningBalanceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PeriodOpeningBalanceBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Balance3Bs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Balance2Bs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Balance1Bs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'BalanceCurrentBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'BalanceFutureBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PurchasesPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PurchasesYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PurchasesLastYear'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'DiscountPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'DiscountYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'DiscountLastYear'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PurchasesPeriodToDateBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PurchasesYearToDateBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PurchasesLastYearBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'DiscountPeriodToDateBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'DiscountYearToDateBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'DiscountLastYearBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'DateOfLastPayment'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhysicalAddress1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhysicalAddress2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhysicalAddress3'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhysicalAddress4'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhysicalCountryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhysicalPostCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankAccountNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PayeeName'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PrimaryContactID'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'EmailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'RemittanceEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'OrderEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'QuoteEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'TaxNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankName'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankAddress1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankAddress2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankAddress3'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankAddress4'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankCountryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankIdentifierCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'DefaultCostCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'BalanceTotalExclFuture'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'BalanceTotal'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'BalanceTotalExclFutureBs'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'BalanceTotalBs'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactCreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactCreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactCreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactRole'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactComment'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactCategory1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactCategory2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactCustom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactCustom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactTitle'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactFirstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactMiddleName'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactLastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactSuffix'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactPhoneNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactFaxNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactMobileNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactEmailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactFirstNameLastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactLastNameFirstName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof APCreditorList
     */
    'ContactIsPrimary'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof APCreditorList
     */
    'ContactInactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'ContactLineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'ContactRecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ContactFullName'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'LastHistoryPeriod'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'RegimeCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'PhysicalAddress5'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PhysicalLatitude'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'PhysicalLongitude'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'Address5'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Latitude'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'Longitude'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BusinessNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankReference'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankParticulars'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'ShipmentEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankAddress5'?: string;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'BankPostCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'EditRevision'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'AmountOfLastPayment'?: number;
    /**
     * 
     * @type {number}
     * @memberof APCreditorList
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    'AccountType'?: APCreditorListAccountTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof APCreditorList
     */
    '@odata.etag'?: string;
}

export const APCreditorListAutoAllocateEnum = {
    All: 'All',
    WholeBalances: 'Whole Balances',
    None: 'None'
} as const;

export type APCreditorListAutoAllocateEnum = typeof APCreditorListAutoAllocateEnum[keyof typeof APCreditorListAutoAllocateEnum];
export const APCreditorListDefaultPaymentMethodEnum = {
    ComputerPrintedCheque: 'Computer Printed Cheque',
    CreditCard: 'Credit Card',
    DirectDebit: 'Direct Debit',
    Electronic: 'Electronic',
    LetterOfCredit: 'Letter of Credit',
    Manual: 'Manual',
    Remittance: 'Remittance',
    TelegraphicTransfer: 'Telegraphic Transfer'
} as const;

export type APCreditorListDefaultPaymentMethodEnum = typeof APCreditorListDefaultPaymentMethodEnum[keyof typeof APCreditorListDefaultPaymentMethodEnum];
export const APCreditorListShipmentCostModeEnum = {
    DivideAmount: 'Divide Amount',
    MultiplyCost: 'Multiply Cost'
} as const;

export type APCreditorListShipmentCostModeEnum = typeof APCreditorListShipmentCostModeEnum[keyof typeof APCreditorListShipmentCostModeEnum];
export const APCreditorListPaymentUnitEnum = {
    Days: 'Days',
    Weeks: 'Weeks',
    Months: 'Months'
} as const;

export type APCreditorListPaymentUnitEnum = typeof APCreditorListPaymentUnitEnum[keyof typeof APCreditorListPaymentUnitEnum];
export const APCreditorListDiscountUnitEnum = {
    Days: 'Days',
    Weeks: 'Weeks',
    Months: 'Months'
} as const;

export type APCreditorListDiscountUnitEnum = typeof APCreditorListDiscountUnitEnum[keyof typeof APCreditorListDiscountUnitEnum];
export const APCreditorListAccountTypeEnum = {
    BalanceForward: 'Balance Forward',
    OpenItem: 'Open Item'
} as const;

export type APCreditorListAccountTypeEnum = typeof APCreditorListAccountTypeEnum[keyof typeof APCreditorListAccountTypeEnum];


