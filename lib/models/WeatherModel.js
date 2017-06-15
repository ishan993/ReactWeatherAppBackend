const iconMap = {
    'cloudy': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/cloud-1_oaz7gl.png',
    'partly-cloudy-day': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/cloud-2_ygbw4g.png',
    'rain': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/rain-1_psrxi1.png',
    'clear-day': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/sun_h5ulrj.png',
    'partly-cloudy-night': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/cloud_wh2goa.png',
    'wind': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/cloud-2_ygbw4g.png',
    'snow': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/snow_cpyh3w.png'
};

export default (pForecastObject) => {
    const forecastObject = {};

    forecastObject.latitude = pForecastObject.latitude;
    forecastObject.longitude = pForecastObject.longitude;
    forecastObject.currentWeather = getCurrentForecastObj(pForecastObject.currently);
    forecastObject.daily = getDailyForecast(pForecastObject.daily);

    return forecastObject;
};

const getCurrentForecastObj = (passedCurrentForecast) => {
    const currentWeather = {};
    currentWeather.summary = passedCurrentForecast.summary;
    currentWeather.icon = passedCurrentForecast.icon;
    currentWeather.temperature = passedCurrentForecast.temperature;
    currentWeather.time = passedCurrentForecast.time;

    return currentWeather;
};

const getDailyForecast = (pDailyForecast) => {
    const dailyForecast = {};
    dailyForecast.summary = pDailyForecast.summary;
    dailyForecast.icon = pDailyForecast.icon;
    const data = [];
    pDailyForecast.data.map((pDailyObj) =>  {
        const dailyObj = {};
        dailyObj.time = pDailyObj.time;
        dailyObj.summary = pDailyObj.summary;
        dailyObj.icon = pDailyObj.icon;
        dailyObj.temperatureMin = pDailyObj.temperatureMin;
        dailyObj.temperatureMax = pDailyObj.temperatureMax;

        data.push(dailyObj);
    });
    dailyForecast.data = data;

    return dailyForecast;
};