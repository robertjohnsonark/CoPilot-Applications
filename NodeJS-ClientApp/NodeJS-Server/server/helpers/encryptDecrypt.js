"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
var algorithm = 'aes-256-ctr';
class cryptoHandler {
    static encrypt(key, value) {
        var cipher = crypto.createCipher(algorithm, key);
        var crypted = cipher.update(value, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    static decrypt(key, value) {
        var decipher = crypto.createDecipher(algorithm, key);
        var decrypted = decipher.update(value, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}
exports.default = cryptoHandler;
