//convert 24 hour time format to 12
export const convertTime = (timeString) => {
  //add AM or PM depending on the first value
  let firstVal = timeString.slice(11, 12);
  let convertedTime = `${timeString.slice(11, 16)} ${
    firstVal === "0" ? "AM" : "PM"
  } `;
  return convertedTime;
};
