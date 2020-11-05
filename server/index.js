const webshot = require('node-webshot');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const uuid = require('uuid');

const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('./public'));

const validateUrl = (str) =>
{
    if (str.split(" ").length > 1)
    {
        return false;
    }
    
    const pattern =/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    return Boolean(pattern.test(str));
};

app.get('/download/:file',(req,res) => {
    const filePath = `${__dirname}/public/${req.params.file}`;
    const type = req.params.file.split(".").slice(-1)[0];
    const fileName = `screenshot.${type}`; 
    res.download(filePath, fileName);  

});


app.post('/shot/', (req,res) => {

    if (!validateUrl(req.body.url) || req.body.quality > 100 || req.body.quality < 0  || !(req.body.format === 'png' || req.body.format === 'jpg'))
    { 
        res.statusCode = 400;
        res.send("verify the Request Configuration provided");

        return;
    }

    const fileName  = uuid.v4() + "." +req.body.format; 
    const options = {
        quality: req.body.quality,
        shotSize: {
            width: 1024,
            height: 'all'
        }};

    webshot(`${req.body.url}`,`${__dirname}/public/${fileName}`, options, function(err) {
        if(err)
        {
            res.statusCode = 500;
            res.send("Server Error, verify the URL provided");
        
            return;
        }

        const image = {
            url: fileName
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(image);
    });
});

app.get('*' ,(req,res) => {
    res.statusCode = 400;
    res.end("Bad Request path");
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running at port ${port}/`);
});