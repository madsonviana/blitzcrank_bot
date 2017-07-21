const TelegramBot = require( 'node-telegram-bot-api' );
const Constantes = require( './constantes.js' );

const bot = new TelegramBot( Constantes.TOKEN_TELEGRAM, { polling: true } )

module.exports = bot
