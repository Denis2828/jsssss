const TOKEN = process.env.TELEGRAM_TOKEN || '1095975227:AAHresejfvqEcWBpqiGtd91elk4jUVBP-H0';
const TelegramBot = require('node-telegram-bot-api');
const options = {
  webHook: {
    port: process.env.PORT
  }
};
const url = process.env.APP_URL || 'https://boiling-brook-27511.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);
bot.setWebHook(`${url}/bot${TOKEN}`);

bot.on('message', function onMessage(msg) {
	if(msg.text == "/start"){
		bot.sendMessage(msg.chat.id, "Привет. Я робот компании Denisca28. Я создан для того что пользователи могли оставить отзыв. Но не пробуте задать вопрос здесь, так как на него никто не ответит). Вы уже можете оставить отзыв и если хотите написать что можно улучшить в каком либо продукте). Удачи");
	}
});