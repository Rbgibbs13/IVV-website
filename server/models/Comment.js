const { Schema } = require('mongoose');

const commentSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comment: {
        type: String,
        maxlength: 250,
    }
});

module.exports = commentSchema;