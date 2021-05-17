import React from "react";
import { useSelector } from "react-redux";
//components
import LoadingScreen from "./components/LoadingScreen";
import Tempcontrols from "./components/Tempcontrols";
import Arrowcontrols from "./components/Arrowcontrols";
import Weathercard from "./components/Weathercard";
import Barchart from "./components/Barchart";
//styles
import { GlobalStyle } from "./components/styles/GlobalStyle";
import { StyledContainer } from "./components/styles/CardStyles";
//utils
import { paginate } from "./utils/paginate";

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [pageIndex, pageSize, isLoading, dailyForecast] = useSelector(
    (state) => [
      state.uiDetails.pageIndex,
      state.uiDetails.pageSize,
      state.weatherInfo.isLoading,
      state.weatherInfo.dailyForecast,
    ]
  );

  const pages = paginate(
    dailyForecast.map((day, idx) => {
      return <Weathercard key={`card ${idx}`} idx={idx} dayInfo={day} />;
    }),
    3
  );

  return (
    <div className="App">
      <GlobalStyle />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="wrapper">
          <div className="forecast">
            <Tempcontrols />
            <Arrowcontrols pages={pages} />
            <StyledContainer layout>{pages[pageIndex]}</StyledContainer>
            <Barchart />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
