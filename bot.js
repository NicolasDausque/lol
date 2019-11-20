const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs");
// const invent = require("./inventories.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})



client.on('message', msg => {
    if (msg.content.substring(0, 1) == '&' /*process.env.PREFIX*/) {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];

        var option1;
        var option2;
        if (args.length > 0) {
            option1 = args[1];
        }
        if (args.length > 1) {
            option2 = args[2];
            for (let index = 3; index < args.length; index++) {
                option2 = option2 + " " + args[index];

            }

        }
        args = args.splice(1);
        let invent = JSON.parse(fs.readFileSync("./inventories.json", "utf8"));
        switch (cmd) {
            // !ping
            case 'ping':
                msg.channel.send("Tu es laid")
                break;
            case 'help':
                msg.channel.send("ping addUser powers inventory help ")
                break;
            case 'addUser':
                if (invent[msg.author.id] == null) {
                    invent[msg.author.id] = { sac: [], powers: [] };

                    fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                }
                break;
            case 'powers':
                switch (option1) {
                    case 'add':

                        if (option2 != null) {

                            invent[msg.author.id].powers[invent[msg.author.id].powers.length] = option2;
                            fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        }
                        break;
                    case 'rm':

                        if (option2 != null) {
                            option2 -= 1;
                            var tab = [];
                            for (let index = 0; index < option2; index++) {
                                tab[index] = invent[msg.author.id].powers[index];
                            }
                            for (let index = option2 + 1; index < invent[msg.author.id].powers.length; index++) {
                                tab[index] = invent[msg.author.id].powers[index];
                            }
                            invent[msg.author.id].powers = tab;
                            fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        }
                        break;
                    default:
                        var michelo = "```# Powers : \n";
                        for (let index = 0; index < invent[msg.author.id].powers.length; index++) {
                            michelo = michelo + "- " + invent[msg.author.id].powers[index] + "\n";
                        }
                        michelo = michelo + "```";
                        msg.channel.send(michelo);
                        break;
                }
                break;
            case 'inventory':
                switch (option1) {
                    case 'add':
                        if (option2 != null) {
                            invent[msg.author.id].sac[invent[msg.author.id].sac.length] = option2;
                            fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        }
                        break;
                    case 'rm':
                        if (option2 != null) {
                            option2 -= 1;
                            var tab = [];
                            for (let index = 0; index < option2; index++) {
                                tab[index] = invent[msg.author.id].sac[index];
                            }
                            for (let index = option2 + 1; index < invent[msg.author.id].sac.length; index++) {
                                tab[index] = invent[msg.author.id].sac[index];
                            }
                            invent[msg.author.id].sac = tab;
                            fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        }
                        break;
                    default:
                        var michelo = "```# Inventaire : \n";
                        for (let index = 0; index < invent[msg.author.id].sac.length; index++) {
                            michelo = michelo + "- " + invent[msg.author.id].sac[index] + "\n";
                        }
                        michelo = michelo + "```";
                        msg.channel.send(michelo);
                        break;
                }
        }
    }
})
// process.env.BOT_TOKEN
client.login("NjQ2NjI0NjA1Nzc1MDY5MTg1.XdWTBw.nTvLTwiMcPo4i_cJhMzrhnci-Ac")