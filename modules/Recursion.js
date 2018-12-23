let Recursion = (str) => {
  let most = 1;
  let ret = str;

  let tempArr = [];

  // 递归切字符
  (function cutArr(str, len) {
      if (len<2) return; //最小字符串假设为2位
  
      for (let i = 0; i<=str.length-len; i++) {
        tempArr.push(str.slice(i, i+len));   
      }
      cutArr(str, len-1);
   })(str, str.length-1);

  // 循环一次即可找出最多的
  let table = {};
  tempArr.map((item) => {
    table[item] === undefined ? table[item] = 1 : (table[item] ++);
  
    if (table[item] > most) {
      most = table[item];
      ret = item;
    }
  })

  return ret;
}

module.exports = Recursion;