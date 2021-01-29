const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 3333
})

wss.on('connection', ws => {
  console.log('客户端连接了！！');

  ws.send('hello! 客户端！');

  ws.on('message', message => {
    console.log('客户端说: %s', message);
  });
})