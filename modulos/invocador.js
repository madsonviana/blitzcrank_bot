'use strict';
import bot from '../config/bot';
import RiotUtil from '../util/riot_util'; 

export function invocador( msg, match ) {
  let name = match[1];
  RiotUtil.summonerByName(name)
    .then((response) =>
      bot.sendMessage( msg.chat.id, `Sobre o invocador ${response.data.name} \nLevel: ${response.data.summonerLevel}`)
    )
    .catch((err) => {
      bot.sendMessage( msg.chat.id, `Ocorreu um erro ao obter informações sobre o invocador ${name}`);
      console.log(err);
    });
}