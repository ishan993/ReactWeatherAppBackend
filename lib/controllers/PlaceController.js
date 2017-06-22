import { getPlacesSuggestions, getPlaceInfo } from '../services/PlaceService';


// the controller just deals with endpoints for incoming requests and
// for sending response. No other logic here. 
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
    
    // Receives place_Id and returns a latlng obj 
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
