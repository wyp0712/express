var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Base64 = require('../utils/base');
var exam = require('../utils/exam');

// console.log(Base64, 'Base64')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// 上传文件必须用post请求方式
router.get('/', function(req, res, next) {
  res.send(`<meta name="viewport" content="width=device-width, initial-scale=1.0">get-上传文件接口信息`)
})
let base = new Base64();
router.post('/',urlencodedParser,function(req, res, next) {
  // console.log(req.body)
  let {fileList} = req.body;
  console.log(base.decode(fileList), 'file-list')
  // fs.readFile(__dirname + '/correctAnswer/correct.json', 'utf-8', function (err, res) {
  //   if (!err) {
  //     exam(__dirname + '/studentAnswer/exam.txt').then(res => {
  //       console.log(res * 10, 'res-------respromise')
  //     })
  //   }
  // })
  // console.log(fileList, 'fileList-------------1')

  res.send('post-上传文件接口信息')
})

module.exports = router;
