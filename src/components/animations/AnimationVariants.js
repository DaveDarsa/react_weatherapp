export const cardvariants = {
  initial: {
    x: 0,
    opacity: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "-1vw",
    opacity: 0.5,
    transition: {
      type: "intertia",
      duration: 0.3,
    },
  },
};
