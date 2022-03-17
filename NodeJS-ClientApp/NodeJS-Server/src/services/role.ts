import dbRolePermission from '../db-layer/roles-permission';
import { callbackify } from 'util';

export default class rolePermission {
    static getRolePermission(emailId: string, callBack: any) {
        try {
            dbRolePermission.getRolePermission(emailId, function (res) {
                callBack(res);
            })
        }
        catch (exception) {
            console.log(exception);
        }
    }

    static saveRolePermission(rolePermission, callBack: any) {
        try {
            //for (let i = 0; i <= rolePermission.permissions.length; i++) {
                dbRolePermission.saveRolePermission(rolePermission, function (res) {
                    console.log("Result: ", res);
                    callBack(res);
                })
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