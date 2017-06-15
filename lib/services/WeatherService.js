import axios from 'axios';
import config from '../config';
import weatherModel from '../models/WeatherModel';

const ROOT_URL = 'https://api.darksky.net/forecast/'+config.WEATHER_API_KEY+'/';

export const getForecast = (latLngObj, callback) => {
    const URL = ROOT_URL+latLngObj.latitude+','+latLngObj.longitude;
    const fetchRequest = axios.get(URL);

    fetchRequest.then((response) => {
        const responseObj = weatherModel(response.data);
        console.log(responseObj);
        callback(null, responseObj);
    }).catch((err) => {
        console.log('I got this error:'+err.message);
        callback(err);
    });
};