module.exports=(client, Discord) =>{

    var channelid="798885138012307467";

    client.on("guildMemberAdd",member=>{
        const textchannel=member.guild.channels.cache.get(channelid);
        textchannel.send(`${member} Adlı kişi sunucuya giriş yaptı.`);
    })

    client.on("guildMemberRemove",member=>{
        const textchannel=member.guild.channels.cache.get(channelid);
        textchannel.send(`${member} Adlı kişi sunucudan ayrıldı.`);
    })
}