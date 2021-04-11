/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(str) {
	let left = 0;
    let right = str.length - 1;
    let queue = [];
    let word = '';
    str.trim();
    while (left <= right) {
        let char = str.charAt(left);
        if (char === ' ' && word) {
            queue.unshift(word);
            word = '';
        } else if (char !== ' ') {
            word += char;
        }
        left++;
    }
    queue.unshift(word);
    return queue.join(' ').trim();
}