const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpEmbed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#e53030")
  .addField("Commands", "help, serverinfo, botinfo, info, say");

  message.channel.send(helpEmbed);
  if(message.member.hasPermission("MANAGE_MESSAGES")){
  let modEmbed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor("#e53030")
  .addField("Commands", "ban, kick, report");

  try{
    await message.author.send(modEmbed);
  }catch(e){
    message.reply("oof.");
  }
}
}

module.exports.help = {
  name: "help"
}
