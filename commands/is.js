const Discord = require("discord.js");
let talkedRecently = [];


module.exports.run = async (client, message, args) => {
  
  if (talkedRecently.indexOf(message.author.id) !== -1) {
      message.delete();
            message.channel.send(":clock10: **HÉ HO !** Patiente deux secondes entres chaques commandes " + message.author + " !");
       
    }


  let list = message.guild.emojis.map(e => e.toString()).join(" ");
  let online = message.guild.members.filter(m => m.presence.status === 'online').size;
  let offline = message.guild.members.filter(m => m.presence.status === 'offline').size;
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let total = online + offline + bots;
  let totalnobot = online + offline;
  let serverembed = new Discord.RichEmbed()
	.setDescription("Informations sur le serveur !")
	.setColor("#FF0000")
	.setThumbnail(message.guild.iconURL)
	.addField(":red_circle:  Nom du serveur: ", message.guild.name, true)
  .addField(":id: ID du serveur: ", "`" + message.guild.id + "`", true)
  .addField("<:staff:314068430787706880> Owner serveur: ", message.guild.owner.user.tag, true)
  .addField(":clock5: Serveur crée le: ", message.guild.createdAt.format("dd/MM/Y à HH:mm:SS"), true)
  .addField(":busts_in_silhouette: Membres: ","<:online:313956277808005120> " + online + " | <:offline:313956277237710868> " + offline + " | <:botTag:230105988211015680> " + bots + " | Total: " + total + " membres." + " (*total sans bots:* " + totalnobot + " )")
  
  /*let serveremojiembed = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setAuthor("Liste emojis: ")
  .setDescription(list)
  .setTimestamp();*/
  
  setTimeout(() => {
   message.channel.send(list.substring(0, 2000))
  }, 500)
  setTimeout(() => {
   message.channel.send(list.substring(2000, 4000))
  }, 1000)
  
  message.channel.send(serverembed)
  .catch().catch((e) => message.channel.send(':warning: **Une erreur est survenue !** Réessaie plus tard. :warning: \n`' + (e) + '`'));
  //return message.channel.send(serveremojiembed);
  
  talkedRecently.push(message.author.id);
  setTimeout(() => {
    talkedRecently.splice(talkedRecently.indexOf(message.author.id), 1);
  }, 2000);
}

module.exports.help = {
    name: "is",
    aliases: "infoserveur",
    commande: "db!is",
    desc: "Vous permet de faire apparaitre des informations ainsi que les emojis du serveur. *(commande déconseiller sur mobile, optez plutôt pour `db!ais`.)*"
}