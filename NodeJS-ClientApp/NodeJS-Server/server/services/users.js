"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../db-layer/users");
class users {
    static getUsers(callBack) {
        try {
            users_1.default.getUsers(function (res) {
                callBack(res);
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }
    static getUser(emailId, callBack) {
        try {
            users_1.default.getUser(emailId, function (res) {
                callBack(res);
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }
    static saveUser(userId, user, callBack) {
        try {
            users_1.default.saveUser(userId, user, function (res) {
                console.log("Result: ", res);
                callBack(res);
            });
        }
        catch (exception) {
            console.log(exception);
        }
    }
}
exports.default = users;
