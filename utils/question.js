const fs = require('fs');
const path = require('path');

// let PUBLIC_PATH = path.resolve(__dirname, '/questionBack');



function renderQuestion(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', function (err, data) {
      // 读取文件失败/错误
      if (err) {
        reject(err);
      }
      resolve(data)
    });
  })
}

module.exports = renderQuestion;