const express= require("express") ;
const bodyParser = require("body-parser");
const {City} = require('./models/index')
const {PORT} = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');
require("dotenv").config() 

const app = express() ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true })); 
app.use('/api',ApiRoutes);
app.use(express.json());
app.listen(PORT,async()=>{
    console.log(`App is running at ${PORT}`);
    
}) 