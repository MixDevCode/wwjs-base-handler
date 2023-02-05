const qrcode = require('qrcode-terminal');
const client = require('../index');

client.on("qr", qr => {
    qrcode.generate(qr, {small: true});
});