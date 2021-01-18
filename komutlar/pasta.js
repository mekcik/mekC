const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Eğlence Komutları Özel Mesajlarda Kullanılamaz!')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username +  ' Pasta Yedin!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(https://media.discordapp.net/attachments/755145861285150793/780753730432663572/unknown.png)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pasta',
  description: 'Pasta yedin.',
  usage: 'pasta'
};
