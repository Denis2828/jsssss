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

function send(message){
	bot.sendMessage(msg.chat.id, message);
}

var commands = [
	{"input": "Привет", "output": "Привет, друг)"},
	{"input": "Пока", "output": "До встречи!"},
	{"input": "Как дела?", "output": "Отлично!"},
	{"input": "Что делаешь?", "output": "Общаюсь с тобой)"},
	{"input": "Как тебя зовут?", "output": "Меня зовут Bot_Den, для друзей просто Den"}
]

bot.on('message', function onMessage(msg) {
	if(msg.text[0] == '/'){
		var defis = msg.text.indexOf("-");
		switch(msg.text.slice(1, defis)){
			case "Меня зовут":
				USER_NAME = msg.text.slice(defis+1, msg.text.length);
			break;
			case "Команды":
				var list;
				for(var q=0;q<commands.length;q++){
					list+=commands[q].input+"\n";
				}
				list+="/Меня зовут-[Ваше имя]\n"
				send(list);
			break;
		}
	}
	for(var i = 0;i<commands.length;i++){
		if(msg.text == commands[i].input){
			send(commands[i].output);
		}
	}
});