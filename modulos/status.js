'use strict';

import bot from '../config/bot';
import RiotUtil from '../util/riot_util';

const SERVICOS = {
  'Game':'Jogo',
  'Store':'Loja',
  'Website':'Site',
  'Client':'Cliente',
  'Update':'Atualização'
};

export function status( msg, match ) {
  RiotUtil.status()
    .then((response) => {
      let msgResposta = "Verificando sistema... \n\n";
      for(let servico of response.data.services) {
        msgResposta += `${SERVICOS[servico.name]}: ${servico.status}\n`;
      }
      return bot.sendMessage( msg.chat.id, msgResposta);
    }).catch((err) => {
      bot.sendMessage( msg.chat.id, 'Ocorreu um erro ao obter o status.');
      console.log(err);
    });
};