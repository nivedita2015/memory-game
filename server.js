'user strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
 res.setHeader(‘Access-Control-Allow-Credentials’, ‘true’);
 res.setHeader(‘Access-Control-Allow-Methods’, ‘GET,HEAD,OPTIONS,POST,PUT,DELETE’);
 res.setHeader(‘Access-Control-Allow-Headers’, ‘Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers’);
    
//and remove cacheing so we get the most recent comments
 res.setHeader(‘Cache-Control’, ‘no-cache’);
 next();
});


//now we can set the route path & initialize the API
router.get(‘/’, function(req, res) {
 res.json({ message: ‘API Initialized!’});
});
//Use our router configuration when we call /api
app.use(‘/api’, router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});