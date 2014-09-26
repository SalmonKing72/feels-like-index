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
