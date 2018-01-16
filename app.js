const express = require('express');
const nunjucks = require('nunjucks');

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

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views',{noCache:true});
const routes = require('./routes');

//const people = [{name: 'Phil'}, {name: 'Jeff'}, {name: 'Son'}];
//var different = true

// app.get('/', (req,res) => {
//     res.render( 'index', {title: 'Hall of Fame', people: people, test:different} );
// })

app.use('/',routes);

// app.get('/tweets', (req,res) => {
//     res.
// })
