// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

export type PermissionNames =
    "View Users" | "Manage Users" |
    "View Roles" | "Manage Roles" | "Assign Roles" | "Products View" | "Permissions View" | "Role Permission View";

export type PermissionValues =
    "users.view" | "users.manage" |
    "roles.view" | "roles.manage" | "roles.assign" | "view.products" | "view.permissions" | "role.permissions"
    | "role-forward" | "role-backward" | "role-forward-all" | "role-backward-all" | "role-save-changes";

export class Permission {

    public static readonly viewUsersPermission: PermissionValues = "users.view";
    public static readonly viewProductsPermission: PermissionValues = "view.products";
    public static readonly viewPermissionsPermission: PermissionValues = "view.permissions";
    public static readonly viewRolePermissionsPermission: PermissionValues = "role.permissions";

    public static readonly manageUsersPermission: PermissionValues = "users.manage";

    public static readonly viewRolesPermission: PermissionValues = "roles.view";
    public static readonly manageRolesPermission: PermissionValues = "roles.manage";
    public static readonly assignRolesPermission: PermissionValues = "roles.assign";

    //role-permission
    public static readonly moveForwardPermission: PermissionValues = "role-forward";
    public static readonly moveAllForwardPermission: PermissionValues = "role-backward";
    public static readonly moveBackwardPermission: PermissionValues = "role-forward-all";
    public static readonly moveAllBackwardPermission: PermissionValues = "role-backward-all";
    public static readonly saveChangesPermission: PermissionValues = "role-save-changes";
    //role-permission end

    constructor(name?: PermissionNames, value?: PermissionValues, groupName?: string, description?: string) {
        this.name = name;
        this.value = value;
        this.groupName = groupName;
        this.description = description;
    }

    public name: PermissionNames;
    public value: PermissionValues;
    public groupName: string;
    public description: string;
}
