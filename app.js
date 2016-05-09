var http = require('http');
var balance = require('./modules/module3');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(balance.words() + balance.balance());
  res.end();
}).listen(3000);

console.log('listening on port 3000');
