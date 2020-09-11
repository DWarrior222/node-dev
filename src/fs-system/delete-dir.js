const fs = require('fs');
const path = require('path');

function deleteDir (path) {
  if (!fs.statSync(path)) return
  fs.rmdirSync(path, { recursive: true }) // recursive 为 true 表示递归删除
}

// const dirPath = path.resolve('./dir1')
const dirList = fs.readdirSync(path.resolve()).filter(f => fs.statSync(path.resolve(f)).isDirectory())
const dirPath = path.resolve(dirList[0])
deleteDir(dirPath)