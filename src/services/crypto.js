const crypto = require("crypto");
const cipher = crypto.createCipher(cyrpto_params.algoritmo, cyrpto_params.segredo);

const cyrpto_params = {
    algorithm  : "aes256",
    secret : "chaves",
    type: "hex"
};

function criptografar(senha) {
    const cipher = crypto.createCipher(cyrpto_params.algorithm, cyrpto_params.secret);
    cipher.update(senha);
    return cipher.final(cyrpto_params.type);
};