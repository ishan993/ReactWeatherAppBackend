import { getTime, iconMap, getHourFromTimeStamp } from '../utils';

// since I don't intend to use all the data returned,
// I'm building my own object from the data
export default (pTimeCapObj) => {
    const timeCapObj = {};
    timeCapObj.lat = pTimeCapObj.latitude;
    timeCapObj.lng = pTimeCapObj.longitude;
    timeCapObj.daily = getDailyTimeCapObj(pTimeCapObj.daily.data[0]);
    timeCapObj.hourly = getHourlyTimeCapObj(pTimeCapObj.hourly);

    return timeCapObj;
};

const getDailyTimeCapObj = (pDailyObj) => {
    const dailyObj = {};
    dailyObj.summary = pDailyObj.summary;
    dailyObj.time = getTime(pDailyObj.time);
    dailyObj.icon = iconMap[pDailyObj.icon];
    dailyObj.humidity = pDailyObj.humidity;
    dailyObj.windSpeed = pDailyObj.windSpeed;
    dailyObj.dewPoint = pDailyObj.dewPoint;
    dailyObj.visibility = pDailyObj.visibility;
    dailyObj.temperature = Math.round(pDailyObj.temperatureMin+pDailyObj.temperatureMax)/2;

    return dailyObj;
};

const getHourlyTimeCapObj = (pHourlyTimeCapObj) => {
    const hourlyTimeCapObj = [];
    pHourlyTimeCapObj.data.map((pHourlyObj)=> {
        const hourlyObj = {};
        
        hourlyObj.hour = getHourFromTimeStamp(pHourlyObj.time);
        hourlyObj.icon = iconMap[pHourlyObj.icon];
        hourlyObj.temperature = pHourlyObj.temperature;
        hourlyObj.dewPoint = pHourlyObj.dewPoint;
        hourlyObj.humidity = pHourlyObj.humidity;
        hourlyObj.windSpeed = pHourlyObj.windSpeed;
        hourlyObj.visibility = pHourlyObj.visibility;
        hourlyObj.pressure = pHourlyObj.pressure;

        hourlyTimeCapObj.push(hourlyObj);
    });

    return hourlyTimeCapObj;
};
