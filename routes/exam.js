var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
const renderQuestion = require('../utils/question');
const path = require('path');

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// parse application/json
// app.use(bodyParser.json());

let PATH_QUESTION = path.resolve(__dirname, '../tiku/questionBack.json');
// console.log(PATH_QUESTION, 'PATH')

/* GET home page. */
router.get('/', function (req, res, next) {
  renderQuestion(PATH_QUESTION).then(data => {
    res.render('exam', {
      title: '考试页面设计',
      data: JSON.parse(data)
    });
  })
});

router.post('/answer_item', (req, res, next) => {

  let  answer  = req.body;
  console.log(answer, 'answer')
  for(var key in answer) {
    console.log(answer[key])
  }
  res.send({
    code: 10000,
    msg: "答案已经验证"
  })
})

router.get('/exam', function (req, res) {
  res.render('swig', {
    title: '首页 swig',
    content: 'hello swig'
  })
})

module.exports = router;