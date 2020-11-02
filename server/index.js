var webshot = require('node-webshot');
const http = require('http');
const bodyParser = require('body-parser');

const uuid = require('uuid');

// const captureWebsite = require('capture-website');

var path = require('path');

const express = require('express')

const hostname = 'https://sparrow-shot.herokuapp.com';
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())

var fs = require('fs');

var dir = path.join(__dirname, 'public');

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

app.get('/download/:file',(req,res,next) => {

  var filePath = `${__dirname}/public/${req.params.file}`;
  var type = req.params.file.split(".").slice(-1)[0] 
  var fileName = `screenshot.${type}`; // The default name the browser will use

  res.download(filePath, fileName);  

})

app.post('/shot/', (req,res,next) => {

  console.log(req.body);

  var fileName  = uuid.v4() + "." +req.body.format; 

  webshot(`${req.body.url}`,`${__dirname}/public/${fileName}`, options = {
    quality: req.body.quality,
    shotSize: {
      width: 1024,
       height: 'all'
    }}, function(err) {
      if(err)
      {
        console.log(err)
      }
      // screenshot now saved to google.png
      console.log(`${fileName}`+" build done");
      image = {
        url: `${hostname}/${fileName}`
      }
      res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(image);
    })
  
 /*(async () => {
	await captureWebsite.file(`${req.body.url}`, `${__dirname}/public/ready.${req.body.format}`, {
    width: 1280,
    height: 800,
    fullPage: true,
    quality: req.body.quality,
    type: req.body.format
	});
})();
*/
});

app.get('*', function (req, res) {
    var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
    if (file.indexOf(dir + path.sep) !== 0) {
        return res.status(403).end('Forbidden');
    }
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});


const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at port ${port}/`);
});