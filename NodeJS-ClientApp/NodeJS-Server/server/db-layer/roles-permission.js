"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../dbs/db");
const sql = require("mssql");
class rolePermission {
    static getRolePermission(emailId, callBack) {
        try {
            console.log('Requested EmailId: ', emailId);
            new sql.Request(db_1.default)
                .input('emailId', sql.NVarChar(100), emailId)
                .execute('spRetrieveRolePermission', (error, result) => {
                if (error) {
                    callBack({ status: false, error: error });
                }
                else {
                    var isSuccess = result.recordset != undefined;
                    callBack({ status: (isSuccess ? true : false), data: (isSuccess ? result.recordsets : null) });
                }
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }
    static saveRolePermission(objRole, callBack) {
        try {
            var xml = '<permissions>';
            for (var i = 0; i < objRole.permissions.length; i++) {
                xml += '<permission><value>' + objRole.permissions[i].permission + '</value></permission>';
            }
            xml += '</permissions>';
            console.log("xml: ", xml, 'roleId: ', objRole.role.roleId);
            new sql.Request(db_1.default)
                .input('roleId', sql.Int, objRole.role.roleId)
                .input('permissions', sql.NVarChar(2000), JSON.stringify(xml))
                .execute('spSaveRolePermission', (error, result) => {
                console.log("Result: ", result, "Error: ", error);
                if (error) {
                    callBack({ status: false, error: error });
                }
                else {
                    var isSuccess = result.recordset != undefined;
                    callBack({ status: (isSuccess ? true : false), data: (isSuccess ? result.recordset : null) });
                }
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }
}
exports.default = rolePermission;
