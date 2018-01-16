const _ = require('lodash');
const data = [];

let totalTweets = 0;
function add (name, content) {
    totalTweets++
    id = totalTweets;
    data.push({ name: name, content: content , id:id});
  }
  
  function list () {
    return _.cloneDeep(data);
  }
  
  function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
  }

  const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  };
  
  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };
  

  for (let i = 0; i < 10; i++) {
    var id = totalTweets;
    add( getFakeName(), getFakeTweet());
  }


  module.exports = { add: add, list: list, find: find };

  // console.log('Start');
  // console.log(_.filter(data,index=>/S(?=h|c|t)/g.test(index.name)));