const Discord = require("discord.js");

module.exports.run = async(bot, message, run) =>{
  let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#e53030")
        .setThumbnail(sicon)
        .addField("Server name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("Total Members", message.guild.memberCount);

        message.channel.send(serverembed);
}
module.exports.help ={
  name: "serverinfo"
}
