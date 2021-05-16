import React from "react";
import { useSelector, useDispatch } from "react-redux";
//loader
import LoadingScreen from "./components/LoadingScreen";

//styles
import { GlobalStyle } from "./components/styles/GlobalStyle";
//animations
import { cardvariants } from "./components/animations/AnimationVariants";

import styled from "styled-components";
import { motion } from "framer-motion";

function App() {
  const [currentPage, pageSize, isLoading] = useSelector((state) => [
    state.uiDetails.currentPage,
    state.uiDetails.pageSize,
    state.weatherInfo.isLoading,
  ]);
  const dispatch = useDispatch();

  const list = [
    {
      temp: 10,
    },
    {
      temp: 20,
    },
    { temp: 30 },
    {
      temp: 40,
    },
    { temp: 50 },
  ];

  const decrement = () => {
    dispatch({ type: "DECREMENT_PAGE" });
  };
  const increment = () => {
    dispatch({ type: "INCREMENT_PAGE" });
  };

  var mapped = list.map((card, idx) => {
    return (
      <StyledCard
        variants={cardvariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={`card ${idx}`}
        className={currentPage === idx ? "active" : ""}
        onClick={() => {
          dispatch({ type: "SET_PAGE", payload: { position: idx } });
        }}
      >
        <p>Temp : {card.temp}</p>
      </StyledCard>
    );
  });
  return (
    <div className="App">
      <GlobalStyle />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <StyledContainer layout>
            {mapped.filter((_, idx) => {
              if (currentPage <= 2) {
                return idx < pageSize;
              } else {
                return idx >= pageSize - 1;
              }
            })}
          </StyledContainer>

          {currentPage > 0 && (
            <button onClick={decrement}>Click to go back</button>
          )}
          {list[currentPage + 1] && (
            <button onClick={increment}>Click to go next</button>
          )}
        </>
      )}
    </div>
  );
}

const StyledContainer = styled(motion.div)`
  display: flex;
  border: 3px solid blue;
  justify-content: space-around;
`;

const StyledCard = styled(motion.div)`
  border: 5px solid black;
  flex-basis: 30%;
  padding: 50px 0;
  transition: all 0.2s ease;
  background-color: rgb(230, 230, 230);
  cursor: pointer;
  &.active {
    border-color: hotpink;
  }
`;

export default App;
