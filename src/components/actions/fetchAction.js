import { sortWeather } from "../../utils/sortWeather";

const fetchAction = () => async (dispatch) => {
  var forecast = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=97b5a12e029cd29f5cb6c2e0cddd1972&cnt=40"
  ).then((data) => {
    return data.json();
  });
  //sort the forecast into days
  let dailyForecast = sortWeather(forecast.list);
  dispatch({
    type: "FETCH_FORECAST",
    payload: {
      dailyForecast: dailyForecast,
    },
  });
};

export default fetchAction;
