const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disabelEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
})


bot.on("ready", async() => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  bot.user.setActivity(`${bot.guilds.size} servers`, {type: "WATCHING"});
  // bot.user.setActivity("ACEILLIA", {type: "WATCHING"});
});

bot.on("message", message => {
  if(message.content === "who is the best kween"){
    message.channel.send("ACEILLIA!");
  }
});

bot.on("message", message => {
  if(message.content === "who is the best admin"){
    message.channel.send("<@!" + 215088092351037440 + ">");
  }
});

bot.on("message", message => {
  if(message.content === "what is my avatar"){
    message.reply(message.author.avatarURL);
  }
});


bot.on("message",async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(cmd === `${prefix}ace`){
    return message.channel.send("KWEEN ACEILLIA")
  }

  if(cmd === `${prefix}hi`){
    return message.channel.send("Senpai!")
  }
  if(cmd === `${prefix}xd`){
    return message.channel.send("Baka!")
  }
});

bot.login(tokenfile.token);
