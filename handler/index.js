const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("whatsapp-web.js");

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */

module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require('../' + value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    const eventFiles = await globPromise(`events/*.js`);
    eventFiles.map((value) => require('../' + value));
}