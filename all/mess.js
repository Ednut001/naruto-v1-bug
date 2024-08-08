require("./global")

const mess = {
   wait: "*`[ Loading ]` - Wait Kak Lagi Proses*",
   success: "*`[ Success ]` - Berhasil Kak*`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "*`[ QUERY ]` - Teks Nya Mana Kak?*",
       link: "*`[ NEED ]` - Link Nya Mana Kak?*",
   },
   error: {
       fitur: "*`[ Error ]` - Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki*",
   },
   only: {
       group: "*`[ GROUP ]` - Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Group*",
       private: "*`[ PRIVATE ]` - Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Private Chat*",
       owner: "*`[ OWNER ]` - Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot*",
       admin: "*`[ ADMIN ]` - Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot*",
       badmin: "*`[ BOT ADMIN ]` - Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group*",
       premium: "*`[ PREMIUM ]` - Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})