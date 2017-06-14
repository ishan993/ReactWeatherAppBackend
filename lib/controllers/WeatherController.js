import axios from 'axios';
import config from '../config';

const ROOT_URL = 'https://api.darksky.net/forecast/'+config.WEATHER_API_KEY+'/';

export default (app) => {
    console.log('I got this date: '+new Date(1497412800*1000));

    app.get('/weather', (req, res) => {
        const URL = ROOT_URL+req.query.lat+','+req.query.lng;
        const fetchRequest = axios.get(URL);

        fetchRequest.then((response) => {
            res.status = 200;
            res.send(response.data);
        }).catch((error) => {
            console.log('I got this error:'+error.message);
            res.status = 400;
            res.json(error);
        });
    });
};