var mongoose = require('mongoose');
var Joke = mongoose.model('Joke');

function getAllJokes(callback) {
  Joke.find({}, function (err, jokes) {
    if (err) {
      callback(err);
    }
    callback(null, jokes);
  });
}

module.exports = {
   getAllJokes: getAllJokes
//  ,getRandomJoke: getRandomJoke
//  ,createNew: createNew
//  ,getNewest: getNewest
}