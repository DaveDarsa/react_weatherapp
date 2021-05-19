import { sortWeather } from "../../utils/sortWeather";

//get the forecast AND the current weather(for dynamic background and accurate weather icon)
export const fetchAction = () => async (dispatch) => {
  var forecast = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
  ).then((data) => {
    return data.json();
  });
  var currentWeather = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57"
  ).then((data) => data.json());

  //sort the forecast into days
  let dailyForecast = sortWeather(forecast.list);
  dispatch({
    type: "FETCH_FORECAST",
    payload: {
      dailyForecast: dailyForecast,
      currentWeather: currentWeather,
    },
  });
};

export default fetchAction;
