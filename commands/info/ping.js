const { Client, Message } = require('whatsapp-web.js');

module.exports = {
    name: 'ping',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        message.reply(`🏓Latency is ${Date.now() - message.timestamp}ms.`);
    }
}