export const sortWeather = (allForecast) => {
  let dailyForecast = {};
  //create an array for each day with it's respective interval details and save into dailyForecast
  for (let i = 0; i < allForecast.length; i++) {
    if (!dailyForecast[allForecast[i]["dt_txt"].substr(0, 10)]) {
      dailyForecast[allForecast[i]["dt_txt"].substr(0, 10)] = [];
    }
    dailyForecast[allForecast[i]["dt_txt"].substr(0, 10)].push(allForecast[i]);
  }
  return Object.values(dailyForecast);
};
