var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _ = require('lodash');
var db = require('../db');

router.get('/',function(req,res){
	var filterName = req.query.username;
	var searchTerm = req.query.searchTerm;
	if (searchTerm){
		var searchObj = {searchTerm: new RegExp(searchTerm,'i')};
	}
	else{
		var searchObj = {};
	}
	db.User.find(searchObj,function(err,users){

		db.User.findOne({username:filterName},function(err,owner){

			users = users.filter(function(user){
				return (user.username!==filterName && !owner.friends[user.username]);
			});
			var mappedUsers = users.map(function(user){
				return {_id: user._id, username:user.username, firstname:user.firstname, lastname:user.lastname, avatarUrl:user.avatarUrl}
			});

			res.send(_.shuffle(mappedUsers));

		})
	});
})

module.exports = router;
