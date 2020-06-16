console.log('Hey!');

const path = require('path');
var express = require('express');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
var app = express();

app.use(express.static('uploads'));

app.post('/ay', upload.array('file', 12), function (req, res, next) {
  console.log(req.files);
  res.send('done');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../src/index.html'));
});

// start the Express server
const port = process.env.PORT || 8080; // default port to listen
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
