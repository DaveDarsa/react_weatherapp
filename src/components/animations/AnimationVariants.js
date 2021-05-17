export const cardvariants = {
  initial: {
    x: 0,
    opacity: 0.8,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      opacity: 0.8,
      x: direction === "r" ? -100 : 100,
    };
  },
};
