import express from 'express';
import cors from 'cors';
import config from './config';
import placeController from './controllers/PlaceController';
import weatherController from './controllers/WeatherController';

const googleMapsClient = require('@google/maps').createClient({
  key: config.MAPS_API_KEY
});
const app = express();

app.use(cors());

app.get('/places', (req, res)=>{

  console.log('keep your hello to yourself, bastard'+req.query.suggestion);
  googleMapsClient.placesQueryAutoComplete({
    input: req.query.suggestion
    }, (err, response) => {
      if (err)
        console.log('I got an error!'+JSON.stringify(err));
      else {
        let placesDescription = [];
        response.json.predictions.map((place) => {
          console.log('I got this place:'+place.description);
          placesDescription.push({name: place.description});
        });
        res.statusCode = 200;
        res.send({ places: placesDescription});
      }
    });
});

placeController(app);
weatherController(app);

app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
