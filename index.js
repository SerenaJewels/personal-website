// libraries
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// setup routes
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html')); //__dirname is proj folder
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');