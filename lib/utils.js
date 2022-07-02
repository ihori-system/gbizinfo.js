module.exports.formatYYYYMMDD = (date) => {
  const padTo2Digits = (n) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}${padTo2Digits(date.getMonth() + 1)}${padTo2Digits(date.getDate())}`;
};

module.exports.validateTimeRangeOptions = (page, from, to) => {
  if (page == null) {
    throw new TypeError(`[${PACKAGE_NAME}] page引数が指定されていません`);
  }
  if (typeof page !== 'number') {
    throw new TypeError(`[${PACKAGE_NAME}] pageに数値以外の値が入っています`);
  }
  if (from == null) {
    throw new TypeError(`[${PACKAGE_NAME}] from引数が指定されていません`);
  }
  if (from instanceof Date === false) {
    throw new TypeError(`[${PACKAGE_NAME}] fromがDateオブジェクトではありません`);
  }
  if (to == null) {
    throw new TypeError(`[${PACKAGE_NAME}] to引数が指定されていません`);
  }
  if (to instanceof Date === false) {
    throw new TypeError(`[${PACKAGE_NAME}] toがDateオブジェクトではありません`);
  }
};
