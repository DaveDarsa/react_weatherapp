import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCard = styled(motion.div)`
  border: 5px solid transparent;
  flex-basis: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  font-size: 1.4rem;
  transition: transform 0.1s linear,
    border.2s cubic-bezier(0.17, 0.39, 0.83, 0.67);
  background-color: rgb(230, 230, 230);
  cursor: pointer;
  border-radius: 0.3rem;
  span {
    font-weight: bold;
  }
  p {
    min-width: 50%;
    margin-top: -0.5rem;
  }
  &.active {
    border-color: #4e75c1;
    transform: scale(1.1) !important;
  }
`;

export const StyledContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  padding: 0 5rem;
`;
