const express= require("express") ;
const bodyParser = require("body-parser");
const {PORT} = require("./config/serverConfig");

require("dotenv").config() 

const app = express() ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true })); 
app.use(express.json());
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
}) 