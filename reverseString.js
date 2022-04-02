function reverseString(string) {
  let char = string.split('');
  var reverseChr = char.reverse();
  return reverseChr.join('');
}

module.exports = reverseString;
