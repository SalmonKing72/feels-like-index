var Calculator = {
    
    currentTempFahr: function getCurrentTemperatureFahrenheit(obj) {
        "use strict";
        return Math.ceil((obj.main.temp - 273.15) * 1.80 + 32) || null;
    },
    
    currentTempCels: function getCurrentTemperatureCelsius(obj) {
        "use strict";
        return Math.ceil((obj.main.temp - 273.15)) || null;
    },
    
    currentWeather: function getCurrentWeather(obj) {
        "use strict";
        if (obj !== null && obj !== undefined) {
            this.description = obj.weather[0].description;
        } else {
            throw new Error("the current weather is unknown at this time.");
        }
    },
    
    calculateWindChill: function calculateWindChill(obj) {
        "use strict";
        if (obj !== null && typeof obj !== "undefined") {
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
    },
    
    calculateHeatIndex: function calculateHeatIndex(obj) {
        "use strict";
        if (obj !== null && typeof obj !== "undefined") {
            var temperature = this.currentTempFahr(obj),
                relativeHumidity = obj.main.humidity,
                simple_index = 0.5 * (temperature + 61.0 + ((temperature - 68.0) * 1.2) + (relativeHumidity * 0.094)),
                base_heat_index = 0,
                adjustment = 0;

            if (relativeHumidity > 100) {
                throw new Error("cannot calculate the heat index for humidity greater than 100%");
            }

            if (temperature < 80) {
                return temperature;
            }

            if ((temperature + Math.ceil(simple_index)) / 2 < 80) {
                return Math.ceil(simple_index);
            } else {
                base_heat_index = -42.379 + 2.04901523 * temperature + 10.14333127 * relativeHumidity
                        - 0.22475541 * temperature * relativeHumidity - 6.83783 * Math.pow(10, -3) * temperature * temperature
                        - 5.481717 * Math.pow(10, -2) * relativeHumidity * relativeHumidity
                        + 1.22874 * Math.pow(10, -3) * temperature * temperature * relativeHumidity
                        + 8.5282 * Math.pow(10, -4) * temperature * relativeHumidity * relativeHumidity
                        - 1.99 * Math.pow(10, -6) * temperature * temperature * relativeHumidity * relativeHumidity;

                if (relativeHumidity < 13 && temperature >= 80 && temperature <= 112) {
                    adjustment = ((13 - relativeHumidity) / 4) * Math.sqrt((17 - Math.abs(temperature - 95)) / 17);
                    return Math.ceil(base_heat_index - adjustment);
                } else if (relativeHumidity > 85 && temperature >= 80 && temperature <= 87) {
                    adjustment = 0.5 * (temperature + 61 + ((temperature - 68) * 1.2) + (relativeHumidity * 0.094));
                    return Math.ceil(base_heat_index + adjustment);
                } else {
                    return Math.ceil(base_heat_index);
                }
            }
        }
    }
};