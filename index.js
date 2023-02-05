const { Client, LocalAuth } = require('whatsapp-web.js');
const { Collection } = require('@discordjs/collection');
require('dotenv').config();

const client = new Client({
    authStrategy: new LocalAuth()
});

module.exports = client;

// Global Variables
client.commands = new Collection();

require("./handler")(client);

client.initialize();