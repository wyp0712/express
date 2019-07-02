1. ejs 模版引擎使用方法转为html使用方法

var ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));
// 尝试ejs

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


2. 模版ejs 后缀使用方法， 不需要引入ejs；
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

3. 
// swig模版
// app.set('view engine','html');
// app.engine('html', swig.renderFile);

3. 
<!-- create application/x-www-form-urlencoded parser -->
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

4. 
<!-- 错误处理函数 -->
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// }); -->


1. 听过fs读取的笔记，数据需要进行对象转换；
JSON.parse(data) 