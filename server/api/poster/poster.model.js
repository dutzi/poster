'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PosterSchema = new Schema({
	comment: {
		can_remove: Boolean,
		created_time: Date,
		from: {
			id: String,
			name: String
		},
		id: String,
		like_count: Number,
		message: String,
		user_likes: Boolean
	},
	font: String,
	layout: String,
	bgColor: String,
	post: String,
	textPost: String,
	giantText: String,
	textColor: String,
	icon: String,
	knownWord: String,
	creator: {
		id: String,
		name: String
	}
});

module.exports = mongoose.model('Poster', PosterSchema);
