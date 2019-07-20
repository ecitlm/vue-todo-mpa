module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.object.assign',
        'es6.symbol'
      ],
      //兼容IE版本浏览器语法转换
      useBuiltIns: 'entry'
    }]
  ]
}
