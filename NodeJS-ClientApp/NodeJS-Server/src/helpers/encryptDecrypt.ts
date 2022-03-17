
import * as crypto from 'crypto';
var algorithm: string = 'aes-256-ctr';

export default class cryptoHandler {
    static encrypt(key: string, value: string) : string {
        var cipher = crypto.createCipher(algorithm, key)
		var crypted = cipher.update(value, 'utf8', 'hex')
		crypted += cipher.final('hex');
		return crypted;
    }

    static decrypt(key: string, value: string) : string {
        var decipher = crypto.createDecipher(algorithm, key)
		var decrypted = decipher.update(value, 'hex', 'utf8')
		decrypted += decipher.final('utf8');
		return decrypted;
    }
}