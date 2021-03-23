/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  let bankSet = new Set(bank);
  if (!bankSet.has(end)) return -1;
  const queue = [[start, 0]];
  const dna = ['A', 'C', 'G', 'T'];
  while (queue.length) {
      let [node, count] = queue.shift();
      if (node === end) return count;
      for (let i = 0; i < node.length; i++) {
          for (let j = 0; j < dna.length; j++) {
              let newWord = node.slice(0,i) + dna[j] + node.slice(i+1);
              if (bankSet.has(newWord)) {
                  queue.push([newWord, count + 1]);
                  bankSet.delete(newWord);
              }
          }
      }
  }
  return -1;
};