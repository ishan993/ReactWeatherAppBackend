export const getTime = (timeStamp) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    const date =  new Date(timeStamp*1000);

    return date.toLocaleDateString('en-US', options).toString();
};

export const iconMap = {
    'cloudy': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/cloud-1_oaz7gl.png',
    'partly-cloudy-day': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/cloud-2_ygbw4g.png',
    'rain': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/rain-1_psrxi1.png',
    'clear-day': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/sun_h5ulrj.png',
    'clear-night': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/moon_alddyl.png',
    'partly-cloudy-night': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/cloud_wh2goa.png',
    'wind': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/cloud-2_ygbw4g.png',
    'snow': 'http://res.cloudinary.com/ishanvadwala/image/upload/v1497382246/snow_cpyh3w.png'
};

export const dayMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getDayFromTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp*1000);
    return dayMap[date.getDay()];
};

export const getHourFromTimeStamp = (timeStamp) => {
    const date  = new Date(timeStamp*1000);
    return date.getHours();
};