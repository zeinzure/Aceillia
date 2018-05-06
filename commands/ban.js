const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.roles.some(r=>["Admin Kitten", "Admin"].includes(r.name)) )
     return message.reply("oof.");

   let bUser = message.mentions.members.first();
   if(!bUser)
     return message.reply("Please mention a valid member of this server");
   if(!bUser.bannable)
     return message.reply("I cannot ban this user!");

   let bReason = args.join(" ").slice(22);
   if(!bReason) return message.reply("You must supply a reason")

   let banEmbed = new Discord.RichEmbed()
     .setDescription("~Ban~")
     .setColor("#e53030")
     .addField("Banned User", `${bUser} with ID ${bUser.id}`)
     .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
     .addField("In Channel", message.channel)
     .addField("Time", message.createdAt)
     .addField("Reason", bReason);

   let banchannel = message.guild.channels.find(`name`, "bot_alerts");
   if(!banchannel) return message.channel.send("Couldn't find ban channel");

   message.guild.member(bUser).kick(bReason);
   banchannel.send(banEmbed);
}

module.exports.help = {
  name: "ban"
}
