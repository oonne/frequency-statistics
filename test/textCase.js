let textCase = [
  {
    title: '没有重复单词，全文本是最长',
    str: 'javascript',
    ret: 'javascript'
  },
  {
    title: '出现概率最多的只有一个',
    str: 'github https://github.com',
    ret: 'github'
  },
  {
    title: '出现概率一样多，取最长的文本',
    str: 'oonne github page: https://github.com/oonne',
    ret: 'github'
  },
  {
    title: '出现概率和长度一样，取第一个文本',
    str: 'HTML-HTML5, CSS-CSS3, http-https',
    ret: 'HTML'
  },
  {
    title: '随机测试一段英文',
    str: 'forgive them, for they do not know what they are doing.(The Book of Luka 23:34)',
    ret: 'he'
  },
  {
    title: '随机测试一段中文',
    str: '原谅他们，因为他们不知到自己在做什么——路加福音23:34',
    ret: '他们'
  },
  {
    title: '随机测试一段数字',
    str: '3.141592653589793238462643383279502884197169399',
    ret: '26'
  },
]

module.exports = textCase;