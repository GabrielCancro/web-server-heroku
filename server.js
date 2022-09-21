const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://timeapi.io'
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( express.static('public') );

app.get('/time', function (req, res, next) { // GET 'http://www.example.com/admin/new?a=b'
  console.dir(req.originalUrl) // '/admin/new?a=b' (WARNING: beware query string)
  console.dir(req.baseUrl) // '/admin'
  console.dir(req.path) // '/new'
  console.dir(req.baseUrl + req.path) // '/admin/new' (full path without query string)
  let ts = Math.floor(Date.now() / 1000);
  res.send({time:ts})
  

int(time.time()) 
})

 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});