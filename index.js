const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const token = require("./config.json");
bot.on('ready' , () => {
    console.log(`Bot Logging At Discord ${bot.user.tag}!`);
});
bot.on('message' , msg =>{
    if (msg.content === 'lanjiao') {
        msg.reply("Jibai");
    }
})
bot.login(config.token);