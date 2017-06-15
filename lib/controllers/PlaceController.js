import { getPlacesSuggestions } from '../services/PlaceService';

export default (app) => {

    app.get('/places', (req, res)=>{
        // handle status codes here!
        getPlacesSuggestions(req.query.suggestion,
           (err, response)=>{
               if (err) {
                   res.statusCode = 400;
                   res.json({ error: err.message });
               } else {
                   res.statusCode = 200;
                   res.json({ result: response });
               }
            });
    });
};
