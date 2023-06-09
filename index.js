const express = require('express');
const employeeRouter = require('./routes/router')
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.json());
app.use('/',employeeRouter)
app.get("/",(req,res)=>{
    res.send("<h1>Api is running</h1>")
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})