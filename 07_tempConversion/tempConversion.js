const convertToCelsius = function(Ftemp) {
  Ctemp = (Ftemp-32)*(5/9)
  return Math.round(Ctemp*10)/10;
};

const convertToFahrenheit = function(Ctemp) {
  Ftemp = (Ctemp)*(9/5)+32;
  return Math.round(Ftemp*10)/10;
}; 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
