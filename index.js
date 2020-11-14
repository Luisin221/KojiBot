const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const feed = require('star-labs');
let prefix = config.prefix;


client.on('ready', () => {
    client.user.setPresence({
        activity: {
            name: `Mazinger Z | k!help`,
            type: "WATCHING"
        },
        status: "online"
    });

    console.log(`Activar Pilder!`);
});


client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'Hola')) {
    message.channel.send(`Holaaaa usa k!help para mas :eyes: !!`);

  } else


  if (message.content.startsWith(prefix + "invite"))
  message.channel.send({
      embed: {
          color: 252,
          author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
          },
          title: ":gem: Para invitarme !Haz Click Aquí¡ :gem:",
          url: "https://discord.com/api/oauth2/authorize?client_id=775002947313598465&permissions=8&scope=bot",
          description: "",
          
      }
      
  });


  //PROGRAMACION COMANDO HELP 

  if (message.content.startsWith(prefix + "help"))
  message.channel.send({
      embed: {
          color: 252,
          author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
          },
          title: "Invit me",
          url: "https://discord.com/api/oauth2/authorize?client_id=775002947313598465&permissions=8&scope=bot",
          description: "",
          fields: [{
                  name: ":hammer_pick:  Moderation Commands  :hammer_pick: ",
                  value: "`ban, kick, report, mute, warn,serverinfo ,userinfo`"
              },
              {
                  name: ":dizzy:  Other Commands  :dizzy: ",
                  value: " `avatar, ping, meme, luck`"
              },
              {
                  name: ":eyes:  Anime  :eyes: ",
                  value: "`boom, happy, blush, mimir, cry, confused, slap, feed, hug`"
              },
              {
                  name: ":video_game:  Games  :video_game: ",
                  value: "`fish, travel, mine, buscamine`"
              },
              {
                  name: ":shield:  Support Commands  :shield: ",
                  value: "`support, yt, tw, blog, botinfo`"

              },
          ],
          
          footer: {
              icon_url: client.user.avatarURL(),
              text: "Created by: LuisStrongYT | Gabito200  "
          }
      }
  });


   //COMANDO AVATAR USER Y MENCION
   if (message.content.startsWith(prefix + "avatar")) {
    let miembro = message.mentions.users.first()
    if (!miembro) {
        const embed = new Discord.MessageEmbed()
            .setImage(`${message.author.displayAvatarURL()}`)
            .setColor(0x66b3ff)     
            .setFooter(`Avatar de ${message.author.tag}`);
        message.channel.send(embed);
        

    } else {
        const embed = new Discord.MessageEmbed()
            .setImage(`${miembro.displayAvatarURL()}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${miembro.tag}`);

        message.channel.send(embed);
    }
};

//SERVER INFO

 //USER INFO
 if (message.content.startsWith(prefix + "userinfo")) {
    let estadouser = {


        "online": "Online",
        "idle": "Ausente",
        "dnd": "No Molestar",
        "invisible": "Invisible/Desconectado",
    }


    let userm = message.mentions.users.first()

    if (!userm) {
        var user = message.author;

        const embedDatos = new Discord.MessageEmbed()
        .setFooter("Avatar de " + message.author.username + "", message.author.avatarURL)
            .setThumbnail(user.avatarURL)
            .setAuthor('Informacion de ' + user.username + '#' + user.discriminator, user.avatarURL)
            .setColor("RANDOM")
            .addField(':bust_in_silhouette: Nombre', user.username, true)
            .setImage(`${message.author.displayAvatarURL()}`)
            .addField(':video_game: Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
            .addField(':page_facing_up: ID', user.id, true)
            .addField(':small_blue_diamond: Estado', estadouser[user.presence.status], true)
            .addField(":robot: ¿Es un BOT?", user.bot)
            .addField(':wrench: Apodo', message.member.nickname, true)
            .addField(':gear: Cuenta Creada', user.createdAt.toDateString(), true)
            .addField(':inbox_tray:  Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
            

        message.channel.send({ embed: embedDatos });
    } else {
        //USER INFO MENCIONADO
        const embedDatos = new Discord.MessageEmbed()
            .setThumbnail(userm.avatarURL)
            .setAuthor('Informacion de \n' + userm.username + '#' + userm.discriminator, userm.avatarURL)
            .setColor("RANDOM")
            .setFooter("Avatar de " + message.author.username + "", message.author.avatarURL)
        .addField(':bust_in_silhouette: Nombre', userm.username, true)
            .addField(':video_game: Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
            .addField(':page_facing_up: ID', userm.id, true)
            .addField(':small_blue_diamond: Estado', estadouser[userm.presence.status], true)
            .addField(":robot: ¿Es un BOT?", userm.bot)
            .addField(':wrench: Apodo', message.member.nickname, true)
            .addField(':gear: Cuenta Creada', userm.createdAt.toDateString(), true)
            .addField(':inbox_tray: Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
            
            .setImage(`${userm.displayAvatarURL()}`)

        message.channel.send({ embed: embedDatos });
    }
}

 //PING
 if (message.content.startsWith(prefix + "ping")) {
    let ping = Math.floor(message.client.ping);
    message.channel.send(":ping_pong: Pong!")
        .then(m => {

            m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping Discord: \`${ping} ms\``);
        });

}
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        
        if(message.content.startsWith(prefix + "say")){
            message.delete()
          if(!args.join("")) 
          message.channel.send(`:x: **ERROR | Tienes que escribir un mensaje para enviar.**`) 
          message.channel.send(args.join(" "));
        }
      
        if (message.content.startsWith(prefix + "boom")) {
            const coin = ['https://media.tenor.com/images/0e46700a56a9bb8b11a4071483ea9092/tenor.gif',
                'https://media.tenor.com/images/fc0790727d0845b40d688b19f7cf5231/tenor.gif',
                'https://media.tenor.com/images/7fd6daecc47b54b0ee29d2dee92b3b89/tenor.gif',
                'https://media.tenor.com/images/a1ccf26d5a8f8fc82ea06cd77f59552d/tenor.gif',
                'https://media.tenor.com/images/114b121860b6644a26acc4a1fe92080d/tenor.gif',
                'https://i.pinimg.com/236x/fb/95/ba/fb95ba8de3b7d77964d9fefb964dbb10.jpg',
                'https://media.tenor.com/images/6bc55ea3d903ef0ae263fa8818151076/tenor.gif',
                'https://media.tenor.com/images/1a29347c0a4e389ca168153fea364879/tenor.gif',
                'https://media.tenor.com/images/a3144f5f359ae09c1c1321964788592a/tenor.gif',
                'https://media.tenor.com/images/3c8bdc6dbfb40752a19acf21d657c7c0/tenor.gif',
                'https://media.tenor.com/images/eec9a850214d4bb7a7e8685dc8e4c373/tenor.gif',
                'https://media.tenor.com/images/fcf5b37b160a1a2825cc70d43c1b5d5e/tenor.gif',
                'https://media.tenor.com/images/cf65a0df80b08e59d209779ba6e178c7/tenor.gif',
                'https://media.tenor.com/images/da8b08f839fb7e3cc99c1528d32880d9/tenor.gif',
                'https://media.tenor.com/images/9edf5a5b5b6f786d4ca0c8261ee4c7ef/tenor.gif',
                'https://media.tenor.com/images/19375e3989f807b7030ef988f41bfc8f/tenor.gif',
                'https://media.tenor.com/images/ee9d54fc184288d1e848ee3e054a648f/tenor.gif',
                'https://media.tenor.com/images/efbaf655c31c81f09764f169ab345802/tenor.gif',
                'https://media.tenor.com/images/3d117fa9700cd4c2ebd4f8829e509d60/tenor.gif',
                'https://media.tenor.com/images/7875dfdffc624f737777a15469ea3141/tenor.gif',
                'https://media.tenor.com/images/717384c9c09cbce4e4d4f24161d179e6/tenor.gif',
                'https://media.tenor.com/images/4027f41d51998a6e97414937dc85c9f4/tenor.gif',
                'https://media.tenor.com/images/4d302fc7698a6f2bebdf283e1f93ab3f/tenor.gif',
                'https://media.tenor.com/images/794c2958cf36aa36c1e69f3b372ef4d2/tenor.gif',
                'https://media.tenor.com/images/c5253297154ca8503f98eb047b7aa1b4/tenor.gif',
                'https://media.tenor.com/images/0fcfe1409099e9b7ea0788f5679eeea0/tenor.gif',
                'https://media.tenor.com/images/965cd0b4bae4090a29e9c95ffb484d34/tenor.gif',
                'https://media.tenor.com/images/2a0b04bce9ff9ccdabade323ac94ac2f/tenor.gif',
                'https://media.tenor.com/images/3a5d39ffdea3ef4773141d0d776dc6ac/tenor.gif',
                'https://media.tenor.com/images/b75b38a9608d1698df7a187791b7493e/tenor.gif',
                'https://media.tenor.com/images/6135ca20b47f07569199e6df52afc29a/tenor.gif',
                'https://media.tenor.com/images/79c6d623f55a6af4fe07c77a8138063a/tenor.gif',
                'https://media.tenor.com/images/450f5465231c944d7bfe59ae4286e4a1/tenor.gif',
                'https://media.tenor.com/images/063a397b43eb1bd5d6a2ab92b0957ce4/tenor.gif',
                'https://media.tenor.com/images/dd88aed931cb293c1ff608d4155dd8b8/tenor.gif',
                'https://media.tenor.com/images/f7fadd2520e4d44fe297c1dd3ce180e6/tenor.gif',
                'https://media.tenor.com/images/bf25cc8e4c5736522e77835e7faaa9e5/tenor.gif',
                'https://media.tenor.com/images/f1050cdb1b22e1450786c112b9c4980d/tenor.gif'
    
            ];
    
    
            message.channel.send('' + message.author.username + ' BOOM! ', { files: [coin[Math.floor(coin.length * Math.random())]] });
        }

        if (message.content.startsWith(prefix + "meme")) {
            const coin = ['https://i.pinimg.com/236x/1f/8a/be/1f8abee463f916ca072a61c5711facfb.jpg',
                'https://i.pinimg.com/236x/c1/db/bb/c1dbbb3e05f131319ea5867c69df5cba.jpg',
                'https://i.pinimg.com/236x/93/83/21/93832148c89ab987279aaf2789b024ed.jpg',
                'https://i.pinimg.com/236x/35/7d/57/357d57ddb29c46b1aa1691c8a2057f13.jpg',
                'https://i.pinimg.com/236x/9e/79/89/9e79891980bf13cdf7d6ee12c52ab39f.jpg',
                'https://i.pinimg.com/236x/fb/95/ba/fb95ba8de3b7d77964d9fefb964dbb10.jpg',
                'https://i.ytimg.com/vi/EzsGAeCYRrA/maxresdefault.jpg',
                'https://i.ytimg.com/vi/hbPxakV5MGM/maxresdefault.jpg',
                'https://iforo.3djuegos.com/files_foros/4g/4gvu.jpg',
                'https://i.pinimg.com/originals/6a/95/2a/6a952af6e218692202d8a55aaa2b25c4.jpg',
                'https://pm1.narvii.com/6855/2c920a77ca3e23db1b40eee733a1517df09bb6dcv2_hq.jpg',
                'https://enportada.cl/wp-content/uploads/2019/12/73385915_482104182662690_4884529793319834364_n.jpg',
                'https://i.pinimg.com/474x/f1/28/cb/f128cb6e679ff4fb330934c2ee6f7dd9.jpg',
                'https://enportada.cl/wp-content/uploads/2019/12/74655694_189597142091117_5968909257743989011_n.jpg',
                'https://pm1.narvii.com/6264/929da56b836800a715aef6f85cf7ce33c34daf18_hq.jpg',
                'https://enportada.cl/wp-content/uploads/2019/12/74698386_179029179912875_7545436429058966745_n.jpg',
                'https://memeviral.net/wp-content/uploads/2018/01/26281331_2152018665033514_7948126560827998208_n.jpg',
                'https://enportada.cl/wp-content/uploads/2019/12/72792610_357852001704638_8818861618098003993_n.jpg',
                'https://i.pinimg.com/originals/65/05/36/6505366f6246898e4694dd079e170087.jpg',
                'https://enportada.cl/wp-content/uploads/2019/12/74876700_563372441166624_2715919595006462685_n.jpg',
                'https://pbs.twimg.com/media/ELla2KVWsAAEF4W.jpg',
                'https://enportada.cl/wp-content/uploads/2019/12/75472270_263215274640457_5810311148559790277_n.jpg',
                'https://1.bp.blogspot.com/-SImbLNurNuE/WOaG-a6tixI/AAAAAAAAM94/F30iALG39qELUuVU6BOifWNmoei5X0ZQgCLcB/s1600/FB_IMG_1491441748683.jpg',
                'https://i.pinimg.com/originals/94/b0/2d/94b02d2d3e69331116ad0aa5bffb73ce.jpg',
                'https://enportada.cl/wp-content/uploads/2020/02/72077378_431268097764079_6678559142164184393_n.jpg',
                'https://images3.memedroid.com/images/UPLOADED33/5ebd61f13542d.jpeg',
                'https://i.pinimg.com/474x/aa/da/8a/aada8a2aacb0809d483aea2a4d5c7123.jpg',
                'https://www.memesmonkey.com/images/memesmonkey/cf/cfd5f5e28351093511a5b68baf5c21f4.jpeg',
                'https://i.pinimg.com/originals/c3/00/34/c30034ab5129a03a3385900855d09999.jpg',
                'https://i.pinimg.com/originals/64/27/ec/6427ecfe2c99c95ec62a230899908410.jpg',
                'https://pm1.narvii.com/6624/d90dccef62f5f0924fec6118be335d807e2fafb4_00.jpg',
                'https://images3.memedroid.com/images/UPLOADED349/58d1047ebf52f.jpeg',
                'https://66.media.tumblr.com/ee6c5f0a6e65231b795a41fcb61b3cf4/tumblr_p9rxkdJlFI1w1dn7no1_400.jpg',
                'https://pm1.narvii.com/6853/536775f3f0667796e5c9b7d2a502300ac5a66e26v2_hq.jpg',
                'https://k60.kn3.net/taringa/0/F/D/9/A/C/NikitoSosa/4F5.jpg',
                'https://enportada.cl/wp-content/uploads/2020/01/72638236_3280836618610342_2810338802032706620_n.jpg',
                'https://images3.memedroid.com/images/UPLOADED361/5c97176272977.jpeg',
                'https://memes-graciosos.com/images/2019/03/15/memes-sdlg-20.jpg'
    
            ];
    
    
            message.channel.send('' + message.author.username + ' XD', { files: [coin[Math.floor(coin.length * Math.random())]] });
        }

        //REGISTROS LOGS
    if (message.content.startsWith(prefix + "logs")) {
        const db = require("easy.database")
        registros = new db("Canal_registros")
        let channel = message.mentions.channels.first() || client.channels.cache.get(args[0])
        if (!channel) {
            return message.reply("Debes proporcionar la ID o mencionar el canal donde iran los registros \n")
        } else {
            let embed = new Discord.MessageEmbed()
                .setTitle(":hammer_pick: Nueva Configuracion :hammer_pick: ")
                .setDescription("Se agradece demasiado que me brindes la confianza de realizar los registros")
                .addField(":bookmark_tabs:  Canal de los registros :bookmark_tabs: ", channel, true)
                .addField(":satellite: Servidor :satellite: ", message.guild.name, true)
                .addField(":mag_right: ID Servidor :mag_right: ", message.guild.id, true)
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter(message.guild.name, message.guild.iconURL())
            message.channel.send(message.author, embed).then(m => {
                registros.set(`${message.guild.id}`, channel.id)
                m.delete(50000)
            });
        }
    }

     //BOT INFO 
     if (message.content.startsWith(prefix + "botinfo")) {
        const moment = require("moment");
        require('moment-duration-format');

        const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");


        const embedDatos = new Discord.MessageEmbed()
            .setColor('RANDOM')

        .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription(`**Información del cliente**`)
            .addField(`:hammer_pick: | Developers `, `LuisStrongYT#9999 \n Gabito200#1158 \n Marit uwu#4515`, true)
            .addField(`:small_blue_diamond: | Version`, `1.0.0`, true)
            .addField(`:books:  | Libreria`, `Discord 12.2.0 (Js)`, true)
            .addField(`:floppy_disk:  | Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
            .addField(`:satellite_orbital: | Servidores`, `${client.guilds.cache.size.toLocaleString()}`, true)
            .addField(`:satellite: | Actividad`, `${actividad}`, true)
            .addField(`:bust_in_silhouette:  | Usuarios`, `${client.users.cache.size.toLocaleString()}`, true)
            .addField(`:page_facing_up: | Canales`, `${client.channels.cache.size.toLocaleString()}`, true)
            .addField(`:sound: | Conexiones a voz`, `${client.voice.connections.size}`, true)

        icon_url: client.user.avatarURL(),

            message.channel.send({ embed: embedDatos });
    }
     //COMANDO FELICIDAD
     const happy = require('star-labs');
     if (message.content.startsWith(prefix + "happy")) {
        message.delete()
        let aA = message.author
        const embedDatos = new Discord.MessageEmbed() //Embed Mensaje
            .setDescription(aA.tag + '  esta feliz ')
            .setImage(star.happy)
            .setFooter(`Comando hecho por ${client.user.username}`, client.user.displayAvatarURL)
            .setTimestamp();
        message.channel.send({ embed: embedDatos });
    }

    //MONEDAS
    if (message.content.startsWith(prefix + "coin")) {
        const coin = ['https://media.tenor.com/images/b1913e6833eae88cc6b8611a8416eaca/tenor.gif',
            'https://media.tenor.com/images/5a33f3a415a72daa49004d298421cd57/tenor.gif',
            'https://media.tenor.com/images/1471d2556d4debff8b94b050ab640651/tenor.gif',
            'https://media.tenor.com/images/b489babee39868683ee817b1fbccb2d1/tenor.gif',
            'https://media.tenor.com/images/a1c1993b297cc74272712ecad84c95da/tenor.gif',
            'https://media.tenor.com/images/a5bfeb0ee04ef496b2b417dcb1782d6a/tenor.gif',
            'https://media.tenor.com/images/c62ebaa89c1d7cde2fb335fcee20df5f/tenor.gif',
        ];


        message.channel.send('' + message.author.username + ' Que suerte tienen los que no se bañan o:', { files: [coin[Math.floor(coin.length * Math.random())]] });
    }

     //PESCAR
     if (message.content.startsWith(prefix + "fish")) {
        let rollfish = Math.floor(Math.random() * 7) + 1;
        if (rollfish === 1) {
            message.channel.send('Felicitaciones, ' + message.author.username + ' pescaste: :tropical_fish:');

        } else if (rollfish === 2) {
            message.channel.send('Felicitaciones, ' + message.author.username + ' pescaste: :fish:');

        } else {

            message.channel.send('Felicitaciones, ' + message.author.username + ' pescaste: :dollar:');
        }

    }

     //MINAR
     if (message.content.startsWith(prefix + "mine")) {
        let rollmine = Math.floor(Math.random() * 7) + 1;
        if (rollmine === 1) {
            message.channel.send('Felicitaciones, ' + message.author.username + ' encontraste  un :gem: ');

        } else if (rollmine === 2) {
            message.channel.send('Nada mal ,  ' + message.author.username + ' encontraste un :amphora: ');

        } else {

            message.channel.send('Corre!  ' + message.author.username + ' encontraste una :bomb:  !');
        }

    }
    //VIAJAR
    if (message.content.startsWith(prefix + "travel")) {
        let rolltravel = Math.floor(Math.random() * 7) + 1;
        if (rolltravel === 1) {
            message.channel.send('Que bien! ' + message.author.username + ' viajaste a :beach_umbrella:  ');

        } else if (rolltravel === 2) {
            message.channel.send('Bien hecho! ,  ' + message.author.username + ' llegaste al :mount_fuji:   ');

        } else {

            message.channel.send('Sorry, ' + message.author.username + ' terminaste en el :hospital: ');
        }

    }

    const blush = require('star-labs'); //Utilizamos la esta libreria
    if (message.content.startsWith(prefix + "blush")) {
        message.delete()
        let aA = message.author
        let aB = message.mentions.users.first() //Mencion
        if (!aB) return message.channel.send('Menciona a 1 usuario para hacerlo sonrojar'); //Debe mencionar a alguien
        const embedDatos = new Discord.MessageEmbed() //Embed Mensaje
            .setDescription(aA.tag + ' hizo sonrojar a' + aB.tag)
            .setImage(star.blush())
            .setFooter(`Comando hecho por ${client.user.username}`, client.user.displayAvatarURL)
            .setTimestamp();
        message.channel.send({ embed: embedDatos });
    }

     //DORMIR
     const sleep = require('star-labs'); //Utilizamos la esta libreria


     if (message.content.startsWith(prefix + "mimir")) {
         message.delete()
         let aA = message.author
         const embedDatos = new Discord.MessageEmbed() //Embed Mensaje
             .setDescription(aA.tag + ' fue a dormir ')
             .setImage(star.sleep())
             .setFooter(`Comando hecho por ${client.user.username}`, client.user.displayAvatarURL)
             .setTimestamp();
         message.channel.send({ embed: embedDatos });
 
     }

  //LLORA
  const cry = require('star-labs'); //Utilizamos la esta libreria
     if (message.content.startsWith(prefix + "cry")) {
        message.delete()
        let aA = message.author

        const embedDatos = new Discord.MessageEmbed() //Embed Mensaje
            .setDescription(aA.tag + ' esta llorando ')
            .setImage(star.cry())
            .setFooter(`Comando hecho por ${client.user.username}`, client.user.displayAvatarURL)
            .setTimestamp();
        message.channel.send({ embed: embedDatos });

    }

    if (message.content.startsWith(prefix + "confused")) {
        message.delete()
        let aA = message.author
        const embedDatos = new Discord.MessageEmbed() //Embed Mensaje
            .setDescription(aA.tag + ' esta confundido ')
            .setImage(star.confused())
            .setFooter(`Comando hecho por ${client.user.username}`, client.user.displayAvatarURL)
            .setTimestamp();
        message.channel.send({ embed: embedDatos });

    }

    if (message.content.startsWith(prefix + "slap")) {
        message.delete()
        let aA = message.author
        let aB = message.mentions.users.first() //Mencion
        if (!aB) return message.channel.send('Menciona a 1 usuario para abofetearlo'); //Debe mencionar a alguien
        const embedDatos = new Discord.MessageEmbed() //Embed Mensaje
            .setDescription(aA.tag + ' **abofeteo a**  ' + aB.tag)
            .setImage(star.slap())
            .setFooter(`Comando hecho por ${client.user.username}`, client.user.displayAvatarURL)
            .setTimestamp();
        message.channel.send({ embed: embedDatos });

    }

     //ALIMENTAR
     const feed = require('star-labs'); //Utilizamos la esta libreria


     if (message.content.startsWith(prefix + "feed")) {
         message.delete()
         let aA = message.author
         let aB = message.mentions.users.first() //Mencion
         if (!aB) return message.channel.send('Menciona a 1 usuario para darle de comer'); //Debe mencionar a alguien
         const embedDatos = new Discord.MessageEmbed() //Embed Mensaje
             .setDescription(aA.tag + ' **alimento a**  ' + aB.tag)
             .setImage(star.feed())
             .setFooter(`Comando hecho por ${client.user.username}`, client.user.displayAvatarURL)
             .setTimestamp();
         message.channel.send({ embed: embedDatos });
 
     }

       //ABRAZO
    const star = require('star-labs'); //Utilizamos la esta libreria

    //Luego del evento message usamos este codigo
    if (message.content.startsWith(prefix + "hug")) {
        message.delete()
        let aA = message.author
        let aB = message.mentions.users.first() //Mencion
        if (!aB) return message.channel.send('Menciona a 1 usuario para darle un abrazo.'); //Debe mencionar a alguien
        const embedDatos = new Discord.MessageEmbed() //Embed Mensaje
            .setDescription(aA.tag + ' **abrazó a** ' + aB.tag)
            .setImage(star.hug())
            .setFooter(`Comando hecho por **${client.user.username}**`, client.user.displayAvatarURL)
            .setTimestamp();
        message.channel.send({ embed: embedDatos });
    }

     //BUSCAMINAS 
     if (message.content.startsWith(prefix + "buscamines")) {
        async function mines() {
            const choices = [
                "||:one:||",
                ...Array(5).fill("||:two:||"),
                ...Array(2).fill("||:bomb:||"),
                ...Array(5).fill("||:zero:||")
            ];

            const generateChoice = () =>
                choices[Math.floor(Math.random() * choices.length)];

            const generateGrid = (width, height) => {
                return Array(height)
                    .fill(Array(width))
                    .map(arr => arr.fill([]).map(generateChoice));
            };

            const generated = generateGrid(10, 10);
            let whatToSend = generated.map(arr => arr.join(" ")).join("\n");
            return message.channel.send(whatToSend);
        }
        mines();
    }

    if (message.content.startsWith(prefix + "support"))
    message.channel.send({
        embed: {
            color: 252,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: "Koji Bot",
            url: "https://discord.com/oauth2/authorize?client_id=717114025980330097&scope=bot&permissions=2013789439",
            description: "Thanks for inviting me",
            fields: [{
                    name: ":small_blue_diamond:  `Discord Server` :small_blue_diamond: ",
                    value: "https://discord.gg/VWY2W95PCQ"
                },
                {
                    name: " :gem: `Twitter Support` :gem: ",
                    value: "https://twitter.com"
                },
                {
                    name: ":100: `YouTube Support` :100:",
                    value: "https://www.youtube.com"
                }

            ],
            footer: {
                icon_url: client.user.avatarURL(),
                text: "Created by: LuisStrongYT"
            }
        }
    });

     //SERVER INFO
     if (message.content.startsWith(prefix + "serverinfo")) {
        var server = message.guild;

        const embed = new Discord.MessageEmbed()
            .setThumbnail(server.iconURL())
            .setAuthor(server.name, server.iconURL())
            .addField(':floppy_disk: | Server ID', server.id, true)
            .addField('  :earth_americas: | Region', server.region, true)
            .addField(':hammer_pick: | Creado el', server.joinedAt.toDateString(), true)
            .addField(':detective: | Owner Oficial', server.owner.user.tag ,true)
            .addField(':bust_in_silhouette: | Miembros', server.memberCount, true)
            .addField(':small_blue_diamond: | Roles', server.roles.size, true)
            .setColor(0x66b3ff)

        message.channel.send(embed);
    }
});

client.login(config.token);
