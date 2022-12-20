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
 * @interface TABLECOBIND
 */
export interface TABLECOBIND {
    /**
     * 
     * @type {number}
     * @memberof TABLECOBIND
     */
    'RecNo'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECOBIND
     */
    'BindID'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECOBIND
     */
    'Shortcut'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'BindType'?: TABLECOBINDBindTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'ScriptPath'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'FolderName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'FormCaption'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'UserCodeType'?: TABLECOBINDUserCodeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'UserCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLECOBIND
     */
    'UserGlyph'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TABLECOBIND
     */
    'OnToolbar'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TABLECOBIND
     */
    'ButtonOrder'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'ButtonHint'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLECOBIND
     */
    'InNavigator'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'TabName'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLECOBIND
     */
    'NavigatorOrder'?: number;
    /**
     * 
     * @type {number}
     * @memberof TABLECOBIND
     */
    'TabOrder'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLECOBIND
     */
    'ToolbarName'?: string;
}

export const TABLECOBINDBindTypeEnum = {
    AccredoForm: 'Accredo Form',
    CustomForm: 'Custom Form',
    CustomReport: 'Custom Report',
    GlFinancialReport: 'GL Financial Report',
    JcReport: 'JC Report',
    PaReport: 'PA Report',
    ReportList: 'Report List',
    ScriptList: 'Script List',
    SaReport: 'SA Report',
    Script: 'Script',
    SpPriceList: 'SP Price List',
    SpRuleListDefinition: 'SP Rule List Definition',
    TdCustomTableForm: 'TD Custom Table Form'
} as const;

export type TABLECOBINDBindTypeEnum = typeof TABLECOBINDBindTypeEnum[keyof typeof TABLECOBINDBindTypeEnum];
export const TABLECOBINDUserCodeTypeEnum = {
    None: 'None',
    One: 'One',
    Many: 'Many'
} as const;

export type TABLECOBINDUserCodeTypeEnum = typeof TABLECOBINDUserCodeTypeEnum[keyof typeof TABLECOBINDUserCodeTypeEnum];


