import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledCard } from "./styles/CardStyles";
//animations
import { cardvariants } from "./animations/AnimationVariants";
//imgs
import humidity from "../images/humidity.png";
//utils
import { calculateAverageTemp } from "./../utils/calculateAverage";
import { avgHumid } from "./../utils/avgHumid";
import { convertTemp } from "../utils/convertTemp";
import { formatDate } from "./../utils/formatDate";
import { addSuffix } from "../utils/addSuffix";

const Weathercard = ({ dayInfo, idx }) => {
  const [selectedCard, selectedUnit, currentWeather] = useSelector((store) => [
    store.uiDetails.selectedCard,
    store.uiDetails.selectedUnit,
    store.weatherInfo.currentWeather,
  ]);
  const dispatch = useDispatch();

  //show the current weather icon on today's card or default to earliest weather icon for other cards
  let weatherIcon =
    idx === 0 ? currentWeather.weather[0].icon : dayInfo[0].weather[0].icon;

  //C or F suffixes
  let suffix = addSuffix(selectedUnit);
  return (
    <StyledCard
      className={+selectedCard === idx ? "active" : ""}
      variants={cardvariants}
      initial="initial"
      animate="animate"
      onClick={() => {
        dispatch({ type: "SET_SELECTEDCARD", payload: { selectedCard: idx } });
      }}
    >
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="weather icon"
      />
      {idx === 0 && (
        <div className="flexgroup">
          <span>Current Weather: </span>
          <span className="temp">
            {convertTemp(currentWeather.main.temp, selectedUnit) + suffix}
          </span>
        </div>
      )}
      <div className="flexgroup">
        <span>Average Temp: </span>
        <span className="temp">
          {calculateAverageTemp(dayInfo, selectedUnit) + suffix}
        </span>
      </div>
      <div className="flexgroup">
        <span>Average Humidity: </span>
        <span className="humid">
          {avgHumid(dayInfo)} <img src={humidity} alt="humidity" />
        </span>
      </div>
      <p>
        <span> {formatDate(dayInfo[dayInfo.length - 1].dt)}</span>
      </p>
    </StyledCard>
  );
};

export default Weathercard;
