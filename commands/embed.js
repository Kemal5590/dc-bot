module.exports=(client, Discord) =>{

    client.on('message', message =>{
        if (message.content.toLowerCase()===`test`){
          const embed = new Discord.MessageEmbed()
          .setTitle("deneme")
          .setDescription("fasfghsdfhsdfghsdf")
          .setAuthor("Kemal")
          .setColor("RED")
          .setThumbnail("https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg")
          .addField("sdfgahgrthsdfbdb",":hearts:");
          message.channel.send(embed);
          console.log("test adlı komut kullanıldı.")
        }
      });
}