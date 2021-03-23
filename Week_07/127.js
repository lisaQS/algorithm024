/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordListSet = new Set(wordList);
  if (!wordListSet.has(endWord)) return 0;
  let queue = [[beginWord, 1]];
  while (queue.length) {
      let [current, level] = queue.pop();
      if (current === endWord) return level;
      for (let i = 0; i < current.length; i++) {
          for (let character = 97; character <= 122; character++) {
              let newWord = current.slice(0, i) + String.fromCharCode(character) + current.slice(i + 1);
              if (wordListSet.has(newWord)) {
                  queue.unshift([newWord, level + 1]);
                  wordListSet.delete(newWord);
              }
          }
      }
  }
  return 0;
};