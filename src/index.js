const express= require("express") ;
const {PORT} = require("./config/serverConfig")
require("dotenv").config() 

const app = express() ;
app.use(express.json());
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})