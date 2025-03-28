const TelegramBot = require('node-telegram-bot-api');


const token = '7932955419:AAGotXY-CrZo1Nod9V5C0B80KcjDaZSdNTg';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    let definition = false;
    const chatId = msg.chat.id;
    const userText = msg.text;

    if(userText == '/start') {
        definition = true;
        bot.sendMessage(chatId, 'سلام به ربات من خوش آمدید.',
            {
                "reply_markup":{
                    "keyboard":[
                        ['گزینه1', 'گزینه2'],
                        ['گزینه3', 'گزینه4']
                    ]
                }
            });
    }

    if(userText == 'salam' || userText == 'سلام') {
        btn.sendMessage(chatId, 'سلام کاربر گرامی');
    }

    if(!definition) {
        bot.sendMessage(chatId, 'دستور ارسال شده تعریف نشده است.');
    }

});