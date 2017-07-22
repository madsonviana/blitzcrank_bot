'use strict';
import bot from '../config/bot';

const risadasArray = [
  'ha ha ha ha ha',
  'he he he he he',
  'ho ho ho ho ho',
  'kk kk kk kk kk'
]

export function risadas ( msg, match ) {
  bot.sendMessage( msg.chat.id, risadasArray[Math.floor(Math.random() * risadasArray.length)] )
    .catch( (err) => console.log(err) );
}
