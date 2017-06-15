import config from '../config';

 const googleMapsClient = require('@google/maps').createClient({
        key: config.MAPS_API_KEY
});


export const getPlacesSuggestions = (query, callback) => {

    googleMapsClient.placesQueryAutoComplete({
        input: query
    }, (err, response) => {
        if (err)
            callback(err);
        else {
            let placesDescription = [];
            response.json.predictions.map((place) => {
                console.log('I got this place:'+JSON.stringify(place));
                placesDescription.push({
                    name: place.description,
                    place_id: place.place_id
                });
            });
            callback(null, placesDescription);
        }
    });
};

export const getPlaceLatLng= (placeId, callback) => {
    googleMapsClient.reverseGeocode({
            place_id: 'ChIJ-Y7t-qm02IcRW-C7IsrqOb4'
        },(err, response) => {
            if (err)
                callback(err);
            else {
                console.log('here is the place latlng:' + JSON.stringify(response));
                const latLngObj = response.json.results[0].geometry.location;
                callback(null, latLngObj);
            }
    });
};
