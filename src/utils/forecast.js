const request = require('request')

const forecast = (longitude, latitiude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e7546eee8cf2473736423f26f7ca6796&query=' + latitiude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0]
                + '. It is currently ' + body.current.temperature
                + ' degrees out (feels like ' + body.current.feelslike + ' degrees)'
                + ' and there is a ' + body.current.wind_dir + ' wind blowing at ' + body.current.wind_speed + 'km/h')
        }
    })
}

module.exports = forecast
