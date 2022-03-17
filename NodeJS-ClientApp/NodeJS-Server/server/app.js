"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const login_1 = require("./services/login");
const role_1 = require("./services/role");
const tokenHandler_1 = require("./helpers/tokenHandler");
const bodyParser = require("body-parser");
const path = require("path");
var app = express();
let client = path.join(__dirname, '../client');
const router = express.Router();
//// This will help us to get the data from POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(client));
app.use((req, res, next) => {
    console.log("Token: ", req.get("token"));
    console.log("EmailId: ", req.get("emailId"));
    console.log("Reaching here..");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "emailId, App-Version, Authorization, GET, POST, token, XSRF-TOKEN, Origin, x-ms-request-id, x-ms-request-root-id, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/api/get-role-permissions', (req, res) => {
    role_1.default.getRolePermission(req.get("emailId"), function (result) {
        if (res.status) {
            res.send({ status: true, roles: result.data[0], permissions: result.data[1], accessPermissions: result.data[2] });
        }
        else {
            res.send({ status: false, err: {} });
        }
    });
});
app.post('/api/save-role-permissions', (req, res) => {
    var rolePerm = req.body;
    role_1.default.saveRolePermission(rolePerm, function (result) {
        console.log("Result: ", result);
        if (res.status) {
            res.send({ status: true, permissions: result.data });
        }
        else {
            res.send({ status: false, err: {} });
        }
    });
});
app.post('/api/login', (req, res) => {
    console.log("Request is: ", req.body);
    login_1.default.validateLogin(req.body, function (result) {
        if (result.status) {
            let decodedIdToken = result.data[0][0];
            let permissions = [];
            for (var i = 0; i < result.data[1].length; i++) {
                permissions[i] = result.data[1][i].permission;
            }
            decodedIdToken.permission = permissions;
            var userToken = tokenHandler_1.default.generateToken(decodedIdToken);
            var reslt = {
                access_token: userToken,
                refresh_token: userToken,
                expires_in: 3600,
                status: true,
                user: decodedIdToken
            };
            res.send(reslt);
        }
        else {
            res.status = 401;
            res.json({ status: false, error: result.error, result: {} });
        }
    });
});
