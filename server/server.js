const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const port= 5000;

//configure CORS
app.use(cors());

//configure dot-env
dotenv.config({path : './config/config.env'});

//configure the json form handling
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//connect to mongoDB database
mongoose.connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then((response)=>{
    console.log(`connected to MongoDB successfully....`);
}).catch((err)=>{
    console.log(err);
    process.exit(1); // to stop the Node JS process
});

// for home page request
app.get('/', (request, response) =>{
    response.send(`<h2>Welcome to My Kar App Backend Server</h2>`)
}); 

// configure the Routing
app.use('/user', require('./router/userRouter'));

//listen
app.listen(port , () => {
    console.log(`server is started at port http://127.0.0.1:${port}`);
});