module.exports.formatYYYYMMDD = (date) => {
  const padTo2Digits = (n) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}${padTo2Digits(date.getMonth() + 1)}${padTo2Digits(date.getDate())}`;
};
