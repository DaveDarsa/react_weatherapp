//since the API returns temp in kelvin measurement, this helper will convert it to either Fahrenheit or Celcius.
export const convertTemp = (kelvinValue, tempUnit) => {
  if (tempUnit === "C") return Math.round(kelvinValue - 273.15);
  if (tempUnit === "F")
    return Math.round(((kelvinValue - 273.15) * 9) / 5 + 32);
};
