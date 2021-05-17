export const paginate = (arr, chunkLength) => {
  let sorted = [];
  for (let i = 0; i < arr.length; i += chunkLength) {
    let temp = arr.slice(i, i + chunkLength);
    sorted.push(temp);
  }

  return sorted;
};
