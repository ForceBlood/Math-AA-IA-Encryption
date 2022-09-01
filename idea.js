const IDEA = require('idea-cipher')
const crypto = require('crypto');
const fs = require('fs');

const key = crypto.randomBytes(128).toString('hex'); // Generate 128 bit long key

const cipher = new IDEA(key)

function buf2hex(buffer) { // buffer is an ArrayBuffer
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('');
  }

function timeDiff(start, end) {
    return end - start;
}

const start = new Date();
for (i = 1; i <= 1000; i++) {
let encrypted = cipher.encrypt('Hello World')
fs.appendFileSync('ideaencrypted.txt', buf2hex(encrypted.buffer));
let decrypted = cipher.decrypt(encrypted)
}
const end = new Date();
console.log(timeDiff(start, end));
