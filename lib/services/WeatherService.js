import axios from 'axios';
import config from '../config';
import weatherModel from '../models/WeatherModel';
import timeCapsuleModel from '../models/TimeCapsuleModel';
import { getPlaceLatLng } from './PlaceService';

const ROOT_URL = 'https://api.darksky.net/forecast/'+config.WEATHER_API_KEY+'/';

export const getForecast = (placeId, callback) => {

    getPlaceLatLng(placeId, (err, placeObj) => {
        if (err) {
            callback(err);
        } else {
            const URL = ROOT_URL+placeObj.location.lat+','+placeObj.location.lng;
            const fetchRequest = axios.get(URL);

            fetchRequest.then((response) => {
                const responseObj = weatherModel(response.data);
                responseObj.address = placeObj.address;
                callback(null, responseObj);
            }).catch((err) => {
                console.log('I got this errorX:'+err);
                callback(err);
            });
        }
    });
};

export const getTimeCapsule = (timeCapObj, callback) => {
    const URL = ROOT_URL+timeCapObj.lat+','+timeCapObj.lng+','+timeCapObj.date;
    const timeCapReq = axios.get(URL, {
        params: {
            exclude: 'currently,flags'
        }
    });

    timeCapReq.then((response)=>{
        const responseObj = timeCapsuleModel(response.data);
        callback(null, responseObj);
    }).catch((err)=>{
        console.log('here is the errror'+err.message);
        callback(err);
    });
};