var id3  = require('id3-parser');
var fs   = require('fs');
var find = require('find');
var path = require('path');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var resDir = "/home/peter/music"
var results = []
var public = path.join(__dirname, 'public');

scan(resDir);

function scan(dir) {
  find.file(dir, function (files) {
    for (let i = 0; i < files.length; i++) {
      if (files[i].toLowerCase().includes("mp3")) {
        fs.readFile( files[i], function ( err, data ) {
          if (!err) {
            try {
              id3.parse( data ).then( tags => {
                var obj = new Object();
                obj.filename = files[i];
                if( Object.keys( tags ).length > 0 ) {
                  //console.log( tags );
                  obj.tags = tags;
                }
                else {
                  obj.tags = null;
                }
                results.push(obj);
              });
            }
            catch(e) {
              console.log(e);
            }
          }
          else {
            console.log(err);
          }
        });
      }
    }
  });
}

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(public));

//app.get('/api', async (req, res) => {
app.get('/api', function (req, res) {
  res.status(200).json({
    'results': results
  });
})

//app.get('/', async (req, res) => {
app.get('/', function (req, res) {
  res.sendFile(path.join(public, 'index.html'));
});


app.listen(3004, () => {
  console.log(`listening at http://127.0.0.1:3004`)
})