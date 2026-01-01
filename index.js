// libraries
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const connectLiveReload = require("connect-livereload");

liveReloadServer.watch(path.join(__dirname, 'public'))

app.use(connectLiveReload())

app.use(express.static(__dirname));

// setup routes
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html')); //__dirname is proj folder
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');

//refreshing
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
})