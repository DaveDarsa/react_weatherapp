import styled from "styled-components";

export const StyledTempcontrols = styled.div`
  padding: 1rem 7.5rem;
  display: flex;
  justify-content: space-between;
  .tempbutton {
    border-radius: 10rem;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    text-transform: capitalize;
    color: rgb(10, 10, 10);
  }
  .celcius,
  .fahrenheit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    height: 3rem;
    width: 3rem;
    border-radius: 10rem;
    background-color: #4e75c1;

    &::after {
      content: "";
      display: block;
      height: 1.2rem;
      width: 1.2rem;
      transition: all 0.3s ease;
      background-color: #4e75c1;
      border-radius: 10rem;
    }
    &.selected::after {
      background-color: #fff;
    }
  }
`;
