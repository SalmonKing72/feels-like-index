function Calculator() {
    "use strict";
}

Calculator.prototype.currentTempFahr = function (obj) {
    return Math.ceil((obj.main.temp - 273.15) * 1.80 + 32) || null;
}

Calculator.prototype.currentTempCels = function (obj) {
    return Math.ceil((obj.main.temp - 273.15)) || null;
}

Calculator.prototype.currentWeather = function (obj) {
    "use strict";
    if (obj !== null && obj !== undefined) {
        this.description = obj.weather[0].description;
    } else {
        throw new Error("the current weather is unknown at this time.");
    }
};

Calculator.prototype.calculateWindChill = function (obj) {
    "use strict";
    if (obj !== null && obj !== undefined) {
        var windSpeed = obj.wind.speed,
            temperature = this.currentTempFahr(obj),
            WIND_CHILL_CONSTANTS = [35.74, 0.6215, 35.75, 0.4275, 0.16];
        //if(windSpeed is fast enough and temp. is cold enough) calculate wind chill.
        if (temperature >= -45 && temperature <= 45
                && windSpeed >= 3 && windSpeed <= 60) {
            return Math.ceil(WIND_CHILL_CONSTANTS[0] + (WIND_CHILL_CONSTANTS[1] * temperature) -
                WIND_CHILL_CONSTANTS[2] * Math.pow(windSpeed, WIND_CHILL_CONSTANTS[4]) +
                WIND_CHILL_CONSTANTS[3] * temperature * Math.pow(windSpeed, WIND_CHILL_CONSTANTS[4]));
        }
    }
};

//if(humidity is high enough and temp. is warm enough) calculate heat index.
