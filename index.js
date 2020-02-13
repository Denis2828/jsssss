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

var data = [
	{ "ins": "q", "outs": "%001%" },
	{ "ins": "w", "outs": "%002%" },
	{ "ins": "e", "outs": "%003%" },
	{ "ins": "r", "outs": "%004%" },
	{ "ins": "t", "outs": "%005%" },
	{ "ins": "y", "outs": "%006%" },
	{ "ins": "u", "outs": "%007%" },
	{ "ins": "i", "outs": "%008%" },
	{ "ins": "o", "outs": "%009%" },
	{ "ins": "p", "outs": "%000%" },
	{ "ins": "a", "outs": "%011%" },
	{ "ins": "s", "outs": "%012%" },
	{ "ins": "d", "outs": "%013%" },
	{ "ins": "f", "outs": "%014%" },
	{ "ins": "g", "outs": "%015%" },
	{ "ins": "h", "outs": "%016%" },
	{ "ins": "j", "outs": "%017%" },
	{ "ins": "k", "outs": "%018%" },
	{ "ins": "l", "outs": "%019%" },
	{ "ins": "z", "outs": "%010%" },
	{ "ins": "x", "outs": "%021%" },
	{ "ins": "c", "outs": "%022%" },
	{ "ins": "v", "outs": "%023%" },
	{ "ins": "b", "outs": "%024%" },
	{ "ins": "n", "outs": "%025%" },
	{ "ins": "m", "outs": "%026%" },
	{ "ins": "1", "outs": "%033%" },
	{ "ins": "2", "outs": "%034%" },
	{ "ins": "3", "outs": "%035%" },
	{ "ins": "4", "outs": "%036%" },
	{ "ins": "5", "outs": "%037%" },
	{ "ins": "6", "outs": "%038%" },
	{ "ins": "7", "outs": "%039%" },
	{ "ins": "8", "outs": "%041%" },
	{ "ins": "9", "outs": "%042%" },
	{ "ins": "0", "outs": "%043%" },
	{ "ins": " ", "outs": "%044%" },
	{ "ins": "`", "outs": "%045%" },
	{ "ins": "~", "outs": "%046%" },
	{ "ins": "!", "outs": "%047%" },
	{ "ins": "@", "outs": "%048%" },
	{ "ins": "#", "outs": "%049%" },
	{ "ins": "$", "outs": "%051%" },
	{ "ins": "%", "outs": "%052%" },
	{ "ins": "^", "outs": "%053%" },
	{ "ins": "&", "outs": "%054%" },
	{ "ins": "*", "outs": "%055%" },
	{ "ins": "(", "outs": "%056%" },
	{ "ins": ")", "outs": "%057%" },
	{ "ins": "\"", "outs": "%058%" },
	{ "ins": "№", "outs": "%059%" },
	{ "ins": ";", "outs": "%061%" },
	{ "ins": ":", "outs": "%062%" },
	{ "ins": "?", "outs": "%063%" },
	{ "ins": "<", "outs": "%064%" },
	{ "ins": ">", "outs": "%065%" },
	{ "ins": "|", "outs": "%066%" },
	{ "ins": "\\", "outs": "%067%" },
	{ "ins": "/", "outs": "%068%" },
	{ "ins": "[", "outs": "%069%" },
	{ "ins": "]", "outs": "%071%" },
	{ "ins": "{", "outs": "%072%" },
	{ "ins": "}", "outs": "%073%" },
	{ "ins": "й", "outs": "%074%" },
	{ "ins": "ц", "outs": "%075%" },
	{ "ins": "у", "outs": "%076%" },
	{ "ins": "к", "outs": "%077%" },
	{ "ins": "е", "outs": "%078%" },
	{ "ins": "н", "outs": "%079%" },
	{ "ins": "г", "outs": "%081%" },
	{ "ins": "ш", "outs": "%082%" },
	{ "ins": "щ", "outs": "%083%" },
	{ "ins": "з", "outs": "%084%" },
	{ "ins": "х", "outs": "%085%" },
	{ "ins": "ъ", "outs": "%086%" },
	{ "ins": "ф", "outs": "%087%" },
	{ "ins": "ы", "outs": "%088%" },
	{ "ins": "в", "outs": "%089%" },
	{ "ins": "а", "outs": "%091%" },
	{ "ins": "п", "outs": "%092%" },
	{ "ins": "р", "outs": "%093%" },
	{ "ins": "о", "outs": "%094%" },
	{ "ins": "л", "outs": "%095%" },
	{ "ins": "д", "outs": "%096%" },
	{ "ins": "ж", "outs": "%097%" },
	{ "ins": "э", "outs": "%098%" },
	{ "ins": "я", "outs": "%099%" },
	{ "ins": "ч", "outs": "%010%" },
	{ "ins": "с", "outs": "%020%" },
	{ "ins": "м", "outs": "%030%" },
	{ "ins": "и", "outs": "%040%" },
	{ "ins": "т", "outs": "%050%" },
	{ "ins": "ь", "outs": "%060%" },
	{ "ins": "б", "outs": "%070%" },
	{ "ins": "ю", "outs": "%080%" },
	{ "ins": ".", "outs": "%090%" },
	{ "ins": ",", "outs": "%190%" },

]; //DataBase;

bot.on('message', function onMessage(msg) {
	for (var i = 0; i < inp.length; i++) {
		for (var a = 0; a < data.length; a++) {
			if (data[a].ins == msg[i]) {
				out += data[a].outs;
			}
		}
	}
	bot.sendMessage(msg.chat.id, out);
	out = "";
});