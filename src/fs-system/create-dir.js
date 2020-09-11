const fs = require('fs');
const path = require('path');

const dirPath1 = path.resolve('./dir1')
const dirPath2 = path.resolve('./dir2')

fs.mkdir(dirPath1, (err) => {
  if (err) {
    console.log('mkdir err: ', err);
    return
  }
})

fs.mkdirSync(dirPath2);
for (let i = 3; i <= 10; i++) {
  fs.mkdirSync(`./dir${i}`);
}