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

function App() {
  const [pageIndex, selectedCard, isLoading, dailyForecast] = useSelector(
    (store) => [
      store.uiDetails.pageIndex,
      store.uiDetails.selectedCard,
      store.weatherInfo.isLoading,
      store.weatherInfo.dailyForecast,
    ]
  );

  const pages = paginate(
    dailyForecast.map((dayInfo, idx) => {
      return <Weathercard key={`card ${idx}`} idx={idx} dayInfo={dayInfo} />;
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
            <StyledContainer>{pages[pageIndex]}</StyledContainer>
            <Barchart dataToGraph={dailyForecast[selectedCard]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
