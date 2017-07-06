//Dependencies
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const logger = require('morgan');
const init = require('firebase-3-react').init;
const firebase = require('firebase');
const flash = require('connect-flash');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

//App Initialized
const app = express();
const PORT = process.env.PORT || 8880;
//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(cookieParser());
// Express Session
app.use(session({secret: 'secret', saveUninitialized: true, resave: true}));
// Passport Init
app.use(passport.initialize());
app.use(passport.session());
// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;
    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {param: formParam, msg: msg, value: value};
  }
})); // Connect Flash Middleware
app.use(flash());

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Mongoose Connections
const mongoConnection = process.env.MONGODB_URI;
const db = mongoose.connection;
const MONGODB_URI = "mongodb://<dbuser>:<dbpassword>@ds125481.mlab.com:25481/heroku_0p3792pt";
const localMongo = mongoose.createConnection('mongodb://localhost/rolldemo', {useMongoClient: true});
const Character = require('./database/models/charschema');
const User = require('./database/models/userschema');
const users = require('./database/users.js');
const characters = require('./database/characters.js');
if (mongoConnection) {
  console.log("connected to heroku");
  mongoose.connect(mongoConnection)
} else {
  console.log("connected locally");
  localMongo
};
db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function () {
  console.log("Mongoose connection successful.");
});
app.get(Character, User);
app.use('/charschema', characters);
app.use('/userschema', users);

app.get('*', function (req, res) {
  res.sendFile('public/index.html', {root: __dirname});
});
// app.post('/api/firebase', function (req, res) {   console.log(req.body);
// function loginUser() {     const init = {       method: POST,       headers:
// {         'Content-Type': 'application/x-www-form-urlencoded'       },
// body: `username=${creds.username}&password=${creds.password}`,       apiKey:
// "AIzaSyB6VDtff7XjXPuAlYuMZwOKNFGEzsc5DgQ",       authDomain:
// "ddproj-78722.firebaseapp.com",       databaseURL:
// "https://ddproj-78722.firebaseio.com",       projectId: "ddproj-78722",
// storageBucket: "ddproj-78722.appspot.com",       messagingSenderId:
// "944554149074"     };     console.log('firebase connected');     //   }var
// database = firebase.database();     var ref = database.ref();     // Log In
// Button     $("#btnLogIn").on("click", function () {       var email =
// $("#email-input")         .val()         .trim();       var password =
// $("#password-input")         .val()         .trim();       console.log("Log
// In clicked");       // Sign In to FBase       firebase         .auth()
//  .signInWithEmailAndPassword(email, password)         .catch(function (error)
// {           console.log("User not registered.")           // Handle Errors
// here.           var errorCode = error.code;           var errorMessage =
// error.message;         });     });     $("#signup, .check-us").on("click",
// function () {       $("#log-in, #login-tab").removeClass("active");
// $("#register, #register-tab").addClass("active");     });
// $("#login").on("click", function () {       $("#log-in,
// #login-tab").addClass("active");       $("#register,
// #register-tab").removeClass("active");     });     // Sign Up Button
// $("#btnSignUp").on("click", function (snap) {       var firstName =
// $("#new-first-name-input")         .val()         .trim();       var lastName
// = $("#new-last-name-input")         .val()         .trim();       var email =
// $("#new-email-input")         .val()         .trim();       var password =
// $("#new-password-input")         .val()         .trim();
// console.log("sign up clicked");     });   }; })       // Create and sign in
// the user to FBase       firebase         .auth()
// .createUserWithEmailAndPassword(email, password) .catch(function (error) {
//        console.log("made it to error") // Handle Errors here. var errorCode =
// error.code;           var errorMessage = error.message; });   });     // When
// there is a change to who is logged in     firebase .auth()
// .onAuthStateChanged(function (user) {      if (user) { console.log("User
// Logged-In")           // Declaring all Variables var firstName =
// user.firstName;           var lastName = user.lastName;     var email =
// user.email;           var emailVerified = user.emailVerified;   var photoURL
// = user.photoURL;           var isAnonymous = user.isAnonymous;     var uid =
// user.uid;           var providerData = user.providerData;     //Removing
// Log-In page $("#btnLogOut").removeClass("hide");
// $("#main-cont").removeClass("hide"); $("#log-in-cont").addClass("hide");
// //Log Out Button $("#btnLogOut").on("click", function () { //User Logs Out
// from FBase             firebase               .auth()       .signOut()
// .then(function () {                 console.log("User Logged-Out")         })
//               .catch(function (error) {   // Handle Errors here.    var
// errorCode = error.code;   var errorMessage = error.message;    });
// location.reload(true);    }); };       });   }; loginUser().init(req.body,
// function (err, creds) {   if (err) { console.log(err);     } else {
// res.json(creds);     } }); }); Connection to PORT
app.listen(PORT, function () {
  console.log(`Listening On Port: ${PORT}`);
})