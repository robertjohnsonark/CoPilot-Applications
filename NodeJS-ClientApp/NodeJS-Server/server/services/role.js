"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_permission_1 = require("../db-layer/roles-permission");
class rolePermission {
    static getRolePermission(emailId, callBack) {
        try {
            roles_permission_1.default.getRolePermission(emailId, function (res) {
                callBack(res);
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }
    static saveRolePermission(rolePermission, callBack) {
        try {
            //for (let i = 0; i <= rolePermission.permissions.length; i++) {
            roles_permission_1.default.saveRolePermission(rolePermission, function (res) {
                console.log("Result: ", res);
                callBack(res);
            });
            //}
            //dbRolePermission.getSingleRolePermission(rolePermission.roleId, function (res) {
            //   callBack(res);
            //})
        }
        catch (exception) {
            console.log(exception);
        }
    }
}
exports.default = rolePermission;
