import uiDetailsReducer from "./uiDetailsReducer";

describe("Ui details reducer", () => {
  it("should return the initial state", () => {
    expect(uiDetailsReducer(undefined, {})).toEqual({
      pageSize: 3,
      pageIndex: 0,
      selectedCard: 0,
      selectedUnit: "F",
    });
  });

  it("should handle INCREMENT_PAGE and DECREMENT_PAGE", () => {
    expect(
      uiDetailsReducer(
        { pageSize: 3, pageIndex: 0, selectedCard: 0, selectedUnit: "F" },
        {
          type: "INCREMENT_PAGE",
          payload: { pageSize: 3 },
        }
      )
    ).toEqual({
      pageSize: 3,
      pageIndex: 1,
      selectedCard: 0,
      selectedUnit: "F",
    });

    expect(
      uiDetailsReducer(
        { pageSize: 3, pageIndex: 1, selectedCard: 0, selectedUnit: "F" },
        {
          type: "DECREMENT_PAGE",
          payload: { pageSize: 3 },
        }
      )
    ).toEqual({
      pageSize: 3,
      pageIndex: 0,
      selectedCard: 0,
      selectedUnit: "F",
    });
  });

  it("should handle selecting Fahrenheit and Celcius", () => {
    expect(
      uiDetailsReducer(
        { selectedUnit: "C" },
        {
          type: "SET_FAHRENHEIT",
        }
      )
    ).toEqual({
      selectedUnit: "F",
    });

    expect(
      uiDetailsReducer(
        { selectedUnit: "F" },
        {
          type: "SET_CELSIUS",
        }
      )
    ).toEqual({
      selectedUnit: "C",
    });
  });

  it("should handle selecting the current card", () => {
    expect(
      uiDetailsReducer(
        { pageSize: 3, pageIndex: 1, selectedCard: 0, selectedUnit: "F" },
        {
          type: "SET_SELECTEDCARD",
          payload: { selectedCard: 4 },
        }
      )
    ).toEqual({
      pageSize: 3,
      pageIndex: 1,
      selectedCard: 4,
      selectedUnit: "F",
    });
  });
});
