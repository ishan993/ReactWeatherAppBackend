import axios from 'axios';
import config from '../config';
import weatherModel from '../models/WeatherModel';
import timeCapsuleModel from '../models/TimeCapsuleModel';
import { getPlaceInfo } from './PlaceService';

const ROOT_URL = 'https://api.darksky.net/forecast/'+config.WEATHER_API_KEY+'/';

export const getForecast = (latLngObj, callback) => {

    getPlaceInfo({
        latlng: latLngObj
    }, (error, address) => {
        if (error) {
            console.log('ErrorW'+JSON.stringify(error));
            callback(error);
        } else {
            const URL = ROOT_URL+latLngObj.lat+','+latLngObj.lng;
            const fetchRequest = axios.get(URL);

            fetchRequest.then((response) => {
                const responseObj = weatherModel(response.data);
                responseObj.address = address;
                callback(null, responseObj);
            }).catch((error) => {
                console.log('I got this errorX:'+error);
                callback(error);
            });
        }
    });
};

export const getTimeCapsule = (timeCapObj, callback) => {
    const { lat, lng, date} = timeCapObj;
    const URL = ROOT_URL+lat+','+lng+','+date;
    // Request to get time capsule info from DarkSky's API
    const timeCapReq = axios.get(URL, {
        params: {
            exclude: 'currently,flags'
        }
    });

    // This request returns a name corresponding to the latlng
    // Since the DarkSky API does not return a name
    getPlaceInfo({
        latlng: {
            lat: lat,
            lng: lng
        }
    }, (error, address) => {
        if (error){
            const errorObj = {
                status: error.status,
                message: error.json.error_message
            };
            callback(errorObj);
        } else {
            timeCapReq.then((response)=>{
                const responseObj = timeCapsuleModel(response.data);
                responseObj.address = address;
                callback(null, responseObj);
            }).catch((error)=>{
                callback(error);
            });
        }
    });
};