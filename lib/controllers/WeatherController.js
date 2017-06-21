import { getForecast, getTimeCapsule } from '../services/WeatherService';
// Here, I'll call a service method to return a latlng from place_id

export default (app) => {
    app.get('/weather', (req, res) => {
        getForecast({
            lat: req.query.lat,
            lng: req.query.lng
        }, (error, response)=>{
            if (error) {
                res.statusCode = 400;
                res.json({ error: error.message});
            } else {
                res.statusCode = 200;
                res.json({ result: response });
            }
        });
    });

    app.get('/weather/timecapsule', (req, res) => {
        getTimeCapsule({
            lat: req.query.lat,
            lng: req.query.lng,
            date: req.query.date
        }, (error, response) => {
                if (error){
                    res.statusCode = 400;
                    res.json({ error: error.message });
                } else {
                    console.log('returning time caps');
                    res.statusCode = 200;
                    res.json({ timeCapsuleData: response });
                    res.end();
                }
            }
        );
    });
};