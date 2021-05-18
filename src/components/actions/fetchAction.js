import { sortWeather } from "../../utils/sortWeather";

const fetchAction = () => async (dispatch) => {
  var forecast = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
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
