const http = require('axios');
const Constantes = require('../config/constantes');

const RiotUtil = {

    SummonerById : (id) => 
        http.get(id, {
            baseURL: Constantes.RIOT.URLS.SUMMONER_BY_ID,
            params: Constantes.RIOT.TOKEN
        }),

    SummonerByName: (name) => 
        http.get(name, {
            baseURL: Constatnes.RIOT.URLS.SUMMONER_BY_NAME,
            params: Constantes.RIOT.TOKEN,
        })
        .then((response) => response.data.id)
        .then(SummonerById),
        
};

module.exports = RiotUtil;