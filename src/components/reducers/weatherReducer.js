const initStore = {
  isLoading: true,
  dailyForecast: [],
};

const weatherReducer = (store = initStore, action) => {
  if (action.type === "FETCH_FORECAST") {
    return {
      ...store,
      dailyForecast: action.payload.dailyForecast,
      isLoading: false,
    };
  }

  return { ...store };
};

export default weatherReducer;
