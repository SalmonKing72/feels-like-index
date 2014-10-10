function Calculator() {
}
Calculator.prototype.currentWeather = function(obj){
  if(obj !== null && obj !== undefined) {
    this.description = obj.weather[0].description;
    this.currentTempFahr = Math.ceil((obj.main.temp - 273.15) * 1.80 + 32);
    this.currentTempCels = obj.main.temp - 273.15;
  }
  else {
    throw new Error("the current weather is unknown at this time.");
  }
};

Calculator.prototype.currentWindChill = function(obj){
  if(obj !== null && obj !== undefined) {
    var windSpeed = obj.wind.speed;
    var temperature = this.currentTempFahr;
    var WIND_CHILL_CONSTANTS = [35.74, 0.6215, 35.75, 0.4275, 0.16];
    //if(windSpeed)
}
