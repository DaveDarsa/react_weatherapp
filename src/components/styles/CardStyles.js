import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCard = styled(motion.div)`
  border: 5px solid transparent;
  flex-basis: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 22rem;
  font-size: 1.25rem;
  transition: transform 0.1s linear,
    border.2s cubic-bezier(0.17, 0.39, 0.83, 0.67);
  /* background-color: rgba(220, 220, 220, 0.9); */
  background: rgba(51, 73, 95, 0.3);
  cursor: pointer;
  border-radius: 0.3rem;
  img {
    display: block;
    width: 10rem;
  }

  .flexgroup {
    width: 70%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
    span {
      color: #fff;
    }
    .temp,
    .humid {
      display: inline-block;
      color: #2c477d;
      font-size: 1.75rem;
      max-width: 3rem;
      font-weight: 800;
    }
    .humid {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        display: inline-block;
        width: 50%;
        margin-left: 0.5rem;
      }
    }
  }
  p {
    min-width: 50%;
    margin-top: auto;
    text-align: center;
    padding: 0.2rem 0;
    font-weight: 600;
    font-size: 1.3rem;
    color: #fff;
  }
  &.active {
    border-color: #4e75c1;
    transform: scale(1.1) !important;
  }

  @media screen and (max-width: 768px) {
    & {
      flex-basis: 30%;
    }
  }
  @media (max-width: 500px) {
    width: 80%;
    align-self: center;
  }

  @media (max-width: 500px) {
    .flexgroup {
      width: 50% !important;
      font-size: 1.5rem;
    }
  }
`;

export const StyledContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  padding: 0 5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 5rem;
  }
`;
