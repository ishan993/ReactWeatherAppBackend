import { iconMap, getTime, getDayFromTimeStamp } from '../utils';

export default (pForecastObject) => {
    const forecastObject = {};

    forecastObject.lat = pForecastObject.latitude;
    forecastObject.lng = pForecastObject.longitude;
    forecastObject.currentWeather = getCurrentForecastObj(pForecastObject.currently);
    forecastObject.daily = getDailyForecast(pForecastObject.daily);

    return forecastObject;
};

const getCurrentForecastObj = (pCurrentForecast) => {
    const currentForecast = {};

    currentForecast.summary = pCurrentForecast.summary;
    currentForecast.icon = iconMap[pCurrentForecast.icon];
    currentForecast.temperature = pCurrentForecast.temperature;
    currentForecast.humidity = pCurrentForecast.humidity;
    currentForecast.dewPoint = pCurrentForecast.dewPoint;
    currentForecast.pressure = pCurrentForecast.pressure;
    currentForecast.windSpeed = pCurrentForecast.windSpeed;
    currentForecast.visibility = pCurrentForecast.visibility;
    currentForecast.uvIndex = pCurrentForecast.uvIndex;
    currentForecast.time = getTime(pCurrentForecast.time);

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
        dailyObj.time = pDailyObj.time;
        dailyObj.summary = pDailyObj.summary;
        dailyObj.icon = iconMap[pDailyObj.icon];
        dailyObj.temperatureMin = pDailyObj.temperatureMin;
        dailyObj.temperatureMax = pDailyObj.temperatureMax;
        console.log(dailyObj.day+'   '+pDailyObj.icon);
        data.push(dailyObj);
    });
    dailyForecast.data = data;

    return dailyForecast;
};

