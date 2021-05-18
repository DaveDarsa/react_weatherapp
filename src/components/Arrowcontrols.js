import React from "react";
import { useSelector, useDispatch } from "react-redux";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Arrowcontrols = ({ pages }) => {
  const dispatch = useDispatch();
  const [pageIndex] = useSelector((state) => [state.uiDetails.pageIndex]);

  const decrement = () => {
    dispatch({
      type: "DECREMENT_PAGE",
      payload: { pageSize: pages[pageIndex - 1].length },
    });
  };
  const increment = () => {
    dispatch({
      type: "INCREMENT_PAGE",
      payload: { pageSize: pages[pageIndex + 1].length },
    });
  };
  // console.log(pages[pageIndex]);

  return (
    <StyledArrows className="arrows">
      {pageIndex > 0 && (
        <FontAwesomeIcon
          className="lefticon"
          icon={faArrowLeft}
          onClick={decrement}
        />
      )}

      {pages[pageIndex + 1] && (
        <FontAwesomeIcon
          className="righticon"
          icon={faArrowRight}
          onClick={increment}
        />
      )}
    </StyledArrows>
  );
};
export default Arrowcontrols;

const StyledArrows = styled.div`
  position: relative;
  height: 5rem;
  & > * {
    font-size: 5rem;
    cursor: pointer;
    color: #4e75c1;
  }
  .lefticon {
    position: absolute;
    left: 10rem;
  }
  .righticon {
    position: absolute;
    right: 10rem;
  }
`;
