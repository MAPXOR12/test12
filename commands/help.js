const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Pinkt Is One`)
    .setDescription(`

List of all commands
• ────── emoji_102 ────── •
☢◢User Commands
${PREFIX invite - ${PREFIX ping

• ────── RAES ────── •
☢◢Music Commands

 lyrics
${PREFIX} move - ${PREFIX} moveme 
${PREFIX} nowplaying - ${PREFIX}play(p)
${PREFIX} lqueue - ${PREFIX} liyars
${PREFIX} search - ${PREFIX} shuffle 
${PREFIX} stop -${PREFIX} volume 
────── ────── •

☢◢GIF Commands
${PREFIX}boy - ${PREFIX}gifblack

• ────── emoji_97 ────── •
☢◢Moderator Commands
${PREFIX}help - ${PREFIX}ping
${PREFIX}ban - ${PREFIX}unban
${PREFIX}lock - ${PREFIX}unlock
${PREFIX}giveway - ${PREFIX}invites
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
