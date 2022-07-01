const request = require('postman-request')

const geocode = (address, callback) => {
    const accessToken = 'pk.eyJ1IjoibXJrZXZpbmhhbSIsImEiOiJjbDR4ZzVlcWkwNWJnM2RwYTBxNW1lNHhrIn0.aiFGo-0PdDp3E2h6mGOE3g'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${accessToken}&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode