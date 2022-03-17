"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../dbs/db");
const sql = require("mssql");
const encryptDecrypt_1 = require("../helpers/encryptDecrypt");
var key = 'tom@134';
class users {
    static getUsers(callBack) {
        try {
            new sql.Request(db_1.default)
                .execute('spRetrieveUsers', (error, result) => {
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
    static getUser(emailId, callBack) {
        try {
            new sql.Request(db_1.default)
                .input('emailId', sql.NVarChar(200), emailId)
                .execute('spRetrieveCurrentUser', (error, result) => {
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
    static saveUser(userId, objUser, callBack) {
        try {
            /*
  User ID:  3
Body:  { id: 3,
  userName: 'Tom',
  fullName: 'Parker',
  email: 'superadmin@abc.com',
  jobTitle: 'Owner',
  phoneNumber: '9886811237',
  roles: [ 'SuperAdmin' ],
  currentPassword: 'cvbcvb',
  newPassword: '123123',
  confirmPassword: '123123',
  roleName: 'SuperAdmin',
  status: true }
Token:  undefined
EmailId:  undefined
Reaching here..

  */
            new sql.Request(db_1.default)
                .input('userId', sql.Int, userId)
                .input('name', sql.NVarChar(100), objUser.userName)
                .input('fullname', sql.NVarChar(100), objUser.fullName)
                .input('emailId', sql.NVarChar(100), objUser.email)
                .input('jobtitle', sql.NVarChar(100), objUser.jobTitle)
                .input('phone', sql.NVarChar(20), objUser.phoneNumber)
                .input('currentPassword', sql.NVarChar(100), objUser.currentPassword != null ? encryptDecrypt_1.default.encrypt(key, objUser.currentPassword) : objUser.currentPassword)
                .input('newPassword', sql.NVarChar(100), objUser.newPassword != null ? encryptDecrypt_1.default.encrypt(key, objUser.newPassword) : objUser.newPassword)
                .execute('spSaveUpdateUser', (error, result) => {
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
exports.default = users;
