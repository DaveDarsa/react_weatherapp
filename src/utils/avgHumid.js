export const avgHumid = (arr) => {
  let total = 0;
  for (let i of arr) {
    total += i.main.humidity;
  }
  return Math.floor(total / arr.length);
};
