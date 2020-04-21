const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();


const app = express();
const PORT = process.env.PORT || 80;


//socket
const port = process.env.port || 80;


//const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));
app.use(express.static('public'));

app.listen(port, function () {
    console.log("server running at "+80);
});




app.get('/', function (req, res) {
  console.log("test")
  res.sendFile(__dirname+"/websiteclone/dhannoo/web2/index.html")
});

