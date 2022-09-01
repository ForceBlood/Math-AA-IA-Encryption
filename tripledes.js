const Encryption = require('node_triple_des');
const fs = require('fs');

function timeDiff(start, end) {
    return end - start;
}

const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // 128 bit key
const text = 'Hello World';

const start = new Date();
for (i = 1; i <= 1000; i++) {
    var encrypted = Encryption.encrypt(key, text);
    fs.appendFileSync('tripledesencrypted.txt', encrypted.toString('hex'));
    var decrypted = Encryption.decrypt(key, encrypted);
}
const end = new Date();
console.log(timeDiff(start, end));