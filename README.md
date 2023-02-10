whatsapp-web.js base handler
============

A base handler to make easier the creation of commands and events using whatsapp-web.js

## First Steps
In order to start the bot, you need to have [Node.js](https://nodejs.org/en/download/) installed and install all the dependencies using the following command:
> **Note** To learn more about the necessary requirements such as the version of Node.js needed, please visit the [official whatsapp-web.js documentation](https://wwebjs.dev/).
```sh
npm install
```

Then rename `.env.example` file to `.env`, open it and replace `BOT_PREFIX` value with the prefix you want.

Once you have installed all the dependencies, run:
```sh
node .
```

or

```sh
node index.js
```

## Dependencies used in this project:
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [@discordjs/collection](https://www.npmjs.com/package/@discordjs/collection)
* [glob](https://www.npmjs.com/package/glob)
* [whatsapp-web.js](https://www.npmjs.com/package/whatsapp-web.js)
