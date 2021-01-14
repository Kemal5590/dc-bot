module.exports=(client, Discord) =>{
    const ayarlar = require("../ayarlar.json");
    var prefix = ayarlar.prefix

    client.on('message', msg => {
        if (msg.content.toLocaleLowerCase() === 'deneme') {
          msg.channel.send('deneme');
        }
      });
      
      client.on('message', msg => {
          if (msg.content.toLocaleLowerCase() === 'sa') {
            msg.channel.send('as');
          }
        });
      
        client.on('message', msg => {
          if (msg.content.toLocaleLowerCase() === 'slm') {
            msg.author.send('aslm');
          }
        });
}

