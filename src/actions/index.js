import axios from 'axios';

const API_KEY = 'eec5579df611816a274fe2078d601737';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},usa`;
    const request = axios.get(url);

    return{
      type:FETCH_WEATHER,
        payload:request
    };
}