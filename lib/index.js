import express from 'express';
import cors from 'cors';
import placeController from './controllers/PlaceController';
import weatherController from './controllers/WeatherController';

const app = express();
const port = process.env.PORT || 1337;

// to provide Cross-Origin Resourse sharing
app.use(cors());

placeController(app);
weatherController(app);

app.listen(port);
console.log('Server running at http://127.0.0.1:1337/');
