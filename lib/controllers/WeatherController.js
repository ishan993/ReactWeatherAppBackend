import { getForecast } from '../services/WeatherService';
//Here, I'll call a service method to return a latlng from place_id

export default (app) => {
    app.get('/weather', (req, res) => {
        getForecast({
            latitude: req.query.latitude,
            longitude: req.query.longitude
        }, (error, response)=>{
            if (error) {
                res.statusCode = 400;
                res.json({ error: error.message});
            } else {
                res.statusCode = 200;
                res.json({ data: response });
            }
        });
    });
};