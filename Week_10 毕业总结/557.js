/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split('').reverse().join('')
  return arr.split(' ').reverse().join(' ')
};