import { getPlacesSuggestions, getPlaceInfo } from '../services/PlaceService';


// the controller just deals with endpoints for incoming requests and
// for sending response. No other logic here.
export default (app) => {

    app.get('/places/suggestions', (req, res) => {
        // If there's no suggestion query param, send a 400 response
        if (!req.query.suggestion) {
            const error = {
                message: 'The request is missing the suggestion query param. Please provide a valid suggestion query'
            };
            res.statusCode = 400;
            res.json({error});
        } else {
            getPlacesSuggestions(req.query.suggestion,
            (err, response) => {
                if (err) {
                    res.statusCode = 400;
                    res.json({ err });
                } else {
                    res.statusCode = 200;
                    res.json({ result: response });
                }
            });
        }
    });

    // Receives place_Id and returns a latlng obj
    app.get('/places/latlng', (req, res) => {
        if (!req.query.placeId) {
            const error = {
                message: 'The request is missing the placeId query param. Please provide a valid query param'
            };
            res.statusCode = 400;
            res.json({error});
        } else {

            getPlaceInfo({ place_id: req.query.placeId },
             (error, response) => {
                if (error){
                    res.statusCode = 400;
                    res.json({ error });
                } else {
                    res.statusCode = 200;
                    res.json({ result: response });
                }
            });
        }
    });
};
