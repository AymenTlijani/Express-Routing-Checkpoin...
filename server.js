
const express = require('express')
const available=require('./middleware/available')
const path = require('path');
const app = express()
//middleWare Static folder
const PORT = process.env.PORT || 5000;
app.use(available);
app.use(express.static(path.join(__dirname,"/public")))
app.listen(PORT,(err)=>{
        if (err)  {throw (err)}
    else console.log(`the server listening at :http://localhost: ${PORT}...`)
})
