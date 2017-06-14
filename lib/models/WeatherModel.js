export default (pForecastObject) => {
    const forecastObject = {};
    forecastObject.latitude = pForecastObject.latitude;
    forecastObject.longitude = pForecastObject.longitude;
    forecastObject.currentWeather = getCurrentForecastObj(pForecastObject.currently);
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
    data = [];
    dailyForecast.data.map((pDailyObj) =>  {
        const dailyObj = {};
        dailyObj.
    });
};