'use strict';

import http from 'axios';
import { RIOT } from '../config/constantes';

export default class RiotUtil {

    static summonerById(id) {
        return http.get(String(id), {
            baseURL: RIOT.URLS.SUMMONER_BY_ID,
            params: RIOT.TOKEN
        });
    }

    static summonerByName(name)  {
        return http.get(name, { 
            baseURL: RIOT.URLS.SUMMONER_BY_NAME, 
            params: RIOT.TOKEN 
        });
    } 

    static status() {
        return http.get(RIOT.URLS.STATUS,{params: RIOT.TOKEN});
    }

    static rankById(id) {
        return http.get(String(id), {
            baseURL: RIOT.URLS.RANK,
            params: RIOT.TOKEN
        });
    }

    static rankByName(name) {
        return RiotUtil.summonerByName(name)
            .then((response) => RiotUtil.rankById(response.data.id));
    }

    static gamesById(id){
        return http.get(String(id), {
            baseURL: RIOT.URLS.GAMES,
            params: RIOT.TOKEN
        });
    }

    static gamesByName(name) {
        return RiotUtil.summonerByName(name)
            .then((response) => RiotUtil.gamesById(response.data.id));
    }

}