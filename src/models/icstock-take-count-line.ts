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
 * @interface ICStockTakeCountLine
 */
export interface ICStockTakeCountLine {
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'LineID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'LineNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityAvailable'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'LatestCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityInStock'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityOnOrder'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityAllocated'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityOnBackOrder'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityReturned'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityShipped'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityCommitted'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityInProduction'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'StocktakeVariance'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'ProductCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityTransferIn'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'StandardCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityTransferOut'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'AverageCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityInTransit'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'MinimumQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'MaximumQuantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'Description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'LocationCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ICStockTakeCountLine
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ICStockTakeCountLine
     */
    'NonDiminishing'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ICStockTakeCountLine
     */
    'Discontinued'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'Unit'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'Weight'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'Volume'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'CreditorCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'BarCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityCounted'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'DocumentID'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'CountID'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'BinLocation'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'Category1'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'Category2'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'Stockgroupcode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    'SalesgroupCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'ValuationCost'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'ValueOver'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'ValueUnder'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'ValueVariance'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityVariance'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityOver'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityUnder'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'StocktakeQuantityCounted'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityExpected'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityExpectedMovement'?: number;
    /**
     * 
     * @type {number}
     * @memberof ICStockTakeCountLine
     */
    'QuantityExpectedOpening'?: number;
    /**
     * 
     * @type {string}
     * @memberof ICStockTakeCountLine
     */
    '@odata.etag'?: string;
}

