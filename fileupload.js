const http = require('http');
const formidable = require('formidable');
const fs = require('fs');



http.createServer((req, res) =>{
  if (req.url == './fileupload' ) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err,fields, file) =>{
      const oldpath = files.filestoupload.path;
      const newpath = `sajal:~/Desktop/node${files.filetoupload.name}`;
      fs.rename(oldpath, newpath, (err)=> {
        if (err) throw err;
          res.write('File.uploaded');
          res.end();
      })

  });
}
else{
  res.writeHead(200, {'Context-Text':'text/html'});
  res.write('<form action ="fileupload" method="post" enctype="multipart/form-data">');
  res.write(' <input type="file" name="filetoupload"><br>')
  res.write('<input type="submit">');
  res.write('</form>');
  res.end();
}
}).listen(8080)