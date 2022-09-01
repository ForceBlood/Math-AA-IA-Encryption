const aesjs = require('aes-js');
const fs = require('fs');

function timeDiff(start, end) {
    return end - start;
}

const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // 128 bit key

const text = 'Hello World';
const textBytes = aesjs.utils.utf8.toBytes(text);


const start = new Date();
for (i = 1; i <= 1000; i++) {
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);

    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    fs.appendFileSync('aesencrypted.txt', encryptedHex);

    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
}
const end = new Date();
console.log(timeDiff(start, end));