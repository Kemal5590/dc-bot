module.exports=(client, Discord) =>{
    const ayarlar = require("../ayarlar.json");
    var prefix = ayarlar.prefix
    var logchannel= ayarlar.logchannel

    client.on("message",msg => {

        var guild = msg.guild;
        var kisi = msg.mentions.users;

        if(!msg.guild)return;
        if(msg.content.startsWith(`${prefix}kick`)){
            if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(`Bu komudu kullanmaya yetkin yok \n <@${msg.author.id}>`);
            const user = kisi.first();
            if(user){
                const member = guild.member(user);
                if(member){
                    member
                    .kick()
                    .then(()=>{
                        const log = guild.channels.cache.get(logchannel);
                        log.send(`${user.tag} kişisi sunucudan yasaklandı.`);
                        msg.reply(`tarafından ${user.tag} kişisi sunucudan atıldı.`);
                    })
                    .catch(err => {
                        msg.reply("Bu kişiyi atmaya yetkim yok.");
                        console.error(err);
                    });
                }else{
                    msg.reply("Kişi sunucuda bulunamadı.");
                }
            }else{
                msg.reply("Bir kişi etiketlemen gerekiyor.");
            }
        }
    })

}