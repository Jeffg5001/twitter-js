const express = require('express');

const app = express();


app.listen(3000, (req,res) => {
    console.log('server listening');
});

app.use('/*',(req,res,next)=>{
    console.log(req.method + ' ' + req.url + ' ' + res.statusCode);
    next();
})

app.use('/special*',(req,res,next)=>{
    res.send('You\'ve reached the special area!')
    next();
})

app.get('/', (req,res) => {
    res.send('Welcome to our website!');
})



//
//
//// these are comments
//
//
