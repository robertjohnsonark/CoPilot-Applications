import * as jwt from 'jsonwebtoken';

const ACCESS_DENIED: string = "Access Denied";
const TOKEN_EXPIRED: string = "token expired";
const INVALID_ACCESS: string = "invalid access";
const SECRET_KEY: string = "dbst12%";

export default class tokenHadler {
    static generateToken(user: any): any {
        var forUser = {
            "username": user.emailId,
            "roleid": user.roleId
        };

        var token = jwt.sign(forUser, SECRET_KEY, {
            expiresIn: "15m"
        });

        return token;
    }

    static validateAndAuthorize(req, res, next) {
        var reqUrl = req.originalUrl;
        var token = req.get("token");

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "token, x-ms-request-id, x-ms-request-root-id, X-Requested-With, Content-Type, Accept");

        if (token) {
            ////Token is available so verify here		
            jwt.verify(token, SECRET_KEY, function (err, decode) {
                if (!err) {
                    next();
                }
                else {
                    res.status(401);
                    res.send({ "status": false, "message": TOKEN_EXPIRED });
                }
            });
        }
        else {
            ////Log invalid token for the user xxxxx
            res.send({ "status": false, "message": INVALID_ACCESS });
        }
    }
}
