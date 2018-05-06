const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

      if(!message.member.roles.some(r=>["Admin Kitten", "Moderators", "Admin"].includes(r.name)) )
        return message.reply("oof.");

      // Let's first check if we have a member and if we can kick them!
      // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
      // We can also support getting the member by ID, which would be args[0]
      let kUser = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!kUser) return message.reply("Please mention a valid member of this server");
      if(!kUser.kickable) return message.reply("I cannot kick this user!");

      // slice(1) removes the first part, which here should be the user mention or ID
      // join(' ') takes all the various parts to make it a single string.
      let kReason = args.join(" ").slice(22);
      if(!kReason) return message.reply("You must supply a reason")

      // Now, time for a swift kick in the nuts!
  //     await member.kick(kReason)
  //       .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  // message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

    let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e53030")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

    let kickchannel = message.guild.channels.find(`name`, "bot_alerts");
    if(!kickchannel) return message.channel.send("Couldn't find kick channel");

    message.guild.member(kUser).kick(kReason);
    kickchannel.send(kickEmbed);

}
module.exports.help = {
  name: "kick"
}
