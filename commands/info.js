const Discord = require("discord.js");

module.exports.run = async(bot, message, run) =>{
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
        .setColor("#e53030")
        .setThumbnail(sicon)
        .addField("Server name", message.guild.name)
        .addField("You Joined", message.guild.joinedAt);

        message.channel.send(serverembed);
}
module.exports.help = {
  name: "info"
}
