import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLoader = styled(motion.div)`
  background-color: #33495f;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-weight: lighter;
    font-size: 5.5rem;
    font-family: "Lato", sans-serif;
  }
`;
