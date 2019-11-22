const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs");
// const invent = require("./inventories.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})



client.on('message', msg => {
    if (msg.content.substring(0, 1) == /*'&' */process.env.PREFIX) {
        console.log(msg.content);
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
            case 'fastHelp':
                msg.channel.send("``` \n - help \n - fastHelp \n - ping \n - TableFlipped \n - DeathWishOscuro \n - DisrespectIris \n - ConqVath \n - ChouinAniel \n - RageVahelia \n - inventory add/rm \n - powers add/rm```");
                break;
            case 'hug':
                msg.reply(" Tiens, un gros calinou ! ")
                break;
            case 'help':
                msg.channel.send("Voir le Readme sur le lien \n https://github.com/nicolasdausque/lol/blob/master/README.md ")
                break;
            case 'addUser':
                if (invent[msg.author.id] == null) {
                    invent[msg.author.id] = { sac: [], powers: [] };

                    fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                }
                break;
            case 'RageVahelia':
                switch (option1) {
                    case '+':
                        invent['RageVahelia'] += 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    case '-':
                        invent[RageVahelia] -= 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    default:
                        msg.channel.send("Vahélia la pire des tchoins a ragé " + invent['RageVahelia'] + " fois !");
                        break;
                }
                break;
            case 'ChouinAniel':
                switch (option1) {
                    case '+':
                        invent['ChouinAniel'] += 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    case '-':
                        invent[RageVahelia] -= 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    default:
                        msg.channel.send("Aniel le chouineur a frappé " + invent['ChouinAniel'] + " fois !");
                        break;
                }
                break;

            case 'ConqVath':
                switch (option1) {
                    case '+':
                        invent['ConqVath'] += 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    case '-':
                        invent[RageVahelia] -= 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    default:
                        msg.channel.send("Valoulou, best boi, mon petit su.. enfin, Vath quoi a pecho " + invent['ConqVath'] + " fois !");
                        break;
                }
                break;

            case 'DisrespectIris':
                switch (option1) {
                    case '+':
                        invent['DisrespectIris'] += 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    case '-':
                        invent[RageVahelia] -= 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    default:
                        msg.channel.send("Nombre de fois où Iris s'est fait chier dessus : " + invent['DisrespectIris'] + " fois !");
                        break;
                }
                break;

            case 'DeathWishOscuro':
                switch (option1) {
                    case '+':
                        invent['DeathWishOscuro'] += 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    case '-':
                        invent[RageVahelia] -= 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    default:
                        msg.channel.send("Oscuro stp crève : " + invent['DeathWishOscuro'] + " fois !");
                        break;
                }
                break;
            case 'TableFlipped':
                switch (option1) {
                    case '+':
                        invent['TableFlipped'] += 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    case '-':
                        invent[RageVahelia] -= 1;
                        fs.writeFile("./inventories.json", JSON.stringify(invent), function (err, result) { if (err) console.log('error', err); })
                        break;
                    default:
                        msg.channel.send("Nombre de tables maltraitées : " + invent['TableFlipped'] + " fois !");
                        break;
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
                break;
            case 'MJ':
                let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
                let us = 1;
                var michelo = "```";
                while (users[us] != undefined) {
                    michelo = michelo + "# " + invent[users[us]].name + " : \n\n## Inventaire : \n";
                    for (let index = 0; index < invent[users[us]].sac.length; index++) {
                        michelo = michelo + "- " + invent[users[us]].sac[index] + "\n";
                    }
                    michelo = michelo + "\n## Pouvoirs : \n";
                    for (let index = 0; index < invent[users[us]].powers.length; index++) {
                        michelo = michelo + "- " + invent[users[us]].powers[index] + "\n";
                    }
                    michelo = michelo + "\n\n";
                    us++;
                }
                michelo = michelo + "```";
                msg.channel.send(michelo);


                break;
        }
    }
})

// 
client.login(process.env.BOT_TOKEN)