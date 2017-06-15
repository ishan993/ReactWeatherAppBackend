const iconMap = {
    'cloudy': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/cloud-1_oaz7gl.png',
    'partly-cloudy-day': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/cloud-2_ygbw4g.png',
    'rain': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/rain-1_psrxi1.png',
    'clear-day': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/sun_h5ulrj.png',
    'clear-night': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/moon_alddyl.png',
    'partly-cloudy-night': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/cloud_wh2goa.png',
    'wind': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/cloud-2_ygbw4g.png',
    'snow': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/snow_cpyh3w.png'
};

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default (pForecastObject) => {
    const forecastObject = {};

    forecastObject.latitude = pForecastObject.latitude;
    forecastObject.longitude = pForecastObject.longitude;
    forecastObject.currentWeather = getCurrentForecastObj(pForecastObject.currently);
    forecastObject.daily = getDailyForecast(pForecastObject.daily);

    return forecastObject;
};

const getCurrentForecastObj = (pCurrentForecast) => {
    const currentForecast = {};
    console.log('here are the stats'+JSON.stringify(pCurrentForecast));
    currentForecast.summary = pCurrentForecast.summary;
    currentForecast.icon = iconMap[pCurrentForecast.icon];
    currentForecast.temperature = pCurrentForecast.temperature;
    currentForecast.humidity = pCurrentForecast.humidity;
    currentForecast.dewPoint = pCurrentForecast.dewPoint;
    currentForecast.pressure = pCurrentForecast.pressure;
    currentForecast.windSpeed = pCurrentForecast.windSpeed;
    currentForecast.visibility = pCurrentForecast.visibility;
    currentForecast.uvIndex = pCurrentForecast.uvIndex;
    currentForecast.time = pCurrentForecast.time;

    return currentForecast;
};

const getDailyForecast = (pDailyForecast) => {
    const dailyForecast = {};
    dailyForecast.summary = pDailyForecast.summary;
    dailyForecast.icon = pDailyForecast.icon;
    const data = [];
    pDailyForecast.data.map((pDailyObj) =>  {
        const dailyObj = {};
        dailyObj.day = getDayFromTimeStamp(pDailyObj.time);
        dailyObj.summary = pDailyObj.summary;
        dailyObj.icon = iconMap[pDailyObj.icon];
        dailyObj.temperatureMin = pDailyObj.temperatureMin;
        dailyObj.temperatureMax = pDailyObj.temperatureMax;

        data.push(dailyObj);
    });
    dailyForecast.data = data;

    return dailyForecast;
};

const getDayFromTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp*1000);
    return day[date.getDay()];
};