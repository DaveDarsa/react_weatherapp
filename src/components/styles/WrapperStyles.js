import styled from "styled-components";
import { sunny, rainy, cloudy, snowy, misty } from "../../images";

const matchBackground = (condition) => {
  //based on https://openweathermap.org/weather-conditions, this function will match the background to the current weather condition

  //misty weather as fallback (for Group 7xx: Atmosphere in the api)
  let weatherkeywords = {
    sun: { keywords: ["clear"], bgImg: sunny },
    rain: { keywords: ["rain", "thunder", "drizzle"], bgImg: rainy },
    cloud: { keywords: ["clouds"], bgImg: cloudy },
    snow: { keywords: ["snow"], bgImg: snowy },
  };
  //find the correct background image given today's weather condition
  for (let i in weatherkeywords) {
    if (~weatherkeywords[i].keywords.indexOf(condition.toLowerCase())) {
      return weatherkeywords[i].bgImg;
    }
  }
  // if the weather condition does't match above, return the misty image
  return misty;
};

export const StyledWrapper = styled.div`
  min-height: 100vh;
  background: url(${(props) => matchBackground(props.condition)});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
