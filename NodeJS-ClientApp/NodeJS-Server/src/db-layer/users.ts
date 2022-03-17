import db from '../dbs/db';
import * as sql from 'mssql';
import crypto from '../helpers/encryptDecrypt';
var key: string = 'tom@134';

export default class users {
    static getUsers(callBack: any) {
        try {
            new sql.Request(db)
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

    static getUser(emailId: string, callBack: any) {
        try {
            new sql.Request(db)
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

    static saveUser(userId, objUser, callBack: any) {
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
            new sql.Request(db)
                .input('userId', sql.Int, userId)
                .input('name', sql.NVarChar(100), objUser.userName)
                .input('fullname', sql.NVarChar(100), objUser.fullName)
                .input('emailId', sql.NVarChar(100), objUser.email)
                .input('jobtitle', sql.NVarChar(100), objUser.jobTitle)
                .input('phone', sql.NVarChar(20), objUser.phoneNumber)
                .input('currentPassword', sql.NVarChar(100), objUser.currentPassword != null ? crypto.encrypt(key, objUser.currentPassword): objUser.currentPassword)
                .input('newPassword', sql.NVarChar(100), objUser.newPassword != null ? crypto.encrypt(key, objUser.newPassword): objUser.newPassword)
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