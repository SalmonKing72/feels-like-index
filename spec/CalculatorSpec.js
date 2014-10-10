describe("Calculator", function(){
  var weather;
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
    weather = new MockWeather();
  });

  it("should be able to calculate either the heat index or the wind chill", function(){
    calculator.currentWeather(weather);
    expect(calculator.description).toEqual("sky is clear");
    expect(calculator.currentTempFahr).toEqual(76);
  });

  describe("given the current temperature, I want to know the heat index", function(){
    it("should output the heat index if it is hot enough", function(){
    });

  });

  describe("given the current temperature, I want to know the wind chill", function(){
    it("should output the wind chill if it is cold enough", function(){
    });
  });

  describe("given the weather is unknown, then I should not get a heat index or wind chill", function(){
    it("should throw an exception if the weather is unknown", function(){
      weather = null;

      expect(function() {
        calculator.currentWeather(weather);
      }).toThrowError("the current weather is unknown at this time.");
    });
  });

});
