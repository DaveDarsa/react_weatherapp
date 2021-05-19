//formats api given timestamp to dd/mm/yyyy format

export const formatDate = (timestamp) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date(timestamp * 1000);

  return `${date.getUTCDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
};
