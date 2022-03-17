// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================
import { Permission, PermissionNames, PermissionValues } from '../models/permission.model';

export interface Permission {
    permissionId: number;
    permission: string;
    roleId: number;
}

export interface rolePermissionResponse {
    roles: Role[];
    permissions: Permission[];
    accessPermissions: PermissionValues | PermissionValues[];
}

export interface Role {
    roleId: number;
    roleName: string;    
}

export interface rolePermission {
    status: boolean;
    role: Role;
    permissions: Permission[],
    accessPermissions: PermissionValues | PermissionValues[];
}