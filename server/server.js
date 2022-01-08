const http = require('http');

http.createServer(function(request, response) {
  // 设置响应头
  response.writeHeader(200, {
    "Content-Type": "text/plain",
  });
  // 设置相应主体
  response.write('hello world');
  response.end()
})

// 设置监听接口
.listen(9000)