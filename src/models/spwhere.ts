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
 * @interface SPWhere
 */
export interface SPWhere {
    /**
     * 
     * @type {number}
     * @memberof SPWhere
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof SPWhere
     */
    'Type'?: SPWhereTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SPWhere
     */
    'Available'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SPWhere
     */
    'DefaultPriority'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SPWhere
     */
    'ShowName'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SPWhere
     */
    'SortOrder'?: number;
    /**
     * 
     * @type {number}
     * @memberof SPWhere
     */
    'RecordRevision'?: number;
    /**
     * 
     * @type {string}
     * @memberof SPWhere
     */
    '@odata.etag'?: string;
}

export const SPWhereTypeEnum = {
    Branch: 'Branch',
    Location: 'Location',
    Department: 'Department',
    None: 'None'
} as const;

export type SPWhereTypeEnum = typeof SPWhereTypeEnum[keyof typeof SPWhereTypeEnum];


