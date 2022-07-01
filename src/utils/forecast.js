const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const accessToken = 'ebde4be1866078cfa8f09004099db0d8'
    const url = `http://api.weatherstack.com/current?access_key=${accessToken}&query=${latitude},${longitude}&units=f`

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback(`Something went wrong: ${error}`)
        } else if (body.error) {
            callback(`Something went wrong: ${body.error.info}`, undefined)
        } else {
            const dataCurrent = body.current
            callback(undefined, `${dataCurrent.weather_descriptions[0]}. It is currently ${dataCurrent.temperature} degrees out. It feels like ${dataCurrent.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast