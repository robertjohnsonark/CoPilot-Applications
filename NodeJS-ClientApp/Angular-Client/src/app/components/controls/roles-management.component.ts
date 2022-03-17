// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { AlertService, DialogType, MessageSeverity } from '../../services/alert.service';
import { AppTranslationService } from "../../services/app-translation.service";
import { RolePermissionService } from '../../services/role-permission.service';
import { Utilities } from '../../services/utilities';
import { Role } from '../../models/role.model';
import { Permission, PermissionValues } from '../../models/permission.model';
import { RoleEditorComponent } from "./role-editor.component";
import { utils } from 'protractor';


@Component({
    selector: 'roles-management',
    templateUrl: './roles-management.component.html',
    styleUrls: ['./roles-management.component.css']
})
export class RolesManagementComponent implements OnInit, AfterViewInit {
    columns: any[] = [];
    rows: Role[] = [];
    rowsCache: Role[] = [];
    allPermissions: PermissionValues[] = [];
    editedRole: Role;
    sourceRole: Role;
    editingRoleName: { name: string };
    loadingIndicator: boolean;
    rolePermissions: any = [];
    rolePermission: any = {};
    assignedPermissions: any = [];
    unassignedPermissions: any = [];
    statusMessage: string = "";

    @ViewChild('indexTemplate')
    indexTemplate: TemplateRef<any>;

    @ViewChild('actionsTemplate')
    actionsTemplate: TemplateRef<any>;

    @ViewChild('editorModal')
    editorModal: ModalDirective;

    @ViewChild('roleEditor')
    roleEditor: RoleEditorComponent;

    constructor(private alertService: AlertService, private translationService: AppTranslationService, private rolePermissionService: RolePermissionService) {
    }


    ngOnInit() {
        this.loadData();
    }

    ngAfterViewInit() {
    }

    loadData() {
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;

        this.rolePermissionService.getRolePermission()
            .subscribe(results => {
                this.alertService.stopLoadingMessage();
                this.loadingIndicator = false;

                let roles: any = results.roles;
                this.rolePermissions = results.permissions;

                this.rowsCache = [...roles];

                this.rows = roles.filter(r => Utilities.searchNotInArray("0", false, r.roleId + ""));
                console.log("Except main role: ", this.rows);

                this.allPermissions = Array.isArray(results.accessPermissions) ? results.accessPermissions : [results.accessPermissions];
            },
                error => {
                    this.alertService.stopLoadingMessage();
                    this.loadingIndicator = false;

                    this.alertService.showStickyMessage("Load Error", `Unable to retrieve roles from the server.\r\nErrors: "${Utilities.getHttpResponseMessage(error)}"`,
                        MessageSeverity.error, error);
                });
    }

    managePermission(role) {
        console.log('roleId: ', role);

        //Filter the permission as assigned & unassigned
        console.log(this.rolePermissions);
        this.rolePermission = role;
        this.assignedPermissions = [];
        this.unassignedPermissions = [];
        this.assignedPermissions = this.rolePermissions.filter(r => Utilities.searchArray(role.roleId + "", false, r.roleId + ""));
        let mainPermissions = this.rolePermissions.filter(r => Utilities.searchArray("0", false, r.roleId + ""));

        for (let i = 0; i < mainPermissions.length; i++) {
            let isExists = false;
            mainPermissions[i].selected = false;
            for (let j = 0; j < this.assignedPermissions.length; j++) {
                if (mainPermissions[i].permission === this.assignedPermissions[j].permission && !isExists) {
                    isExists = true;
                }
                this.assignedPermissions[j].selected = false;
            }
            if (!isExists) {
                this.unassignedPermissions[this.unassignedPermissions.length] = mainPermissions[i];
            }
        }

        console.log("Assigned Permission: ", this.assignedPermissions);
        console.log("Main Permission Permission: ", mainPermissions);
        console.log("UnAssigned Permission: ", this.unassignedPermissions);
        this.editorModal.show();
    }

    saveChanges() {
        console.log("Assigned Permissions: ", this.assignedPermissions);

        let objSave = {
            role: this.rolePermission,
            permissions: this.assignedPermissions
        };
        console.log("Save Changes: ", objSave)
        this.rolePermissionService.saveRolePermission(objSave)
            .subscribe(results => {
                if (results.status) {
                    this.statusMessage = "savedSuccessfully!!!"
                    this.editorModal.hide();
                    this.alertService.stopLoadingMessage();
                    this.loadingIndicator = false;

                    this.rolePermissions = results.permissions;

                    //this.allPermissions = Array.isArray(results.accessPermissions) ? results.accessPermissions : [results.accessPermissions];
                }
            },
                error => {
                    this.alertService.stopLoadingMessage();
                    this.loadingIndicator = false;

                    this.alertService.showStickyMessage("Load Error", `Unable to retrieve roles from the server.\r\nErrors: "${Utilities.getHttpResponseMessage(error)}"`,
                        MessageSeverity.error, error);
                });
    }

    moveForward() {
        console.log("Selected Permission: ", this.unassignedPermissions);

        for (let i = 0; i < this.unassignedPermissions.length; i++) {
            if (this.unassignedPermissions[i].selected != null && this.unassignedPermissions[i].selected) {
                let item = this.unassignedPermissions[i];
                this.assignedPermissions[this.assignedPermissions.length] = { permissionId: item.permissionId, permission: item.permission, roleId: this.rolePermission.roleId };
            }
        }

        this.unassignedPermissions = this.unassignedPermissions.filter(t => Utilities.searchArray("false", false, (t.selected == null ? "false" : t.selected + "")));
    }

    moveAllForward() {
        console.log("Selected Permission: ", this.unassignedPermissions);

        for (let i = 0; i < this.unassignedPermissions.length; i++) {
            let item = this.unassignedPermissions[i];
            this.assignedPermissions[this.assignedPermissions.length] = { permissionId: item.permissionId, permission: item.permission, roleId: this.rolePermission.roleId };
        }

        this.unassignedPermissions = []
    }

    moveBackward() {
        console.log("Selected Permission: ", this.unassignedPermissions);

        for (let i = 0; i < this.assignedPermissions.length; i++) {
            if (this.assignedPermissions[i].selected != null && this.assignedPermissions[i].selected) {
                let item = this.assignedPermissions[i];
                this.unassignedPermissions[this.unassignedPermissions.length] = { permissionId: item.permissionId, permission: item.permission, roleId: 0 };
            }
        }

        this.assignedPermissions = this.assignedPermissions.filter(t => Utilities.searchArray("false", false, (t.selected == null ? "false" : t.selected + "")));
    }

    moveAllBackward() {
        console.log("Selected Permission: ", this.unassignedPermissions);

        for (let i = 0; i < this.assignedPermissions.length; i++) {
            let item = this.assignedPermissions[i];
            this.unassignedPermissions[this.unassignedPermissions.length] = { permissionId: item.permissionId, permission: item.permission, roleId: this.rolePermission.roleId };
        }

        this.assignedPermissions = []
    }

    onSearchChanged(value: string) {
        this.rows = this.rowsCache.filter(r => Utilities.searchArray(value, false, r.name, r.description));
    }


    onEditorModalHidden() {
        this.editingRoleName = null;
    }



   /* newRole() {
        this.editingRoleName = null;
        this.sourceRole = null;
        this.editedRole = this.roleEditor.newRole(this.allPermissions);
        this.editorModal.show();
    }


    editRole(row: Role) {
        this.editingRoleName = { name: row.name };
        this.sourceRole = row;
        this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
        this.editorModal.show();
    }
*/
    closeModel() {
        this.editorModal.hide();
    }

    get canManageRoles() {
        return this.rolePermissionService.userHasPermission(Permission.manageRolesPermission)
    }

    get canMoveForward() {
        return this.rolePermissionService.userHasPermission(Permission.moveForwardPermission)
    }

    get canMoveAllForward() {
        return this.rolePermissionService.userHasPermission(Permission.moveAllForwardPermission)
    }

    get canMoveBackward() {
        return this.rolePermissionService.userHasPermission(Permission.moveBackwardPermission)
    }

    get canMoveAllBackward() {
        return this.rolePermissionService.userHasPermission(Permission.moveAllBackwardPermission)
    }

    get canSaveChanges() {
        return this.rolePermissionService.userHasPermission(Permission.saveChangesPermission)
    }

}
