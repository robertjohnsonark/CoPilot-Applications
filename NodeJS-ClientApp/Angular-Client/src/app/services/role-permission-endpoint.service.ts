// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';

import { EndpointFactory } from './endpoint-factory.service';
import { ConfigurationService } from './configuration.service';


@Injectable()
export class RolePermissionEndpoint extends EndpointFactory {

    private readonly _rolePermissionUrl: string = "/api/get-role-permissions";
    private readonly _saverolePermissionUrl: string = "/api/save-role-permissions";
    private readonly _userByUserNameUrl: string = "/api/account/users/username";
    private readonly _currentUserUrl: string = "/api/account/users/me";
    private readonly _currentUserPreferencesUrl: string = "/api/account/users/me/preferences";
    private readonly _unblockUserUrl: string = "/api/account/users/unblock";
    private readonly _rolesUrl: string = "/api/account/roles";
    private readonly _roleByRoleNameUrl: string = "/api/account/roles/name";
    private readonly _permissionsUrl: string = "/api/account/permissions";

    get rolePermissionsUrl() { return this.configurations.baseUrl + this._rolePermissionUrl; }
    get savePermissionsUrl() { return this.configurations.baseUrl + this._saverolePermissionUrl; }
    get userByUserNameUrl() { return this.configurations.baseUrl + this._userByUserNameUrl; }
    get currentUserUrl() { return this.configurations.baseUrl + this._currentUserUrl; }
    get currentUserPreferencesUrl() { return this.configurations.baseUrl + this._currentUserPreferencesUrl; }
    get unblockUserUrl() { return this.configurations.baseUrl + this._unblockUserUrl; }
    get rolesUrl() { return this.configurations.baseUrl + this._rolesUrl; }
    get roleByRoleNameUrl() { return this.configurations.baseUrl + this._roleByRoleNameUrl; }
    get permissionsUrl() { return this.configurations.baseUrl + this._permissionsUrl; }

    constructor(http: HttpClient, configurations: ConfigurationService, injector: Injector, cookieService: CookieService) {
        super(http, configurations, injector, cookieService);
    }

    getRolePermissionEndpoint<T>(roleId?: number): Observable<T> {
        let endpointUrl = roleId ? `${this._rolePermissionUrl}/${roleId}` : this.rolePermissionsUrl;

        return this.http.get<T>(endpointUrl, this.getRequestHeaders())
            .catch(error => {
                return this.handleError(error, () => this.getRolePermissionEndpoint(roleId));
            });
    }

    saveRolePermissionEndpoint<T>(rolePermission: any): Observable<T> {
        let endpointUrl = this.savePermissionsUrl;

        console.log("Save Role Permission: ", rolePermission);
        return this.http.post<T>(endpointUrl, JSON.stringify(rolePermission), this.getRequestHeaders())
            .catch(error => {
                return this.handleError(error, () => this.saveRolePermissionEndpoint(rolePermission));
            });
    }
}
