const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const postSchema = new Schema({
    title: {
        type: String,
        maxlength: 20,
        required: true,
    },
    text: {
        type: String,
        minlength: 5,
        maxlength: 250,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    comments: [commentSchema],
});

const Post = model('Post', postSchema);
module.exports = Post;