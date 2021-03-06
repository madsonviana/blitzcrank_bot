'use strinct';

const RIOT_API_URL_BASE = 'https://br1.api.riotgames.com/lol/';

export const TOKEN_TELEGRAM = process.env.TOKEN_TELEGRAM;
    
export const RIOT= {
    TOKEN: {api_key : process.env.TOKEN_RIOT},
    URLS: {
        STATUS: RIOT_API_URL_BASE + 'status/v3/shard-data/',
        SUMMONER_BY_ID: RIOT_API_URL_BASE + 'summoner/v3/summoners/',
        SUMMONER_BY_NAME: RIOT_API_URL_BASE + 'summoner/v3/summoners/by-name/',
        RANK: RIOT_API_URL_BASE + 'league/v3/positions/by-summoner/',
        GAMES: RIOT_API_URL_BASE + 'spectator/v3/active-games/by-summoner/',
    },
}
