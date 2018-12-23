let assert = require('assert');
let {Traverse, Recursion} = require('../modules/index');
let textCase = require('./textCase');

describe('获取词频最高的词', function() {

  describe('算法一', function() {
    textCase.map((text)=>{
      it(text.title, function() {
        let ret = Traverse(text.str);
        assert.equal(ret, text.ret);
      });
    })
  });

  describe('算法二', function() {
    textCase.map((text)=>{
      it(text.title, function() {
        let ret = Recursion(text.str);
        assert.equal(ret, text.ret);
      });
    })
  });

});