'use strict';

import http from 'axios';
import Constantes from '../config/constantes';

export class RiotUtil {

    summonerById(id) {
        return http.get(id, {
            baseURL: Constantes.RIOT.URLS.SUMMONER_BY_ID,
            params: Constantes.RIOT.TOKEN
        });
    }

    summonerByName(name)  {
        return http.get(name, { baseURL: Constantes.RIOT.URLS.SUMMONER_BY_NAME, params: Constantes.RIOT.TOKEN })
                   .then((response) => response.data.id)
                   .then(SummonerById);
    } 

}