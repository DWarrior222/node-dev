// 打开一个WebSocket:
var ws = new WebSocket('ws://localhost:3333');

// 用于指定当从服务器接受到信息时的回调函数。
ws.onmessage = event => { 
  console.log(`服务端说：${event.data}`); 
  
  ws.send('hello! 服务端！');
};

// 用于指定连接成功后的回调函数
ws.onopen = () => {
}