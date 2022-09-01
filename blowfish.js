const blf = require('blowfish-js');
const crypto = require('crypto');
const fs = require('fs');

function timeDiff(start, end) {
    return end - start;
}


const key = crypto.randomBytes(128); // Generate 128 bit long key
const iv = crypto.randomBytes(8);

const context = blf.key(key);
const plaintext = 'Hello World';

const start = new Date();
for (i = 1; i <= 1000; i++) {
    let ciphertext = blf.ofb(context, iv, Buffer.from(plaintext, 'utf8'));
    fs.appendFileSync('blowfishencrypted.txt', ciphertext.toString('hex'));
    let decrypted = blf.ofb(context, iv, ciphertext, true);
}
const end = new Date();
console.log(timeDiff(start, end));