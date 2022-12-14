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
 * @interface ICProductList
 */
export interface ICProductList {
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'Description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'Details'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'AlternateCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'BarCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'Unit'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'GstCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'DiscountScheduleCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'StockGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SalesGroupCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'LeadTime'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'Weight'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'Volume'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductList
     */
    'NonDiminishing'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductList
     */
    'ManuallyCosted'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'ComponentMode'?: ICProductListComponentModeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductList
     */
    'HasParts'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'CommissionPercentage'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductList
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductList
     */
    'BackOrder'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'Comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'StandardCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'LatestCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'AverageCost'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode3'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode4'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode5'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode6'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode7'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode8'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SellCurrencyCode9'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice1'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice2'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice3'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice4'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice5'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice6'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice7'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice8'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SellingPrice9'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage1'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage2'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage3'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage4'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage5'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage6'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage7'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage8'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPercentage9'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent1'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent2'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent3'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent4'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent5'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent6'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent7'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent8'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarkupPercent9'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'ImagePath'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MinimumQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MaximumQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'OpeningStockPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SalesQuantityPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'ReceiptsPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'AdjustmentsPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'UsagePeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'ManufacturedPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'NonDiminishingPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SalesValuePeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'CostOfSalesPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'CostValuePeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'OpeningStockYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SalesQuantityYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'ReceiptsYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'UsageYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'AdjustmentsYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'ManufacturedYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'NonDiminishingYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'SalesValueYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'CostOfSalesYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'CostValueYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'StocktakeVariance'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityOnOrder'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityAllocated'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityOnBackOrder'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityInStock'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityCommitted'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'DateOfLastSale'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'DateOfLastUsage'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'DateOfLastReceipt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'DateOfLastManufacture'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'Duty'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityShipped'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'ClosingPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'ClosingYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'MarginYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityAvailable'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityTheoretical'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityRecReorder'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'LastHistoryPeriod'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductList
     */
    'HasRegimeOverrides'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ICProductList
     */
    'Discontinued'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'BaseUOMCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'SaleUOMCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'PurchaseUOMCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'ExpenseCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'EditRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'DateOfLastStocktake'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'RevaluationPeriodToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'RevaluationYearToDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityReturned'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityTransferIn'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityTransferOut'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'QuantityInProduction'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICProductList
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    'Z_Rapido'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICProductList
     */
    '@odata.etag'?: string;
}

export const ICProductListComponentModeEnum = {
    None: 'None',
    Automatic: 'Automatic',
    Manual: 'Manual'
} as const;

export type ICProductListComponentModeEnum = typeof ICProductListComponentModeEnum[keyof typeof ICProductListComponentModeEnum];


