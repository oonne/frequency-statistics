let Traverse = (str) => {
  let most = 1;
  let ret = str;

  // 找出当前长度的最大值，和总的最大值比较
  function lookup (arr, len) {
    let tempArr = [];
    for (let i = 0; i<=arr.length-len; i++) {
      tempArr.push(arr.slice(i, i+len));   
    }
    let tempMost = findMore(tempArr)
    if (tempMost.time>most) {
      most = tempMost.time;
      ret = tempMost.text;
    }
  }

  // 找出数组重复最大值
  function findMore (arr) {
    let table = {};
    let time = 0;
    let text = '';

    arr.map((item) => {
      table[item] === undefined ? table[item] = 1 : (table[item] ++);
    
      if (table[item] > time) {
        time = table[item];
        text = item;
      }
    })

    return {
      time: time,
      text: text,
    }
  }

  // 循环切数组
  for (let i=str.length-1; i>1; i--) {
    lookup(str, i);
  }

  return ret;
}

module.exports = Traverse;