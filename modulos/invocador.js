const http = require( 'axios' );
const bot = require('../config/bot');
const RiotUtil = require('../util/riot_util');



const sendInvocador = ( msg, match ) =>
  RiotUtil
    .SummonerByName(match[1])
    .then((response) =>
      bot.sendMessage( msg.chat.id, "Sobre o invocador " + response.data.name + "\n" +
                                    "Level:  " + response.data.summonerLevel)
    )
    .catch((err) => console.log(err))

  module.exports = sendInvocador
