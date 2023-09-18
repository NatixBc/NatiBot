let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀𝑁𝐴𝑇𝐼𝐵𝑂𝑇 𝐿𝑂𝑆 𝐼𝑁𝑉𝑂𝐶𝐴 𝐷𝐸𝑆𝑃𝐼𝐸𝑅𝑇𝐸𝑁 𝑃𝐿𝐴𝑁𝑇𝐴𝑆⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `♥_🤍 @${mem.id.split('@')[0]}\n`}
teks += `└Natibot ≧◠ᴥ◠≦✊` 
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
