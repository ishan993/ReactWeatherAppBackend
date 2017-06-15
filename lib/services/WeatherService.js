import axios from 'axios';
import config from '../config';
import weatherModel from '../models/WeatherModel';
import { getPlaceLatLng } from './PlaceService';

const ROOT_URL = 'https://api.darksky.net/forecast/'+config.WEATHER_API_KEY+'/';

export const getForecast = (placeId, callback) => {

    getPlaceLatLng(placeId, (err, latLngResponse) => {
        if (err) {
            callback(err);
        } else {
            const URL = ROOT_URL+latLngResponse.latitude+','+latLngResponse.longitude;
            const fetchRequest = axios.get(URL);

            fetchRequest.then((response) => {
            const responseObj = weatherModel(response.data);
            console.log(responseObj);
            callback(null, responseObj);
            }).catch((err) => {
                console.log('I got this error:'+err.message);
                callback(err);
            });
        }
    });
};