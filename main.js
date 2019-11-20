const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})



client.on('message', msg => {
    if (msg.content.substring(0, 1) == '!') {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                msg.channel.send("Tu es laid")
            break;
            // Just add any case commands if you want to..
         }
     }
  })

  client.on('typingStart', jsp => {
    
  })

client.login('NjQ2NjI0NjA1Nzc1MDY5MTg1.XdT5kg.aBWl_Yz2qEUhON6KH8VvfxJoNn4')