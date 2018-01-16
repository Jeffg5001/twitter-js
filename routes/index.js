const express = require('express');
const router = express.Router();
const _ = require('lodash');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('public'));

router.get('/users/:name',(req,res) =>{
  //console.log(req.params.name);
  let tweetByUser = _.filter(tweetBank.list(),function(tweet){
    return req.params.name === tweet.name;
  })
  res.render('index',{tweets:tweetByUser});
})

router.get('/tweet/:id', (req,res) => {
  let uniqueTweet = _.filter(tweetBank.list(),function(tweet){
    console.log(tweet.id)
    return req.params.id === tweet.id;
  })
  res.render('index',{tweets:uniqueTweet})
})
// router.get('/stylesheets/style.css', (req, res) => {
//     const fs = require('fs');
//     fs.readFile('./public/stylesheets/style.css','utf8', (err, data) => {
//         res.send(data);
//     });   
// });

module.exports = router;


