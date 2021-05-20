export const addSuffix = (tempUnit) => {
  let fahrenheit = "°F";
  let celcius = "°C";
  return tempUnit === "F" ? fahrenheit : celcius;
};
