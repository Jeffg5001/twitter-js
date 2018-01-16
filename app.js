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

const nunjucks = require('nunjucks');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});