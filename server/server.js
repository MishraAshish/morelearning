let express = require('express'),
app = express(),
cors = require("cors"),
bodyParser = require("body-parser")
port = process.env.PORT || 3000,
root = __dirname;
global.__base = __dirname + '/';


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:'200mb', extended:false}));//type:'application/x-www-form-urlencoding|application/json',
app.use(express.static(root));
let router = require('./routes');
app.use('/', router);
console.log("we are listening at", port);
app.listen(port);