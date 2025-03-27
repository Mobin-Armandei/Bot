const TelegramBot = require('node-telegram-bot-api');


const token = '7932955419:AAGotXY-CrZo1Nod9V5C0B80KcjDaZSdNTg';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    console.log(msg);
    // const chatId = msg.chat.id;

    // bot.sendMessage(chatId, 'سلام به ربات خوش آمدید.');
});