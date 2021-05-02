const express = require('express');
const app = express();
//const cors = require('cors')
//const mongoose = require('mongoose');
//const post = require('./routes/posts')
const First = require('./routes/first')
require('dotenv').config();

//mongoose.connect(process.env.ACCES_DATABASE_LINK, { useNewUrlParser : true, useUnifiedTopology: true } ,
  //  ()=>
    //console.log("Connected succesfull")
//);

//app.use(cors());
//app.use(express.json());
app.use('/', First)
//app.use('/user', post);

app.listen(process.env.PORT, ()=>{
    console.log('Succses')
})