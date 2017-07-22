'use strict';
import bot from '../config/bot';
import RiotUtil from '../util/riot_util';

export function partida( msg, match ) {
  let name = match[1];
  RiotUtil.gamesByName(name)
    .then((response) => {
      console.log(response.data);
      let participants = response.data.participants;
      let responseMsg = 'O invocador está jogando com: \n' +
                        '\n' +
                        'Time Azul: \n' +
                        participants[0].summonerName + '\n' +
                        participants[1].summonerName + '\n' +
                        participants[2].summonerName + '\n' +
                        participants[3].summonerName + '\n' +
                        participants[4].summonerName + '\n' +
                        '\n' +
                        'Time Vermelho: \n' +
                        participants[5].summonerName + '\n' +
                        participants[6].summonerName + '\n' +
                        participants[7].summonerName + '\n' +
                        participants[8].summonerName + '\n' +
                        participants[9].summonerName + '\n';
      bot.sendMessage( msg.chat.id, responseMsg);
    }).catch((err) => {
      bot.sendMessage( msg.chat.id, `Esse invocador ${name} não está em uma partida ativa no momento, tente daqui a pouco.`)
      console.log(err);
    });
}