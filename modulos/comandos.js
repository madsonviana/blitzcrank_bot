'use strict';

import bot from '../config/bot';

export function comandos( msg, match ) {
  bot.sendMessage( msg.chat.id, "Eu conheço os seguintes comandos: \n" +
                    "\n" +
                    "/invocador: Informações de um invocador  \n" +
                    "/partida: Informações da atual partida de um invocador  \n" +
                    "/rankedsolo: Informações da fila ranqueada solo de um invocador  \n" +
                    "/rankedflex: Informações da fila ranqueada flex de um invocador \n" +
                    "/status: Informa o status atual do servidor  \n")
}