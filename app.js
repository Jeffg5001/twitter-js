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
nunjucks.configure('views',{noCache:true})
const people = [{name: 'Phil'}, {name: 'Jeff'}, {name: 'Son'}];
var different = true
app.get('/', (req,res) => {
    res.render( 'index', {title: 'Hall of Fame', people: people, test:different} );
})


//res.render( 'index', {title: 'Hall of Fame', people: people} );

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     if(err){throw err};
//     console.log(output);
// });