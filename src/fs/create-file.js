const fs = require('fs');
const path = require('path');

const dirList = fs.readdirSync(path.resolve()).filter(f => fs.statSync(path.resolve(f)).isDirectory())
const dirPath = path.resolve(dirList[0])

const fromCont = fs.readFileSync(path.resolve() + '/index.html', 'utf8');

fs.writeFileSync(dirPath + '/index.html', fromCont.replace(/\[\w+\]/g, '替换的值'))
