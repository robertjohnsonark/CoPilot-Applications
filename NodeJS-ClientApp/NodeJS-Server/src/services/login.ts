import db from '../dbs/db';
import crypto from '../helpers/encryptDecrypt';
import * as sql from 'mssql';

var key: string = 'tom@134';

export default class login {
    static validateLogin(objLogin: any, callBack: any) {
        try {
            //console.log(crypto.encrypt(key, objLogin.password))
            new sql.Request(db)
                .input('emailId', sql.VarChar(50), objLogin.username)
                .input('password', sql.VarChar(50), crypto.encrypt(key, objLogin.password))
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