'use strict';
import bot from '../config/bot';

const risada = ( msg, match ) =>
    bot.sendMessage( msg.chat.id, "ha ha ha ha \n");

export function piada( msg, match ) {
  bot.sendMessage( msg.chat.id, "Eu coloquei o 'bô' no robô \n")
    .then( risada )
    .catch((err) => {
      bot.sendMessage( msg.chat.id, 'Desculpe aí, mas eu esqueci todas as piadas!');
      console.log(err);
    });
};