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

var USER_NAME = "";


bot.on('message', function onMessage(msg) {
	if(msg.text[0] == '/'){
		var defis = msg.text.indexOf("-");
		switch(msg.text.slice(1, defis)){
			case "Меня зовут":
				USER_NAME = msg.text.slice(defis+2, msg.text.length);
				bot.sendMessage(msg.chat.id, USER_NAME);
			break;
		}
	}
});