const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
   let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!rUser) return message.channel.send("Couldn't find User.");
   let rreason = args.join(" ").slice(22);
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("oof.");
   if(rUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't do that boi");

   let reportEmbed = new Discord.RichEmbed()
     .setDescription("Reports")
     .setColor("#e53030")
     .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
     .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
     .addField("Channel", message.channel)
     .addField("Time", message.createdAt)
     .addField("Reason", rreason);

   let reportschannel = message.guild.channels.find(`name`, "bot_alerts");
   if(!reportschannel) return message.channel.send("Couldn't find reports channel")

     message.delete().catch(O_o=>{});
     reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
