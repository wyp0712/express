var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var Base64 = require('../utils/base');
var exam = require('../utils/exam');
var bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '100MB' }));    //最大上传大小不超过50mb
app.use(bodyParser.urlencoded({
  limit: '100MB',
  extended: true
}));
var urlencodedParser = bodyParser.urlencoded({
  limit: '100MB',
  extended: true
})
urlencodedParser = bodyParser.json({ limit: '100MB' })

// console.log(Base64, 'Base64')
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// 上传文件必须用post请求方式
router.get('/', function (req, res, next) {
  res.send(`<meta name="viewport" content="width=device-width, initial-scale=1.0">get-上传文件接口信息`)
})
let base = new Base64();
router.post('/', urlencodedParser, function (req, res, next) {
  let { fileList } = req.body;

  // fs.readFile(__dirname + '/correctAnswer/correct.json', 'utf-8', function (err, res) {
  //   if (!err) {
  //     exam(__dirname + '/studentAnswer/exam.txt').then(res => {
  //       console.log(res * 10, 'res-------respromise')
  //     })
  //   }
  // })
  if (fileList) {
    console.log(base.decode(fileList), 'file-list')
    res.send({
      code: 1,
      msg: "上传成功"
    })
  }
})

module.exports = router;
