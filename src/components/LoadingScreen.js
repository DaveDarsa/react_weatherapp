import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyledLoader } from "./styles/LoadingStyles";
import fetchAction from "./actions/fetchAction";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

const LoadingScreen = () => {
  const dispatch = useDispatch();

  //fetch the weather info when the component loads.
  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  return (
    <StyledLoader>
      <h1>
        Loading...
        <FontAwesomeIcon icon={faCloudSun} style={{ marginLeft: "1rem" }} />
      </h1>
    </StyledLoader>
  );
};

export default LoadingScreen;
