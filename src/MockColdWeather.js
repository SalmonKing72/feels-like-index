function MockColdWeather() {
    "use strict";
    var weatherObj = {
        "coord" : {"lon" : -83, "lat" : 39.96},
        "sys" : {"type" : 1, "id" : 2191, "message" : 0.1932, "country" : "United States America", "sunrise" : 1411644186, "sunset" : 1411687427},
        "weather" : [{"id" : 800, "main" : "Clear", "description" : "sky is clear", "icon" : "01d"}],
        "base" : "cmc stations",
        "main" : {"temp" : 266.48, "pressure" : 1023, "humidity" : 38, "temp_min" : 266.15, "temp_max" : 276.15},
        "wind" : {"speed" : 10.1, "deg" : 60},
        "clouds" : {"all" : 1},
        "dt" : 1411685220,
        "id" : 4509177,
        "name" : "Columbus",
        "cod" : 200
    };

    return weatherObj;
}