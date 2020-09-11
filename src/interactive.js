const readline = require('readline');

function readSyncByRl(tips = '>') {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(tips, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}
const answer = []

function updateLine(text) {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0)
  process.stdout.write(text, 'utf-8');
}

function processLine() {
  return new Promise((resolve) => {
    updateLine('开始下载：')
    let processNum = 0;
    let precessTip = '█';
    let surplusTip = '░'
    const interval = setInterval(() => {
      processNum += 1
      precessTip = '█'.repeat(processNum)
      surplusTip = '░'.repeat(100 - processNum)
      updateLine(`下载进度：${precessTip}${surplusTip} ${processNum}/100`)

      if (processNum === 100) {
        clearInterval(interval);
        updateLine('下载完成')
        resolve()
      }
    }, 30);
  })
}


async function questAnswer() {
  let ret = await readSyncByRl('first question？Y/N \r\n>') || 'Y'
  answer.push(ret)
  ret = await readSyncByRl('second question？Y/N \r\n>') || 'Y'
  answer.push(ret)
  ret = await readSyncByRl('third question？Y/N \r\n>') || 'Y'
  answer.push(ret)

  console.log('answer: ', answer);
  await processLine()
}

questAnswer()
