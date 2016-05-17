/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();

var Cat = require('../models/models.js')[0];
var User = require('../models/models.js')[1];

router.get('/', function(req,res) {
	res.redirect('/cats')
});

router.get('/cats', function(req,res) {
	Cat.findAll({}).then(function(result){
		var hbsObject = {
			cats : result,
			logged_in : req.session.logged_in,
			username : req.session.username
		}
		res.render('cats/index', hbsObject);
	})
});

router.post('/cats/create', function(req,res) {
	Cat.create({
		name: req.body.name,
		sleepy: req.body.sleepy,
		user_id: req.session.user_id
	}).then(function(newlyCreatedCat){
		res.redirect('/cats')
	});
});

router.put('/cats/update/:id', function(req,res) {
	Cat.update({
		sleepy: req.body.sleepy
  },
  {
		where: { id : req.params.id }
	}
	).then(function (result) {
		res.redirect('/cats');
  }, function(rejectedPromiseError){
		console.log(rejectedPromiseError);
  });
});

router.delete('/cats/delete/:id', function(req,res) {
	if (req.session.logged_in){
		//check if cat belongs to user then let user delete cat
		Cat.findAll({
	    where: {$and: [{user_id: req.session.user_id}, {id: req.params.id}]}
	  }).then(function(cats) {
			if (cats.length > 0){
				Cat.destroy({
					where: { id : req.params.id }
				}).then(function (result) {
					res.redirect('/cats');
				}, function(rejectedPromiseError){
					console.log(rejectedPromiseError);
				});
			}else{
				res.send("sorry you can't delete that cat.");
			}
		});
	}else {
		res.send("sorry you can't do that. You need to be logged in");
	}

});

module.exports = router;
