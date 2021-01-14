const Discord = require('discord.js');
const client = new Discord.Client();

//----------modüller----------
const ayarlar = require("./ayarlar.json");
const joinleave = require("./events/joinileave.js");
const hedef = require("./hedef.json");
const embed = require("./commands/embed.js");
const SaAs = require('./commands/SaAs.js');
const kick = require('./commands/kick');
const ban = require('./commands/ban');

client.on('ready', () => {
  console.log(`${client.user.tag} botu sunucuya girdi`);
  client.user.setActivity('Eyy Rabia sen kimsin yav',{type:"PLAYING"})
  .then(presence => console.log(`Durum  ${presence.activities[0].name} olarak ayarlandı.`))
  .catch(console.error);
  joinleave(client, Discord);
});

//----------komutlar----------
embed(client, Discord);
SaAs(client, Discord);
kick(client, Discord);
ban(client, Discord);

client.login(ayarlar.token);