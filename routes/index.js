var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var pageData = require('../Mock/page');

var jsonParser = bodyParser.json()
  
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var pageList = [
  {
    "page": 0,
    "name": 1
  },
  {
    "page": 2,
    "name": 1
  },
  {
    "page": 3,
    "name": 1
  },
  {
    "page": 4,
    "name": 1
  },
  {
    "page": 5,
    "name": 1
  },  
  {
    "page": 6,
    "name": 1
  },
  {
    "page": 7,
    "name": 1
  },
  {
    "page": 8,
    "name": 1
  },
  {
    "page": 9,
    "name": 1
  },
  {
    "page": 10,
    "name": 1
  },
  {
    "page": 110,
    "name": 1
  },
  {
    "page": 130,
    "name": 1
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/admin", urlencodedParser, function(req, res, next) {
  let {user, pwd} = req.body;
  console.log(user, pwd)
  res.send("hello world")
})

let arr = [
  {
    "name": "devin",
    "age": '123'
  }
]

let canvasData = [
  {
    "value": 335,
    "name": "直接访问",
    "color": "rgb(213, 58, 53)"
  },
  {
    "value": 310,
    "name": "邮件营销",
    "color": "rgb(51, 75, 92)"
  },
  {
    "value": 234,
    "name": "联盟广告",
    "color": "rgb(106, 176, 184)"
  },
  {
    "value": 135,
    "name": "视频广告",
    "color": "rgb(233, 143, 111)"
  },
  {
    "value": 1548,
    "name": "搜索引擎",
    "color": "rgb(145, 199, 174)"
  }
]



router.get('/api/canvas', function(req, res, next) {
  // 接收前端传输的参数
  // console.log(req.query, 'query')
  let {name, age} = req.query;
  console.log(name, age, '前端传输数据')

  arr.forEach(item => {
    if (item.name == name && item.age == age) {
      res.send({
        code: 10000,
        msg: "验证通过"
      })
    } else {
      res.send({
        code: 10001,
        msg: "验证不通过"
      })
    }
  })

})


router.get('/pageIndex', function(req, res, next) {
  let {page, size} = req.query;
  console.log(page, size, 'page')
  let list = pageList.filter((n, index) => {
    return index >= (page-1) * size && index < page * size
  })
  console.log(list, 'list')
  res.send({
    list: list,
    count: list.length,
    status: 1
  });
})


router.get('/register', function(req, res, next) {
  console.log(req.query, 'req.query')
  let {user, pwd} = req.query;
  brr.push(req.query);
  console.log(brr)
  if (brr.length) {
    res.send({
      msg: "注册成功",
      code: '20000'
    })
  }
})



module.exports = router;
