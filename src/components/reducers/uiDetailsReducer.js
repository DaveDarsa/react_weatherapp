const initStore = {
  pageSize: 3,
  currentPage: 0,
  selectedUnit: "F",
};

const uiDetailsReducer = (store = initStore, action) => {
  switch (action.type) {
    case "INCREMENT_PAGE":
      return { ...store, currentPage: store.currentPage + 1 };

    case "DECREMENT_PAGE":
      return { ...store, currentPage: store.currentPage - 1 };

    case "SET_PAGE":
      return { ...store, currentPage: action.payload.position };

    case "SET_FAHRENHEIT":
      return { ...store, selectedUnit: "F" };

    case "SET_CELCIUS":
      return { ...store, selectedUnit: "C" };

    default:
      return { ...store };
  }
};

export default uiDetailsReducer;
