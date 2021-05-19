const initStore = {
  isLoading: true,
  dailyForecast: [],
  currentWeather: {},
};

const weatherReducer = (store = initStore, action) => {
  if (action.type === "FETCH_FORECAST") {
    return {
      ...store,
      dailyForecast: action.payload.dailyForecast,
      currentWeather: action.payload.currentWeather,
      isLoading: false,
    };
  }

  return { ...store };
};

export default weatherReducer;
