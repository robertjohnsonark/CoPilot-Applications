"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../dbs/db");
const encryptDecrypt_1 = require("../helpers/encryptDecrypt");
const sql = require("mssql");
var key = 'tom@134';
class login {
    static validateLogin(objLogin, callBack) {
        try {
            //console.log(crypto.encrypt(key, objLogin.password))
            new sql.Request(db_1.default)
                .input('emailId', sql.VarChar(50), objLogin.username)
                .input('password', sql.VarChar(50), encryptDecrypt_1.default.encrypt(key, objLogin.password))
                .execute('spValidateLogin', (error, result) => {
                if (error) {
                    console.log(error);
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
}
exports.default = login;
