import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledCard } from "./styles/CardStyles";
//animations
import { cardvariants } from "./animations/AnimationVariants";

//utils
import { calculateAverage } from "./../utils/calculateAverage";
import { formatDate } from "./../utils/formatDate";

const Weathercard = ({ dayInfo, idx }) => {
  const [selectedCard, selectedUnit] = useSelector((store) => [
    store.uiDetails.selectedCard,
    store.uiDetails.selectedUnit,
  ]);
  const dispatch = useDispatch();

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
      <p>
        <span>Average Temp :</span> {calculateAverage(dayInfo, selectedUnit)}{" "}
      </p>
      <p>
        <span>Date :</span> {formatDate(dayInfo[dayInfo.length - 1].dt)}{" "}
      </p>
    </StyledCard>
  );
};

export default Weathercard;
