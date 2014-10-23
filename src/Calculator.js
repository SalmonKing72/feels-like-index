function Calculator() {
    "use strict";
}
Calculator.prototype.currentWeather = function (obj) {
    "use strict";
    if (obj !== null && obj !== undefined) {
        this.description = obj.weather[0].description;
        this.currentTempFahr = Math.ceil((obj.main.temp - 273.15) * 1.80 + 32);
        this.currentTempCels = obj.main.temp - 273.15;
    } else {
        throw new Error("the current weather is unknown at this time.");
    }
};

Calculator.prototype.calculateWindChill = function (obj) {
    "use strict";
    if (obj !== null && obj !== undefined) {
        var windSpeed = obj.wind.speed,
            temperature = this.currentTempFahr,
            WIND_CHILL_CONSTANTS = [35.74, 0.6215, 35.75, 0.4275, 0.16];
        //if(windSpeed is fast enough and temp. is cold enough) calculate wind chill
        //if(humidity is high enough and temp. is warm enough) calculate heat index.
    }
};
