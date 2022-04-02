function stringLength(string) {
  let char = string.split('');
  if (char.length >= 1 && char.length <= 10) {
    return char.length;
  } else {
    return 'Error, string is too big';
  }
}

module.exports = stringLength;
