'use strict';

import bot from '../config/bot';

export function start( msg, match ) {
    bot.sendMessage( msg.chat.id, "Energizado e pronto para servir. \n" +
                                  "Eu fui criado para servi a você, basta enviar o comando certo. \n" +
                                  "Para conhecer os meus comandos digite /comandos")
      .catch((err) => console.log(err))
} 