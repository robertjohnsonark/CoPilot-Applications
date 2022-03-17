// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { PermissionValues } from './permission.model';

export interface LoginResponse {
    access_token: string;
    id_token: string;
    refresh_token: string;
    expires_in: number;
    status: boolean;
    user: User;
}

export interface User {
    sub: string;
    name: string;
    fullname: string;
    jobtitle: string;
    emailid: string;
    phone: string;
    role: string | string[];
    permission: PermissionValues | PermissionValues[];
    configuration: string;
}

export interface IdToken {
    sub: string;
    name: string;
    fullname: string;
    jobtitle: string;
    emailid: string;
    phone: string;
    role: string | string[];
    permission: PermissionValues | PermissionValues[];
    configuration: string;
}
