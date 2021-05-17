import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledCard } from "./styles/CardStyles";
//animations
import { cardvariants } from "./animations/AnimationVariants";

const Weathercard = ({ dayInfo, idx }) => {
  const selectedCard = useSelector((state) => [state.uiDetails.selectedCard]);

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
      <p>Average Temp : {dayInfo[0].main.temp}</p>
      <p>TIme : {dayInfo[0]["dt_txt"].slice(0, 10)}</p>
    </StyledCard>
  );
};

export default Weathercard;
