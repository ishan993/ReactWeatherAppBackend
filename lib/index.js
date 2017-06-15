import express from 'express';
import cors from 'cors';
import placeController from './controllers/PlaceController';
import weatherController from './controllers/WeatherController';


const app = express();

app.use(cors());

placeController(app);
weatherController(app);

app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
