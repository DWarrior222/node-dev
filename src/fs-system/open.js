const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const curPath = path.resolve()
fs.readdirSync(
  curPath
).filter(
  f => fs.statSync(path.resolve(f)).isDirectory()
).map(
  f => curPath + '/' + f
).forEach(
  f => childProcess.exec('open ' + f)
)