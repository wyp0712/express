//引入所需要的插件
var express = require('express');
var ejs = require('ejs');
//为express设置接受参数
var app = express();
//识别ejs代码
app.set('view engine', 'ejs');
//识别css样式,不引入将不知道外部样式表
// app.use('/assets',express.static('assets'));
var data = {
  name: 'webarn',
  sex: '男',
  content: '参数,可以更改'
};
var msg = [
  {
    name: 'webarn',
    sex: '男',
    content: '参数,可以更改'
  },
  {
    name: 'warning',
    sex: '女',
    content: '参数,可以更改'
  },
  {
    name: 'webarn',
    sex: '男',
    content: '参数,可以更改'
  }
  
]
//交互方式
app.get('/', function (req, res) {
  res.render('index', {msg: msg})
});

//另外一种方式:
app.get('/:id', function (req, res) {
  res.render('parfile', { person: req.params.id });
});
// 监听
app.listen(3000);
console.log('3000')