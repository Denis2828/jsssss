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

var commands = [
	{"input": "Привет", "output": "Привет, друг)"},
	{"input": "Пока", "output": "До встречи!"},
	{"input": "Как дела?", "output": "Отлично!"},
	{"input": "Что делаешь?", "output": "Общаюсь с тобой)"},
	{"input": "Как тебя зовут?", "output": "Меня зовут Bot_Den, для друзей просто Den"}
]

bot.on('message', function onMessage(msg) {
	for(var i = 0;i<commands.length;i++){
		if(msg.text == commands[i].input){
			bot.sendMessage(msg.chat.id, commands[i].output);
		}
	}
});