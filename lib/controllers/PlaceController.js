import { getPlacesSuggestions, getPlaceInfo } from '../services/PlaceService';

export default (app) => {

    app.get('/places/suggestions', (req, res) => {
        // handle status codes here!
        getPlacesSuggestions(req.query.suggestion,
           (err, response)=>{
               if (err) {
                   res.statusCode = 400;
                   res.json({ message: err.message });
               } else {
                   res.statusCode = 200;
                   res.json({ result: response });
               }
            });
    });

    app.get('/places/latlng', (req, res) => {
        getPlaceInfo({
            place_id: req.query.placeId
        }, (err, response) => {
            if (err){
                res.statusCode = 400;
                res.json({ message: err.message });
            } else {
                res.statusCode = 200;
                res.json({ result: response });
            }
        });
    });
};
