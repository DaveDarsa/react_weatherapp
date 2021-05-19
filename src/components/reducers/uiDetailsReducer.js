const initStore = {
  pageSize: 3,
  pageIndex: 0,
  selectedCard: 0,
  selectedUnit: "F",
};

const uiDetailsReducer = (store = initStore, action) => {
  switch (action.type) {
    case "INCREMENT_PAGE":
      return {
        ...store,
        pageIndex: store.pageIndex + 1,
        pageSize: action.payload.pageSize,
      };

    case "DECREMENT_PAGE":
      return {
        ...store,
        pageIndex: store.pageIndex - 1,
        pageSize: action.payload.pageSize,
      };

    case "SET_FAHRENHEIT":
      return { ...store, selectedUnit: "F" };

    case "SET_CELSIUS":
      return { ...store, selectedUnit: "C" };

    case "SET_SELECTEDCARD":
      return { ...store, selectedCard: action.payload.selectedCard };

    default:
      return { ...store };
  }
};

export default uiDetailsReducer;
