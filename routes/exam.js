var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const renderQuestion = require('../utils/question');


/* GET home page. */
router.get('/', function(req, res, next) {
  renderQuestion(__dirname + '/questionBack.json').then(data => {
    res.render('exam', { 
      title: '考试页面设计',
      data: JSON.parse(data) 
    });
  })
});

// router.get('/exam',function(req, res){
//   res.render('swig',{
//       title:'首页 swig',
//       content: 'hello swig'
//   })
// })

module.exports = router;