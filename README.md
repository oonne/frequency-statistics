# frequency-statistics
文本词频统计算法  


## 原题
找出一个文本串中出现次数最多的文本段：  
1.取出现概率是最多的文本  
2.如果出现概率一样多，取最长的文本  
3.如果出现概率和长度一样，取得第一个文本  

(不考虑单个字母，以2位字符串作为最小的文本段单元)

## 代码
算法一: '../modules/Traverse' (面试时临时想出来的笨办法)
算法二: '../modules/Recursion' (递归切数组，一次循环直接判断重复最多的字符)

## 使用方法
``` javascript
import {Traverse, Recursion} from '../modules/index';

let string = 'test text content';

console.log(Traverse(string));
console.log(Recursion(string));
``` 

## 单元测试
测试方法：  
  安装node.js
  撰写测试用例、预期结果
  运行npm run test  

测试用例：  
  /test/case.js  
