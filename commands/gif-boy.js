const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "boy",
  aliases: ["boy"],
  cooldown: 8,
  description: "** Invite pore bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif `)
    .setTitle(`Pore is One`)
     .setDescription(``)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("<a:emoji_27:847407354005291018>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
