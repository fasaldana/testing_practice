function capitalized(string) {
  var char = string.split('');
  if (char[0] === char[0].toUpperCase()) return true;
  else return false;
}

module.exports = capitalized;
