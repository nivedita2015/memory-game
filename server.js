'user strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

let app = express();
let router = express.Router();
let schema = mongoose.Schema;
let port = process.env.API_PORT || 3001;

let mongoDB = 'mongodb://test:test@ds145892.mlab.com:45892/mydb';
mongoose.connect(mongoDB, { useMongoClient: true });

let cardSchema = {
    data: [] ,
    status:String,
    cards: String
}

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

router.route('/cards')
    .get((req,res) =>{
    cardSchema.find((err,cards) => {
        console.log("inside get");
        if(err)
            res.send(err);
        console.log(cards);
        res.json(cards);
    })
});



//Use our router configuration when we call /api
app.use(‘/api’, router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});