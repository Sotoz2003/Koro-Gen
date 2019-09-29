const Discord = require('discord.js'); 
const moment = require('moment');
console.log(">-------------- CREATE BY GUYEDIT --------------<"); 
const client = new Discord.Client(); 
var prefix = "*"
var hasard = 0 ;
console.log(`> Bot login : Koro Gen`); 

client.login("NjI0OTQ1ODM5NjU1MDkyMjQ0.XYYoUQ.QeAUF805hqh8TzU3fv2eG4YlmcM"); 

client.on("ready", () => { 
    client.user.setActivity("Koro Gen | *help"); 
    console.log("> READY "); 
    client.user.setStatus("dnd")
});

client.on('message', function(message){
  if(message.content === prefix + "stocks"){
      var pong_embed = new Discord.RichEmbed()
      .setTitle('------------STOCKS DU BOT------------')
      .addField('*vpn', "49310 ")
      .addField('*spotify', "19843")
      .addField('*netflix', "1329")
      .addField('*nitro', "42")
      .addField('*wish', "62313")
      .addField('*fortnite', "4192")
      .addField('Affiche tes stats', "*stats")  
      .setFooter('--------------------------')
      .setColor('#FFE900')
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Assassination_Classroom_-_Koro-sensei_smiling_head.svg/950px-Assassination_Classroom_-_Koro-sensei_smiling_head.svg.png')
      message.channel.send(pong_embed)
      console.log("Stocks Demander "); 
  }
})

//-----------------------------------\\

client.on('message', function(message){
  if(message.content === prefix + "help"){
      var pong_embed = new Discord.RichEmbed()
      .setTitle('------------COMMANDE DU BOT------------')
      .addField('*stocks', "Affiche les stocks")
      .addField('*tuto', "Affiche les tutos")
      .addField('*admin', "Affiche les commandes d'admins")
      .addField('*fun', "Affiche les commandes pour le fun")
      .addField('*normal', "Affiche les commandes normaux")
      .setFooter('--------------------------')
      .setColor('#FFE900')
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Assassination_Classroom_-_Koro-sensei_smiling_head.svg/950px-Assassination_Classroom_-_Koro-sensei_smiling_head.svg.png')
      message.channel.send(pong_embed)
      console.log("Help Demander "); 
  }
})

//-----------------------------------\\

function vpn(min, max){
    min = Math.ceil(0)
    max = Math.floor(3)
    hasard = Math.floor(Math.random() * (max - min +1) + min)
}

client.on('message', function (message){
    if(message.content === prefix + "vpn"){
        vpn();

        if(hasard === 0){
            var pong_embed = new Discord.RichEmbed()
            .setTitle('------------VOTRE COMPT NORDVPN ------------')
            .addField('Générateur de NordVpn', "*vpn")
            .setDescription('**Email :** manmeetarora88@gmail.com \n **Passeword** : manmeet88 \n **Expiration : ** 2020-07-04')
            .setColor('#87CEFA')
            .setThumbnail('https://images-eu.ssl-images-amazon.com/images/I/61ebU79TB9L.png')
            message.author.send(pong_embed)
            console.log("Generateur Vpn Activer"); 
        }
        if(hasard === 1){
            var pong_embed = new Discord.RichEmbed()
            .setTitle('------------VOTRE COMPT NORDVPN ------------')
            .addField('Générateur de NordVpn', "*vpn")
            .setDescription('**Email :** Squeaker@live.co.uk \n **Passeword** : 098poilkj \n **Expiration** : 2022-05-04 ')
            .setColor('#87CEFA')
            .setThumbnail('https://images-eu.ssl-images-amazon.com/images/I/61ebU79TB9L.png')
            message.author.send(pong_embed)
            console.log("Generateur Vpn Activer"); 
        }
        if(hasard === 2){
            var pong_embed = new Discord.RichEmbed()
            .setTitle('------------VOTRE COMPT NORDVPN ------------')
            .addField('Générateur de NordVpn', "*vpn")
            .setDescription('***Email :** ZackHowe@gmail.com \n **Passeword**  : itetcbo1 \n **Expiration** : 2021-12-18 ')
            .setColor('#87CEFA')
            .setThumbnail('https://images-eu.ssl-images-amazon.com/images/I/61ebU79TB9L.png')
            message.author.send(pong_embed)
            console.log("Generateur Vpn Activer"); 
        }
    }
})

client.on('message', message => {
  if (message.content === prefix + 'vpn') {
    var member= message.mentions.members.first();
    let embed = new Discord.RichEmbed()
  .setTitle('Votre NordVpn est envoyer en priver :white_check_mark: ')
  .setColor('#00000')
  message.channel.send(embed)
  }
});

//-----------------------------------\\

function spotify(min, max){
    min = Math.ceil(0)
    max = Math.floor(5)
    hasard = Math.floor(Math.random() * (max - min +1) + min)
}

client.on('message', function (message){
    if(message.content === prefix + "spotify"){
        spotify();
        if(hasard === 1){        
            var pong_embed = new Discord.RichEmbed()
            .setTitle('SPOTIFY')
            .setDescription('celiamuraca@gmail.com:cr160881|PREMIUM')
            message.author.send(pong_embed)
            console.log("Generateur Spotify Activer"); 
        }
    }
})

client.on('message', function (message){
  if(message.content === prefix + "spotify"){
      spotify();
      if(hasard === 2){        
          var pong_embed = new Discord.RichEmbed()
          .setTitle('SPOTIFY')
          .setDescription('cant93@gmail.com:hansen23|PREMIUM')
          message.author.send(pong_embed)
          console.log("Generateur Spotify Activer"); 
      }
  }
})

client.on('message', function (message){
  if(message.content === prefix + "spotify"){
      spotify();
      if(hasard === 3){        
          var pong_embed = new Discord.RichEmbed()
          .setTitle('SPOTIFY')
          .setDescription('dma052@gmail.com:smsoccer52|PREMIUM')
          message.author.send(pong_embed)
          console.log("Generateur Spotify Activer"); 
      }
  }
})

client.on('message', function (message){
  if(message.content === prefix + "spotify"){
      spotify();
      if(hasard === 4){        
          var pong_embed = new Discord.RichEmbed()
          .setTitle('SPOTIFY')
          .setDescription('dfondo@gmail.com:dfondo0320|PREMIUM')
          message.author.send(pong_embed)
          console.log("Generateur Spotify Activer"); 
      }
  }
})

client.on('message', function (message){
  if(message.content === prefix + "spotify"){
      spotify();
      if(hasard === 5){        
          var pong_embed = new Discord.RichEmbed()
          .setTitle('SPOTIFY')
          .setDescription('demartw@aol.com:abth1234|PREMIUM')
          message.author.send(pong_embed)
          console.log("Generateur Spotify Activer"); 
      }
  }
})

client.on('message', message => {
  if (message.content === prefix + 'spotify') {
    var member= message.mentions.members.first();
    let embed = new Discord.RichEmbed()
  .setTitle('Votre Spotify est envoyer en priver :white_check_mark: ')
  .setColor('#00000')
  message.channel.send(embed)
  }
});

//-----------------------------------\\
  
  client.on('message', message => {
    if (message.content === prefix + 'stats') {
      var member= message.mentions.members.first();
      let embed = new Discord.RichEmbed()
    .setTitle(`Statistiques du l'utilisateur **${message.author.username}**`)
    .addField(`:small_orange_diamond:  ID :`,`${message.author.id}`)
    .addField(`:small_orange_diamond:  Son tag :`,`${client.user.tag}`)
    .addField(`:small_orange_diamond:  Crée le :`,`${message.author.createdAt}`)
    .addField(`:small_orange_diamond:  Joue à :`,`${message.author.presence.game}`)
    .setFooter(`Informations de l'utilisateur ${message.author.tag}`)
    .setThumbnail(message.author.avatarURL)
    .setColor('#00000')
    message.channel.send(embed)
    }
  }); 

//-----------------------------------\\

client.on('message', async message => {
  if(message.content.startsWith (prefix + "mpall")) {
    
    var args = message.content.split(" ").slice(1);
    var msge = args.join(' ');

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel .send(":x: Tu n'as pas la permission ! :x:");
    if(!msge) return message.channel.send(":x: Ecrit un message ! :x:")

    var mpall = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setColor("#FFE900")
    .addField("IMPORTANT :", msge)
    message.delete()
    message.guild.members.map(m => m.send(mpall))
    console.log("MPALL", msge)
  }
});

//-----------------------------------\\

client.on('message', async message => {
  if(message.content.startsWith (prefix + "say")) {
    
    var args = message.content.split(" ").slice(1);
    var msge = args.join(' ');

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Tu n'as pas la permission ! :x:");
    if(!msge) return message.channel.send(":x: Ecrit un message ! :x:")

    var say = new Discord.RichEmbed()
    .addField(msge)
    .setColor("#FFE900")
    .setTitle("IMPORTANT :")
    .setDescription("[ MENTION ]")
    message.delete()
    console.log("Say :", msge)
    message.channel.send(say)
  }
});

//-----------------------------------\\

client.on('message', async message => {
  if(message.content.startsWith (prefix + "deface")) {
    
    var args = message.content.split(" ").slice(1);
    var msge = args.join(' ');

    if(!msge) return message.channel.send(":x: Ecrit un site ! :x:")

    var say = new Discord.RichEmbed()
    .setFooter(`Par @${message.author.tag}`)
    .addField("LANCEMENT .......")
    .setColor("#FFE900")
    .setTitle("DEFACE :")
    .setDescription(msge)
    console.log("DEFACE :", msge)
    message.channel.send(say)
  }
});