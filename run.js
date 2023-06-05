const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    if(message.body === '/menu') {
        client.sendMessage(message.from, 'Menu BOT :\n /Jadwal\n /Cuaca \n /Info');
    }
    if(message.body === '/jadwal') {
        client.sendMessage(message.from, 'pong');
    }
    if(message.body === '/cuaca') {
        client.sendMessage(message.from, 'pong');
    }
    if(message.body === '/info') {
        client.sendMessage(message.from, 'pong');
    }
    if(message.body === true) {
        client.sendMessage(message.from, 'Test');
    }
});


client.initialize();
