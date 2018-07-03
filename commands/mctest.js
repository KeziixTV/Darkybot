const snekfetch = require('snekfetch');
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Succès déverrouillé !", title];
  }
  let random = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) random = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) random = 21;
  if(args.join(" ").toLowerCase().includes("cake")) random = 10;
  if(args.join(" ").toLowerCase().includes("diamond")) random = 29;
  
  if(title.length < 0 || contents.length < 0) return message.channel.send("Usage commmande `db!mc <titre>|<desc.>`.")
  if(title.length > 15) return message.channel.send("Titre trop long ! *(15 caract. maximum.)*")
  if(contents.length > 20) return message.channel.send("Description trop longue ! *(20 caract. maximum.)*")
  if(title.length < 2) return message.channel.send("Il faut mettre un titre ! *(2 caractères mini.)*")
  if(contents.length < 2) return message.channel.send("Il faut mettre une description ! *(2 caractères mini.)*")
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${random}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
  message.channel.send(`**${message.author.username}** à reçu un nouveau succès !`)
    .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  
};

module.exports.help = {
    name: "mctest"
}