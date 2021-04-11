//第一种思路是字符串分段反转
var reverseStr = function(s, k) {
  const length = s.length;
  let arr = s.split('');
  let l = 0;
  let r = Math.min(2 * k - 1, length - 1);
  // 根据l r来决策可以循环的数组范围
  while(l < r){
    let n = l + k - 1
    // 根据l n来决策可以反转的数组范围
    while(l < n){
       [arr[l], arr[n]] = [arr[n], arr[l]];
       l++;
       n--;
    }
    l = r + 1;
    r = l + 2 * k - 1 > length - 1 ? length - 1 : l + 2 * k - 1
  }
  return arr.join('');
};

//第2种解法，通过位数取余
var reverseStr = function(s, k) {
  if (k === 1) return s;
  let result = '';
  let temp = '';
  const doubleK = 2 * k;
  for (let i = 0; i < s.length; i++) {
      const element = s[i];
      let kyu = i % doubleK;
      if (kyu === 0) {
          result += temp;
          temp = '';
      }
      
      if (kyu < k) {
          temp = element + temp;
      } else {
          temp = temp + element;
      }
  }
  return result + temp;
};