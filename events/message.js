const client = require('../index');

client.on('message', async message => {

    if (!message.body.toLowerCase().startsWith(process.env.BOT_PREFIX)) return;
    
    const [cmd, ...args] = message.body.substring(process.env.BOT_PREFIX.length).split(/ +/g);
        
    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
    
});