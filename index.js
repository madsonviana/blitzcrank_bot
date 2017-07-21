'use strict';

import bot from './config/bot'

import {
    start,
    comandos,
    risadas,
    rankedsolo,
    rankedflex,
    partida,
    status,
    piada
} from './modulos'

bot.onText( /\/start/, start)
bot.onText( /\/(comandos|help)/, comandos)
bot.onText( /lol|kkkk|huehue|h+a+h+a+|h+e+h+e+|h+i+h+i+|h+u+a+s+|j+e+j+e+|h+u+a+h+u+a|h+u+e+h+u+e/i, risadas)
bot.onText( /\/status/, status)
bot.onText( /\/piada/, piada)
bot.onText( /\/rankedsolo (.*)/, rankedsolo)
bot.onText( /\/rankedflex (.*)/, rankedflex)
bot.onText( /\/partida (.*)/, partida)
