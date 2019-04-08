const fs = require('fs');
// 删除文件
// fs.unlink('./test.txt', (err) => {
//   if (!err) {
//     console.log('删除成功')
//   }
// })

// fs.mkdir('文件夹',回调函数)
// fs.mkdir('demo', (err) => {
//   if (!err) {
//     console.log('创建文件夹')
//   }
// })

// Linux中touch命令使用（创建文件）
// rmdir()只能删除空文件夹
// fs.rmdir('./demo', (err) => {
//   if (!err) {
//     console.log('删除node')
//   }
// })
// fs.readFile(filename,[option],callback) 


// fs.readFile(__dirname + '/answer.json', 'utf-8', function (err, res) {
//   if (!err) {
//     exam(res).then(res => {
//       console.log(res * 10, 'res-------respromise')
//     })
//   }
// })
/** 
 * @param url 学生答案路径
 * @param brr 正确答案数据
*/

function exam(url, brr) {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + url, 'utf-8', function (err, res) {
      if (!err) {
        let arr = res.split(';');
        let crr = JSON.parse(brr);
        let count = 0;
        for (let i = 0; i < crr.length; i++) {
          if (crr[i]) {
            arr.map((val, index) => {
              if (index == crr[i].id) {
                if (val.includes(crr[i].exam)) {
                  count++;
                }
              }
            })
          }
        }
        resolve(count)
      }
    })
  })
}




module.exports = exam;


