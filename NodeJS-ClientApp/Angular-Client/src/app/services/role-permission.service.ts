// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { RolePermissionEndpoint } from './role-permission-endpoint.service';
import { AuthService } from './auth.service';
import { rolePermissionResponse } from '../models/role-permission.model';
import { rolePermission } from '../models/role-permission.model';
import { Permission, PermissionNames, PermissionValues } from '../models/permission.model';
import { UserEdit } from '../models/user-edit.model';

export type RolesChangedOperation = "add" | "delete" | "modify";
export type RolesChangedEventArg = { roles: rolePermissionResponse[] | string[], operation: RolesChangedOperation };

@Injectable()
export class RolePermissionService {

    public static readonly roleAddedOperation: RolesChangedOperation = "add";
    public static readonly roleDeletedOperation: RolesChangedOperation = "delete";
    public static readonly roleModifiedOperation: RolesChangedOperation = "modify";

    private _rolesChanged = new Subject<RolesChangedEventArg>();

    constructor(private router: Router, private http: HttpClient, private authService: AuthService,
        private rolePermissionEndpoint: RolePermissionEndpoint) {

    }

    userHasPermission(permissionValue: PermissionValues): boolean {
        return this.permissions.some(p => p == permissionValue);
    }
    
    getRolePermission(roleId?: number) {
        return this.rolePermissionEndpoint.getRolePermissionEndpoint<rolePermissionResponse>(roleId);
    }

    saveRolePermission(rolePermission: any) {
        return this.rolePermissionEndpoint.saveRolePermissionEndpoint<rolePermission>(rolePermission);
    }

    get permissions(): PermissionValues[] {
        return this.authService.userPermissions;
    }

    get currentUser() {
        return this.authService.currentUser;
    }
}
