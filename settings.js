//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is vihaga sithum 🔥
My Creator is VIHAGA SITHUM😎` //Costomize Alive Message (type your message in `` )

global.owner = ['https://wa.me/message/Y2ZKEPYU6PKYK1'] //Owner number in aive msg

_*👋 Hi l am online now*_

_*🤖 i am Vihaga an user bot for whatsapp.*_

_*🙂 Have a nice day!*_

_*⭕ Whatsapp BOT Group*_

_*⭕ Description එකේ BOT වැඩ කරන විදිය දාලා තියෙන්නේ*_

*⭕ YouTube video / music*

*⭕ fb video*

*⭕ mediafire*

*⭕ Play store එකේ app*

*⭕ TikTok video*

*⭕ img*

_*⭕ Whatsapp number Link 🔗*_

_*https://wa.me/message/Y2ZKEPYU6PKYK1*_

global.premium = ['https://wa.me/message/Y2ZKEPYU6PKYK1'] //Owner Number info
global.ownernomer = 'https://wa.me/message/Y2ZKEPYU6PKYK1' //Owner Number <<<

global.ownername =  'https://wa.me/message/Y2ZKEPYU6PKYK1' //Owner Name
global.botname = ' ☬VIHAGA༒SITHUM࿐' //Bot Name

global.button = '☰ Whatsapp number ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://wa.me/message/Y2ZKEPYU6PKYK1' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬VIHAGA༒SITHUM࿐' //Bot Pacage Name
global.author = '😎 VIHAGA BOT❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_vihaga.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'එය භාවිතා කළ හැක්කේ පරිපාලකයින්ට පමණි!😉',
    botAdmin: 'Bot කැමති Admin කෙනෙක් වෙන්න😥',
    owner: 'මෙය භාවිතා කළ හැක්කේ හිමිකරුට පමණි!😉',
    group: 'විශේෂාංගය කණ්ඩායම් සඳහා පමණක් භාවිතා වේ!',
    private: 'මෙම විශේෂාංගය පුද්ගලික කතාබස් සඳහා පමණි!',
    bot: 'මෙම විශේෂාංගය Bot සඳහා පමණි😝',
    wait: '👉👈කරුණාකර රැඳී සිටින්න...',
    error: 'දෝෂයක්!!! සමහර විට අපි යතුර කල් ඉකුත් වී ඇත🤔!',
    endLimit: 'ඔබගේ දෛනික සීමාව කල් ඉකුත් වී ඇත, සීමාව සෑම පැය 12 කට වරක් නැවත සකසනු ලැබේ',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
