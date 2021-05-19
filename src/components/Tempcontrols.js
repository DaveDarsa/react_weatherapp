import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledTempcontrols } from "./styles/TempcontrolStyles";
const Tempcontrols = () => {
  const [selectedUnit] = useSelector((store) => store.uiDetails.selectedUnit);
  const dispatch = useDispatch();
  const setcelsius = () => {
    dispatch({ type: "SET_CELSIUS" });
  };
  const setfahrenheit = () => {
    dispatch({ type: "SET_FAHRENHEIT" });
  };
  return (
    <StyledTempcontrols>
      <div className="tempbutton" onClick={setcelsius}>
        <span
          className={`celcius ${selectedUnit === "C" ? "selected" : ""}`}
        ></span>
        Celsius
      </div>
      <div className="tempbutton" onClick={setfahrenheit}>
        <span
          className={`fahrenheit ${selectedUnit === "F" ? "selected" : ""}`}
        ></span>
        fahrenheit
      </div>
    </StyledTempcontrols>
  );
};

export default Tempcontrols;
