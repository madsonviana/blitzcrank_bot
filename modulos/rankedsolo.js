'use strict';
import bot from '../config/bot';
import RiotUtil from '../util/riot_util';

export function rankedsolo( msg, match ) {
  let name = match[1];
  RiotUtil.rankByName(name)
    .then((response) => {
      if(response.data.lenght > 0) {
        let rank = response.data[0];
        return bot.sendMessage( msg.chat.id, `O jogador ${rank.playerOrTeamName} esta no elo ${rank.tier} ${rank.rank} com ${rank.leaguePoints} pontos e ${rank.wins} vitórias.`)
      } else {
        return bot.sendMessage( msg.chat.id, `O jogador ${name} não está classificado.`);
      }
    })
    .catch((err) => {
      bot.sendMessage( msg.chat.id, `Ocorreu um erro ao obter o rank do invocador ${name}`)
      console.log(err);
    });
}