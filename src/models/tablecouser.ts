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
 * @interface TABLECOUSER
 */
export interface TABLECOUSER {
    /**
     * 
     * @type {number}
     * @memberof TABLECOUSER
     */
    'RecNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'UserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'UserType'?: TABLECOUSERUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'CreatedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'CreatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'CreatedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'UserName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'PermissionGroup'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'ImagePath'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'EmailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'MobileNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'PhoneNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'Comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'Details'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'DefaultAuthorisationCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TABLECOUSER
     */
    'ChangePassword'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TABLECOUSER
     */
    'Inactive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'DefaultInTransitLocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'DefaultLocationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'DefaultBranchCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'DefaultDepartmentCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'Custom1'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'Custom2'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'ModifiedUserCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'ModifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TABLECOUSER
     */
    'ModifiedTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof TABLECOUSER
     */
    'RecordRevision'?: number;
}

export const TABLECOUSERUserTypeEnum = {
    User: 'User',
    Group: 'Group',
    Role: 'Role'
} as const;

export type TABLECOUSERUserTypeEnum = typeof TABLECOUSERUserTypeEnum[keyof typeof TABLECOUSERUserTypeEnum];

