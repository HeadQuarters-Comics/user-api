const crypto = require("crypto");

const crypto_params = {
    algorithm  : "aes256",
    secret : "chaves",
    type: "hex"
};

module.exports = {    
    encrypt(senha) {
        const cipher = crypto.createCipher(crypto_params.algorithm, crypto_params.secret);
        cipher.update(String(senha));
        return cipher.final(crypto_params.type);
    },

    idGenerate(param) {
        const cipher = crypto.createCipher("aes-128", crypto_params.secret);
        cipher.update(String(param));
        return cipher.final(crypto_params.type);
    }
}