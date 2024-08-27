require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://guess-the-number-seven-theta.vercel.app/';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    'Welcome to the Guess the Number game! Click the button below to start playing.',
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Play the Game',
              web_app: { url: webAppUrl },
            },
          ],
        ],
      },
    }
  );
});
