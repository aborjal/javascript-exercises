const convertToCelsius = function(temperature) {
 const celsius = (temperature - 32) * (5/9);

 if(celsius % 1 !== 0){
  return Number(celsius.toFixed(1));
} else {
  return celsius;
}
};

const convertToFahrenheit = function(temperature) {
  const fahrenheit = (temperature * (9/5)) + 32;

  if(fahrenheit % 1 !== 0){
    return Number(fahrenheit.toFixed(1));
  } else {
    return fahrenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
