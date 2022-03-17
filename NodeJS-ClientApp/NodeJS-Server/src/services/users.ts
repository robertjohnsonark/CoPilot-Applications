import dbUsers from '../db-layer/users';
import { callbackify } from 'util';

export default class users {
    static getUsers(callBack: any) {
        try {
            dbUsers.getUsers(function (res) {
                callBack(res);
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }

    static getUser(emailId: string, callBack: any) {
        try {
            dbUsers.getUser(emailId, function (res) {
                callBack(res);
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }
    
    static saveUser(userId, user, callBack: any) {
        try {
            
            dbUsers.saveUser(userId, user, function (res) {
                console.log("Result: ", res);
                callBack(res);
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }
}