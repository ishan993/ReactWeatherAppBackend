import { getForecast, getTimeCapsule } from '../services/WeatherService';
// Here, I'll call a service method to return a latlng from place_id

// Receives latlng and send summary, daily and hourly forecast
export default (app) => {
    app.get('/weather', (req, res) => {
        // check if the request contains the expected query parameters
        if (isNaN(req.query.lat) || isNaN(req.query.lng)) {
            const error = {
                status: 400,
                message: 'The request is missing proper latlng query params. Please provide valid params and retry'
            };
            res.statusCode = 400;
            res.json({error});
        } else {
            getForecast({
                lat: req.query.lat,
                lng: req.query.lng
            }, (error, response) => {
                if (error) {
                    res.setHeader('statusCode', 400);
                    res.json({ error });
                } else {
                    res.setHeader('statusCode', 200);
                    res.json({ result: response });
                }
            });
        }
    });

    // Receives latlng and a timestamp and returns a timecapsule object
    app.get('/weather/timecapsule', (req, res) => {
        // You know the drill
        if (isNaN(req.query.lat) || isNaN(req.query.lng) || isNaN(req.query.date)) {
            const error = {
                status: 400,
                message: 'The request has invalid/missing query params.'+
                'Please provide proper lat, lng and date params and try again'
            };
            res.statusCode = 400;
            res.json({ error });
        } else {
            getTimeCapsule({
                lat: req.query.lat,
                lng: req.query.lng,
                date: req.query.date
            }, (error, response) => {
                    if (error){
                        res.statusCode = error.status;
                        res.json({ error});
                    } else {
                        console.log('returning time caps');
                        res.statusCode = 200;
                        res.json({ timeCapsuleData: response });
                    }
                }
            );
        }
    });
};