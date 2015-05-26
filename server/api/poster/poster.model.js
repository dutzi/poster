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
	textColor: String,
	icon: String
});

module.exports = mongoose.model('Poster', PosterSchema);
