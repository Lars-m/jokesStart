var mongoose = require( 'mongoose' );

//Uncomment if you are going to use a local instance or add connection details for your account on MongoLab
//var dbURI = 'mongodb://localhost/joke';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

/** JOKES SCHEMA ** */
var jokesSchema = new mongoose.Schema({
  joke: String,
  reference: String,
  created: { type: Date, default: new Date() }
});


mongoose.model( 'Joke', jokesSchema,"jokes" );

