import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""

global.owner = [
  ['51936732723', '𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘', true],
  ['51936732723', '𝐎𝐖𝐍𝐄𝐑 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋', true],
  ['51936732723', '𝐒𝐎𝐏𝐎𝐑𝐓𝐄', true],
  ['51936732723', '𝐒𝐎𝐏𝐎𝐑𝐓𝐄 𝐃𝐄 𝐕𝐄𝐍𝐓𝐀𝐒', true],
  ['51936732723', '𝐒𝐓𝐀𝐅𝐅 (𝐍𝐎 𝐕𝐄𝐍𝐓𝐀𝐒)', true],
  ['51936732723', '𝐒𝐓𝐀𝐅𝐅 (𝐍𝐎 𝐕𝐄𝐍𝐓𝐀𝐒)', true],
  ['51936732723', '𝐒𝐓𝐀𝐅𝐅 (𝐍𝐎 𝐕𝐄𝐍𝐓𝐀𝐒)', true],
  ['51936732723', '𝐒𝐓𝐀𝐅𝐅 (𝐍𝐎 𝐕𝐄𝐍𝐓𝐀𝐒)', true],
  ['', '', true],
  ['', '', true],
  ['', '', true],
  ['', '', true],
  ['', '', true],
  ['', '', false],
  ['', '', true],
  ['', '', true],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''], 
  [''],  
  [''], 
  ['']
];

global.suittag = ['51936732723'];
global.prems = ['51936732723'];

global.packname = '𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘';
global.author = '𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘';
global.wm = '𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘';
global.titulowm = '𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘';
global.titulowm2 = `𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘`
global.igfg = '𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘';
global.wait = '𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤... 🔮';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18-hot.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘`;
global.gt = '𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘';
global.mysticbot = '𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐘𝐂 𝐒𝐎𝐂𝐈𝐄𝐓𝐘';
global.md = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6';
global.mysticbot = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6';
global.canalbot = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y';
global.ig = 'https://www.instagram.com/usxr_angelito';
global.github = 'https://github.com/Karim-off/XiaBot-Pro';
global.gtb = 'https://github.com/Karim-off';
global.waitt = '𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤... 🔮';
global.waittt = '𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤... 🔮';
global.waitttt = '𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤... 🔮';
global.nomorown = '59168683798';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
