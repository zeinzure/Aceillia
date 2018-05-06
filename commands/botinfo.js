const Discord = require("discord.js");

module.exports.run = async(bot, message, run) =>{
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#e53030")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created on", bot.user.createdAt);

       message.channel.send(botembed);

}
module.exports.help = {
  name: "botinfo"
}
