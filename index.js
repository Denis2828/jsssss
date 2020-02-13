const TOKEN = process.env.TELEGRAM_TOKEN || '1087438094:AAE2F8FdURjBJV9PYCCtsfmnUHEn4ldqlVc';
const TelegramBot = require('node-telegram-bot-api');
const options = {
  webHook: {
    port: process.env.PORT
  }
};
const url = process.env.APP_URL || 'https://boiling-brook-27511.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);
bot.setWebHook(`${url}/bot${TOKEN}`);

var option = {
    reply_markup: JSON.stringify({
       inline_keyboard: [
           [{ text: 'Пример', callback_data: '1' }]
       ]
   })
};

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  if (action === '1') {
    bot.sendMessage(opts.chat_id, "Игра получилась отличная. Но можно ещё добавить возможность играть по сети)");
  }
});

bot.on('message', function onMessage(msg) {
	if(msg.text == "/start"){
		bot.sendMessage(msg.chat.id, "Привет. Я робот компании Denisca28. Я создан для того что пользователи могли оставить отзыв. Но не пробуте задать вопрос здесь, так как на него никто не ответит). Вы уже можете оставить отзыв и если хотите написать что можно улучшить в каком либо продукте). Удачи", option);
	}
});