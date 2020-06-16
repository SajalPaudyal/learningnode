const http = require ('http');
const fs = require ('fs');

//URL technique
var url = require ('url');
const dt = require('./module')
http.createServer(function(req, res) {
  fs.readFile('file.html', (error, data) =>{
    res.write(data  );
  } )
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`This is anfield and the time here  is ${dt.myDateTime()}`  )
  //URL bujhne technique
  var q =url.parse(req.url, true).query;
  //localhost:8080/?year=2020&month=july garyo vane print url ko info hunch
  var text = q.year + "" +q.month;
  res.write(req.url);
   return res.end();
}).listen(8080);