const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('public'));

// router.get('/stylesheets/style.css', (req, res) => {
//     const fs = require('fs');
//     fs.readFile('./public/stylesheets/style.css','utf8', (err, data) => {
//         res.send(data);
//     });   
// });

module.exports = router;


