const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs");
// const invent = require("./inventories.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})



client.on('message', msg => {
    if (msg.content.substring(0, 1) == '&') {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];
        var option1;
        if (args.length != 0){
            option1 = args[1];
        }
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                msg.channel.send("Tu es laid")
                break;
            case 'help':
                msg.channel.send(" ping help ")
                break;
            case 'inventory':
                let invent = JSON.parse(fs.readFileSync("./inventories.json", "utf8"));
                if (option1 == "addUser"){
                    invent[msg.author.id] = {
                        sac : "un bon gros boule"
                    };
                    fs.writeFile("./inventories.json", JSON.stringify(invent),function(err, result) {
                        if(err) console.log('error', err);
                      })
                } else {
                    msg.channel.send(invent[msg.author.id].sac);
                }
                
            break;
         }
     }
  })
// process.env.BOT_TOKEN
client.login(process.env.BOT_TOKEN)