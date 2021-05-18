import { convertTemp } from "./convertTemp";

export const calculateAverage = (arr, tempUnit) => {
  let total = 0;
  for (let i of arr) {
    total += i.main.temp;
  }
  return convertTemp(total / arr.length, tempUnit) + tempUnit;
};
