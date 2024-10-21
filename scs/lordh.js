const { lords } = require('../lord/lords');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../lib/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../config");

lords(
    {
        nomCom : 'alive',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
╭═───❍    𝙻𝙾𝚁𝙳 𝙼𝙳   ❍────
┃❃╭──────────────
┃❃│ 
┃❃│ 👤 *Owner* : ${s.OWNER_NAME}
┃❃│ 🤗 *Mode* : ${mode}
┃❃│ 📆 *Date* : ${date}
┃❃│ ⌚️*Hours (GMT)*: ${temps}
┃❃│
┃❃│  ${message}
┃❃│
┃❃│  𝙻𝙾𝚁𝙳 𝙼𝙳 wabot
┃❃╰───────────────
╰═════════════════⊷*`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
}

    } else {
        if(!superUser) { repondre("there is no alive for this bot") ; return};

      await   repondre("You have not yet saved your alive, to do this;  enter after alive your message and your image or video link in this context: .alive message;lien");
         repondre("don't do fake thinks :)")
     }
 } else {

    if(!superUser) { repondre ("Only the owner can  modify the alive") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre(' Holla🥴, *LORD-MD BOT* is alive just like you gee. ')

}
    });
