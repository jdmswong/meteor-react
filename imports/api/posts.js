import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default Posts = new Mongo.Collection('posts');



if (Meteor.isServer) {
	// This code only runs on the server
	// Only publish tasks that are public or belong to the current user
	//Meteor.publish('posts', function() {
	//	return Posts.find();
	//});

	//Posts.find().observe({
	//	added: function(doc){
	//		console.log("Post added: ",doc);
	//
	//	}
	//})
}
