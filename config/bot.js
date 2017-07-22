'use strict';
import TelegramBot from 'node-telegram-bot-api';
import {TOKEN_TELEGRAM} from './constantes';

const bot = new TelegramBot( TOKEN_TELEGRAM, { polling: true } );
export default bot;