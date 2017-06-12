import express from 'express';
import cors from 'cors';
import { config } from './config';

const googleMapsClient = require('@google/maps').createClient({
  key: config.MAPS_API_KEY
});
const app = express();
const names = ['Wasted time', 'Manhattan', 'Emmylou', 'Boots of Spanish leather'];



app.use(cors());

app.get('/places', (req, res, next)=>{
  
  console.log('keep your hello to yourself, bastard'+req.query.suggestion);
  googleMapsClient.places({
    query: req.query.suggestion
    }, (err, response) => {
      if(err)
        console.log("I got an error!"+JSON.stringify(err));
      else{
        console.log("Here's the response: "+JSON.stringify(response.body));
        res.send(response.body);
        res.statusCode = 200;
      }
    });
})
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
