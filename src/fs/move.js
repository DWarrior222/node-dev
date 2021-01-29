const fs = require('fs');
const path = require('path');

const dirList = fs.readdirSync(path.resolve()).filter(f => fs.statSync(path.resolve(f)).isDirectory())
const dirPath = path.resolve(dirList[0])
const curPath = path.resolve()

fs.renameSync(curPath + '/index.html', dirPath + '/index1.html')