import config from '../config';

// let simpleCache = {};

const googleMapsClient = require('@google/maps').createClient({
        key: config.MAPS_API_KEY
});

// the place where the actual application logic is inplemented
// returns the top 5 matches for a given input using google's Autocomplete API
export const getPlacesSuggestions = (query, callback) => {

    googleMapsClient.placesQueryAutoComplete({
        input: query
    }, (err, response) => {
        if (err)
            callback(err);
        else {
            let placesDescription = [];
            response.json.predictions.map((place) => {
                placesDescription.push({
                    name: place.description,
                    place_id: place.place_id
                });
            });
            callback(null, placesDescription);
        }
    });
};

// Return latlng if a {placeId:placeId} is supplied
// else, returns the address.
// inefficient, but I needed the URLs in the front end to work with latlng instead of placeId
// bookmarks with LatLng would work. Darksky ap does not provide an address in return.
export const getPlaceInfo = (args, callback) => {

        googleMapsClient.reverseGeocode(args, (err, response) => {
                if (err){
                    callback(err);
                } else {
                    const placeObj = {};
                    const location = {};
                    location.lat = response.json.results[0].geometry.location.lat;
                    location.lng = response.json.results[0].geometry.location.lng;
                    placeObj.location = location;
                    placeObj.address = response.json.results[0].formatted_address;
                    if (args.latlng){
                       callback(null, placeObj.address);
                    } else {
                        callback(null, placeObj);
                    }
                }
        });
};
