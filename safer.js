const {algorithm} = require('cryptian');
const crypto = require('crypto');
const safer = algorithm.Saferplus();
const fs = require('fs');

function timeDiff(start, end) {
    return end - start;
}

const key = crypto.randomBytes(128).toString('hex'); // Generate 128 bit long key
safer.setKey(key);
const plaintext = "Hello World"

const start = new Date();
for (i = 1; i <= 1000; i++) {
    let ciphertext = safer.encrypt(plaintext);
    fs.appendFileSync('safer+encrypted.txt', ciphertext.toString('hex'));
    let decrypted = safer.decrypt(ciphertext);
}
const end = new Date();
console.log(timeDiff(start, end));
