var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET HELLO WORLD page. */
router.get('/helloworld', function(req, res) {
	res.render('helloworld', {title: 'Hello World!'});
});

/* GET Userlist from db and render on the page. */
router.get('/userlist', function(req, res) {
	var db = req.db;
  var collection = db.collection('usercollection');
  // collection.find({},{},function(e, docs){
  // 	res.render('userlist', {
  // 		"userlist": docs
  // 	});
  // });
  collection.find().toArray(function(err, docs) {
  	if(err) throw err;

  	docs.forEach(function (doc) {
			console.log(
			  'This is ' + doc['username'] + ', ' + doc['email']
			);
		});

  	res.render('userlist', {
  		"userlist": docs
  	});
  });
});

router.get('/newuser', function(req, res) {
	res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service - adds data to db and redirects to user list */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    console.log('db is available'+ req.db);
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.collection('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});




module.exports = router;
